import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  const content = await readFile(
    path.join(process.cwd(), "public/llms.txt"),
    "utf8",
  );

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
