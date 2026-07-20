import fs from "fs";

export default async function handler() {
  try {
    const systemPrompt = fs.readFileSync(
      "private/ai-system-prompt.txt",
      "utf-8"
    );

    return new Response(
      JSON.stringify({ systemPrompt }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        }
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}