import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Using the Nano Banana / Flash Image model as requested
const MODEL_NAME = 'gemini-2.5-flash-image';

export const generateDefenseVisual = async (customPrompt?: string): Promise<string> => {
  if (!apiKey) {
    console.warn("API Key is missing. Returning placeholder.");
    return "https://picsum.photos/1200/800";
  }

  const prompt = customPrompt || "Abstract, futuristic 3D glass shield protecting a glowing core, pitch black background, neon blue and crimson red accents, liquid metal texture, high fidelity, cinematic lighting, depth of field, 8k resolution, minimalist interface elements, cyberpunk aesthetic";

  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: {
        parts: [
          {
            text: prompt,
          },
        ],
      },
    });

    // Extract image from response
    // Based on guidelines: "The output response may contain both image and text parts; you must iterate through all parts to find the image part."
    const candidates = response.candidates;
    if (candidates && candidates.length > 0) {
      const parts = candidates[0].content.parts;
      for (const part of parts) {
        if (part.inlineData) {
          const base64EncodeString = part.inlineData.data;
          return `data:image/png;base64,${base64EncodeString}`;
        }
      }
    }
    
    throw new Error("No image data found in response");

  } catch (error) {
    console.error("Gemini Image Generation Error:", error);
    // Fallback image in case of failure or rate limits
    return "https://picsum.photos/seed/defi/1200/800";
  }
};