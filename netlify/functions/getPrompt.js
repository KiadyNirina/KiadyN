import { getStore } from "@netlify/blobs";

export default async function handler() {
  try {
    const store = getStore("system");
    const systemPrompt = await store.get("system_prompt");

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
