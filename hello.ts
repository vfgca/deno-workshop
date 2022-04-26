console.log("Hello, world!");

console.log("%cHello, world!", "background-color: yellow; color: black; font-weight: bold;");




let res = await fetch("https://example.com");

console.log("========");
console.log('* res.status:', res.status);
console.log('* res.headers.get("Content-Type"):', res.headers.get("Content-Type"));
console.log("--------");
console.log('* res.text():');
console.log("%c[", "color: green;");
console.log(await res.text());
console.log("%c]", "color: green;");
console.log("========");







