"use client";

import { useQuery } from "@tanstack/react-query";

export default function Home() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );

            if (!res.ok) {
                throw new Error("Failed to fetch posts");
            }

            return res.json();
        },
        retry: 2,
    });

    if (isLoading) return <p>Loading posts...</p>;

    if (isError) return <p>Error: {error.message}</p>;

    return (
        <main>
            <h1>Posts</h1>

            {data.map((post) => (
                <article key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </article>
            ))}
        </main>
    );
}