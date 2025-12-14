import fs from "fs"
import path from "path"

export default async () => {
  const promptPath = path.resolve("private/ai-system-prompt.txt")
  const systemPrompt = fs.readFileSync(promptPath, "utf-8")

  return new Response(
    JSON.stringify({ systemPrompt }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    }
  )
}
