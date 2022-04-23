console.log("Hello, world!");

console.log("%cHello, world!", "background-color: yellow; color: black; font-weight: bold;");




let resp = await fetch("https://example.com");

console.log(resp.status); // 200
console.log(resp.headers.get("Content-Type")); // "text/html"
console.log(await resp.text()); // "Hello, World!"




