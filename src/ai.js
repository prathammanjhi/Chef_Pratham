// src/utils/ai.js
import { InferenceClient } from "@huggingface/inference";
// import { HF_API_KEY } from "./config";
const HF_API_KEY = "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";

export async function getRecipeFromMistral(ingredientsArr) {
  const hf = new InferenceClient(HF_API_KEY);
  const ingredientsString = ingredientsArr.join(", ");

  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mistral-7B-Instruct-v0.3",
      messages: [
        { role: "system", content: "You are a helpful chef assistant." },
        {
          role: "user",
          content: `I only have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
    });

    return response.choices[0]?.message?.content;
  } catch (err) {
    console.error("Error fetching recipe:", err.message);
    return "Sorry, could not fetch recipe!";
  }
}
