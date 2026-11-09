// PreToolUse: block edits to lock files and node_modules.
let s = "";
process.stdin.on("data", (d) => (s += d));
process.stdin.on("end", () => {
  const p = (JSON.parse(s).tool_input?.file_path ?? "").replaceAll("\\", "/");
  if (/\/node_modules\/|\/package-lock\.json$/.test(p)) {
    console.error(`Blocked: ${p} is generated. Use npm install instead.`);
    process.exit(2);
  }
});
