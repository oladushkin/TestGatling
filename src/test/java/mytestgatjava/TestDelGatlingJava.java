package mytestgatjava;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;

public class TestDelGatlingJava extends Simulation {
  
  HttpProtocolBuilder httpProtocol = HttpDsl.http
      .baseUrl("http://localhost:8080/app")
      .acceptHeader("application/xml");
  
  ChainBuilder del_scn =
      exec(
          http("Del Game")
              .delete("/videogames/14")
              .check(
                  status().is(200)
              )
      );
  
  ScenarioBuilder scn = scenario("Del Game").exec(del_scn);
  
  {
    setUp(
        scn.injectOpen(atOnceUsers(1))
            .protocols(httpProtocol)
    );
  }
}
