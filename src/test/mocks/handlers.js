import { http, HttpResponse  } from "msw";

export const handlers = [
    http.post("https://tokenservice-jwt-2025.fly.dev/token-service/v1/request-token", async ({ request }) => {
        const { username, password } = await request.json();

        if(username === "axel" && password === "123456789") {
            return new HttpResponse("mocked-jwt-token", {
                status: 200,
                headers: { "Content-Type": "text/plain" }
            });
        }

        return HttpResponse.json(
            { message: "Unauthorized" }, 
            { status: 401 }
        );
    }),

    http.get("https://tokenservice-jwt-2025.fly.dev/movies", ({ request }) => {
        const authHeaders = request.headers.get("Authorization");

        if(authHeaders === "Bearer mocked-jwt-token") {
            const data = [
                {
                    title: "A movie with a name here",
                    director: "Some Totally Real Person",
                    description: "It's a movie that you watch with your eyes open",
                    productionYear: 2005
                },
                {
                    title: "The sun is not real",
                    director: "Anti-Sun Peoples Assosciation",
                    description: "Do you have any proof that the sun is actually real? We don't think you do.",
                    productionYear: 2025
                },
                {
                    title: "If you can read this you're the chosen one",
                    director: "The One That Selects All Heroes",
                    description: "Once upon a time, that's how it begins anyway...",
                    productionYear: 2019
                },
            ]

            return HttpResponse.json(data);
        }

        return HttpResponse.json(
            { message: "ForBidden" }, 
            { status: 403 }
        );
    })
]