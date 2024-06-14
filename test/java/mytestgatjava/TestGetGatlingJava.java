package mytestgatjava;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;

public class TestGetGatlingJava extends Simulation {
  
  HttpProtocolBuilder httpProtocol = HttpDsl.http
      .baseUrl("http://localhost:8080/app")
      .acceptHeader("application/json");

  ChainBuilder get_scn =
      repeat(5, "i").on(
          http("Game #{i}")
              .get("/videogames?p=#{i}")
              .check(
                  status().is(200)
              ),
          pause(2)
      );

  ChainBuilder get_all_scn =
      repeat(10).on(
          http("Get all game")
              .get("/videogames")
              .check(
                  status().is(200)
              ),
          pause(1)
      );
  ScenarioBuilder scn_id = scenario("Get id game").exec(get_scn);
  ScenarioBuilder scn_all = scenario("Get all games").exec(get_all_scn);
  
  {
    setUp(
        scn_id.injectOpen(atOnceUsers(3)),
        scn_all.injectOpen(atOnceUsers(10))
    ).protocols(httpProtocol);
  }
}
