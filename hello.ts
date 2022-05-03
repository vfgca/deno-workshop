const titleStyle = "font-weight: bold;";

console.log("%c//////// console", titleStyle);

console.log("Hello, world!");

console.log(
  "%cHello, world!",
  "background-color: yellow; color: black; font-weight: bold;",
);

console.log("%c//////// fetch", titleStyle);

let res = await fetch("https://example.com");

console.log("* res.status:", res.status);

console.log(
  '* res.headers.get("Content-Type"):',
  res.headers.get("Content-Type"),
);

console.log("* res.text():");
console.log("%c--------", "color: green;");
console.log(await res.text());
console.log("%c--------", "color: green;");

console.log("%c//////// globalThis", titleStyle);

console.log("* globalThis:");
console.log("%c--------", "color: green;");
console.log(globalThis);
console.log("%c--------", "color: green;");
