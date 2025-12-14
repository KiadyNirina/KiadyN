import fs from "fs"
import path from "path"

export default async () => {
  try {
    const promptPath = path.join(
      process.cwd(),
      "private",
      "ai-system-prompt.txt"
    )

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
  } catch (error) {
    console.error("getPrompt error:", error)

    return new Response(
      JSON.stringify({
        error: "Failed to load system prompt"
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        }
      }
    )
  }
}
