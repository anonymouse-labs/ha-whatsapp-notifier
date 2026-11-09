// PostToolUse: run bridge tests after editing whatsapp_bridge/*.js.
import { spawnSync } from "node:child_process";
let s = "";
process.stdin.on("data", (d) => (s += d));
process.stdin.on("end", () => {
  const p = (JSON.parse(s).tool_input?.file_path ?? "").replaceAll("\\", "/");
  if (!/\/whatsapp_bridge\/[^/]+\.js$/.test(p)) return;
  const r = spawnSync("npm", ["test", "--silent"], { cwd: "whatsapp_bridge", shell: true, encoding: "utf8" });
  if (r.status !== 0) {
    console.error(r.stdout + r.stderr);
    process.exit(2);
  }
});
