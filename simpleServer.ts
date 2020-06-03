import { serve } from "https://deno.land/std/http/server.ts";

const s = serve({ port: 8080 });
console.log("http://localhost:8080/");

for await (const request of s) {
  request.respond({
    body: "Hello Deno World",
  });
}
