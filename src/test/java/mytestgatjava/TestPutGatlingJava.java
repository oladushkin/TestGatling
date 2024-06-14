package mytestgatjava;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;

public class TestPutGatlingJava extends Simulation {
  
  HttpProtocolBuilder httpProtocol = HttpDsl.http
      .baseUrl("http://localhost:8080/app")
      .acceptHeader("application/xml");
  
  ChainBuilder put_scn =
      exec(
          http("Put Game")
              .put("/videogames/14")
              .body(ElFileBody("src/json/requestPut.json"))
              .asJson()
              .check(status().is(200))
      );
  
  ScenarioBuilder scn = scenario("Put Game").exec(put_scn);
  
  {
    setUp(
        scn.injectOpen(atOnceUsers(1))
            .protocols(httpProtocol)
    );
  }
}
