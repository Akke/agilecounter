export const getAllMovies = async (token) => {
    const response = await fetch("https://tokenservice-jwt-2025.fly.dev/movies", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    return response;
}