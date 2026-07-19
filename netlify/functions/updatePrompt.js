import { getStore } from "@netlify/blobs";
import fs from "fs";

export default async function handler(req) {
  try {
    // Protection simple avec un secret
    const auth = req.headers.get("authorization");

    if (auth !== `Bearer ${process.env.ADMIN_SECRET}`) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401 }
      );
    }

    // Lire le fichier local
    const prompt = fs.readFileSync(
      "private/ai-system-prompt.txt",
      "utf-8"
    );

    // Sauvegarder dans Netlify Blobs
    const store = getStore("system");

    await store.set(
      "system_prompt",
      prompt
    );

    return new Response(
      JSON.stringify({
        success: true,
        message: "System prompt updated"
      }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

  } catch (err) {
    return new Response(
      JSON.stringify({
        error: err.message
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}