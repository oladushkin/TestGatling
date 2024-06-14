package mytestgatjava;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;

import java.util.Dictionary;
import java.util.concurrent.ThreadLocalRandom;

public class TestPostGatlingJava extends Simulation {

    // 1. Конфигурация Http.
    HttpProtocolBuilder httpProtocol = HttpDsl.http
        .baseUrl("http://localhost:8080/app")
        .acceptHeader("application/xml");

    // 2. Определение сценария
    ChainBuilder post_scn =
        exec(
            http("Post game")
                .post("/videogames")
                .body(ElFileBody("src/json/request.json"))
                .asJson()
                .check(status().is(200))
        );
    
    ScenarioBuilder scn = scenario("POST Game").exec(post_scn);
  
  {
    setUp(
        scn.injectOpen(atOnceUsers(1))
    ).protocols(httpProtocol);
  }

}
