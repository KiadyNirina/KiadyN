import { getStore } from "@netlify/blobs";
import fs from "fs";

export default async function handler() {
  try {
    let systemPrompt;

    if (process.env.NETLIFY_DEV) {
      // Local : lire le fichier directement
      systemPrompt = fs.readFileSync("private/ai-system-prompt.txt", "utf-8");
    } else {
      // Prod : utiliser Netlify Blobs
      const store = getStore("system");
      systemPrompt = await store.get("system_prompt");
    }

    if (!systemPrompt) {
      return new Response(
        JSON.stringify({ error: "System prompt not found" }),
        { status: 404 }
      );
    }

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
      { status: 500 }
    );
  }
}
