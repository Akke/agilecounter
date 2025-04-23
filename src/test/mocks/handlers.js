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

        return HttpResponse.json({ message: "Unauthorized" }, { status: 401 });
    })
]