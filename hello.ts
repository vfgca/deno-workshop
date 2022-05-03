const titleStyle = "font-weight: bold;";
const lineStyle = "color: green;";

console.log("\n%c//////// console", titleStyle);

console.log("Hello, world!");

console.log(
  "%cHello, world!",
  "background-color: yellow; color: black; font-weight: bold;",
);

console.log("\n%c//////// fetch", titleStyle);

let res = await fetch("https://example.com");

console.log("* res.status:", res.status);

console.log(
  '* res.headers.get("Content-Type"):',
  res.headers.get("Content-Type"),
);

console.log("* res.text():");
console.log("%c--------", lineStyle);
console.log(await res.text());
console.log("%c--------", lineStyle);

console.log("\n%c//////// globalThis", titleStyle);

console.log("* globalThis:");
console.log("%c--------", lineStyle);
console.log(globalThis);
console.log("%c--------", lineStyle);

console.log("\n%c//////// permission", titleStyle);

const permission_desc_write = { name: "write" } as const;
console.log(
  '* { name: "write" }:',
  await Deno.permissions.query(permission_desc_write),
);

const permission_desc_net1 = { name: "net" } as const;
console.log(
  '* { name: "net" }:',
  await Deno.permissions.query(permission_desc_net1),
);

const permission_desc_net2 = { name: "net", host: "127.0.0.1:8000" } as const;
console.log(
  '* { name: "net", host: "127.0.0.1:8000" }:',
  await Deno.permissions.query(permission_desc_net2),
);

const permission_desc_hrtime = { name: "hrtime" } as const;
console.log(
  '* { name: "hrtime" }:',
  await Deno.permissions.query(permission_desc_hrtime),
);
