const encoder = new TextEncoder();

const greetText = encoder.encode(
  "Hello World\nMy name is Forhad Chowdhury",
);

await Deno.writeFile("greet.txt", greetText);
