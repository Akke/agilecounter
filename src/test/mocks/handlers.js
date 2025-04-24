import { http, HttpResponse } from "msw";

export const handlers = [
  http.post(
    "https://tokenservice-jwt-2025.fly.dev/token-service/v1/request-token",
    async ({ request }) => {
      const { username, password } = await request.json();

      if (username === "axel" && password === "123456789") {
        return new HttpResponse("mocked-jwt-token", {
          status: 200,
          headers: { "Content-Type": "text/plain" },
        });
      }

      return HttpResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
  ),
  http.get(
    "https://tokenservice-jwt-2025.fly.dev/movies",
    async ({ request }) => {
      const authHeader = request.headers.get("Authorization");
      if (authHeader === "Bearer mocked-jwt-token") {
        return HttpResponse.json([
          {
            title: "The titanic",
            description: "asndokasmdaksmd",
            director: "din mamma",
            productionYear: 2015,
          },
          {
            title: "Bilar",
            description: "asndokasmdaksmd",
            director: "din mamma",
            productionYear: 2015,
          },
          {
            title: "Jason Bourne",
            description: "asndokasmdaksmd",
            director: "din mamma",
            productionYear: 2015,
          },
        ]);
      }
      return HttpResponse.json({ message: "Forbidden" }, { status: 403 });
    }
  ),
];
