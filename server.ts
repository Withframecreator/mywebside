import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Helper for Gemini
function getAIClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is missing.");
  }
  return new GoogleGenAI({ apiKey });
}

// API Route: AI Shoot Planner
app.post("/api/plan-shoot", async (req, res) => {
  try {
    const { eventType, vibe, venue, duration } = req.body;

    if (!eventType || !vibe) {
      return res.status(400).json({ error: "Event type and vibe are required." });
    }

    const prompt = `You are the Lead Creative Director at "With Frame Creator" (विथ फ्रेम क्रिएटर), a luxury 5-star wedding and event photography studio in India known for cinematic storytelling and viral Instagram Reels.

A prospective client wants a customized shoot concept with the following details:
- Event / Shoot Type: ${eventType}
- Mood / Aesthetic Vibe: ${vibe}
- Venue / Location: ${venue || "Standard Location"}
- Duration / Scale: ${duration || "1 Day"}

Generate an inspiring, professional, and structured creative shoot plan. Return strictly valid JSON matching this schema:
{
  "conceptTitle": "String (catchy cinematic title for their shoot)",
  "colorPalette": ["Hex1", "Hex2", "Hex3", "Hex4"],
  "paletteNames": ["Name1", "Name2", "Name3", "Name4"],
  "moodboardSummary": "2-3 sentences describing the cinematic look and feel, lighting, and emotion.",
  "mustHaveShots": [
    { "title": "Shot Name", "description": "Specific angle/direction (e.g. Low angle slow-mo under veil)" }
  ],
  "reelConcept": {
    "hook": "First 3 seconds visual hook",
    "trendingAudioStyle": "Recommended music style (e.g., Sufi acoustic blend or Modern synth)",
    "storyline": "Brief flow of the 30-sec Instagram reel"
  },
  "recommendedGear": ["Item 1", "Item 2", "Item 3"],
  "estimatedTeamSize": "e.g., 2 Senior Cinematographers + 1 Candid Photographer"
}
Do not include markdown formatting or code blocks outside the pure JSON object if possible, or ensure it is valid JSON.`;

    const ai = getAIClient();
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text || "{}";
    const parsed = JSON.parse(text);
    res.json(parsed);
  } catch (error: any) {
    console.error("AI Planner Error:", error);
    res.status(500).json({
      error: error.message || "Failed to generate shoot concept.",
      fallback: {
        conceptTitle: "Royal Cinematic Storytelling",
        colorPalette: ["#D4AF37", "#1A1A1A", "#800020", "#F5F5DC"],
        paletteNames: ["Royal Gold", "Obsidian Black", "Burgundy Velvet", "Warm Ivory"],
        moodboardSummary: "A timeless blend of warm candid moments and high-contrast dramatic portraits designed to feel like a feature film.",
        mustHaveShots: [
          { title: "The Grand Silhouette", description: "Backlit sunset portrait capturing the couple's silhouette against dramatic clouds." },
          { title: "Raw Emotion Close-up", description: "Unposed candid reaction during the ring exchange or vows." },
          { title: "Cinematic Slow-Mo Twirl", description: "High frame-rate 4K slow motion shot of the attire spinning." }
        ],
        reelConcept: {
          hook: "Fast transition from monochrome prep shot to full vibrant color reveal.",
          trendingAudioStyle: "Cinematic orchestral build-up into modern ambient beats.",
          storyline: "0-3s Hook -> 3-15s Emotional highlights -> 15-30s High energy celebration montage."
        },
        recommendedGear: ["Sony A7S III 4K60p", "Prime 85mm f/1.4 Lens", "DJI Ronin Gimbal", "DJI Mavic 3 Drone"],
        estimatedTeamSize: "2 Cinematographers + 2 Candid Photographers + 1 Drone Pilot"
      }
    });
  }
});

// API Route: Smart Assistant Chatbot
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    const systemPrompt = `You are "Framey", the highly professional, charming, and responsive AI Studio assistant of "With Frame Creator" (विथ फ्रेम क्रिएटर). 
We are a luxury, 5-star wedding, event, and commercial photography & cinematography studio in India (Delhi NCR, with PAN India coverage).
We are open 24 hours (24/7 Service Available).
Phone: +91 82876 15770, Email: withframecreator@gmail.com
Instagram: @withframecreator

Our Services & Pricing:
1. Silver Package (Intimate Celebration - ₹45,000 to ₹75,000 starting): 1 Day, 1 Candid Photographer, 1 Traditional, 1 Cinematic Videographer, highlight film, 250+ edited photos, 5-day delivery.
2. Gold Package (Royal Shaadi Classic - ₹1,25,000 to ₹1,35,000 starting): 2 Days (Haldi/Mehendi + Wedding), 2 Candid Photographers, 1 Traditional, 2 Cinematographers, 1 Drone Pilot, 3 Instagram Reels, 2 Premium albums.
3. Platinum Package (Cinematic Grand Legacy - ₹2,00,000 to ₹2,40,000 starting): 3 Days (Full Destination), Lead Director, 3 Candid, 3 Cinematographers, Dual Drone crew, pre-wedding shoot included, 8 Reels, 3 luxury couple/parent albums.

Founder & Team: Sumit (Founder & Creative Head).
Our brand is famous for dramatic lighting, raw emotions, Bollywood style romantic pre-wedding shoots, and high-quality 4K slow-mo viral Instagram Reels.

Your goal is to answer client queries warmly, promote our luxury services, guide them to use our "AI Shoot Planner" on our website, and encourage them to book a consultation or WhatsApp us (+91 82876 15770). 
Respond in a friendly, helpful blend of English and warm Hindi (Hinglish) where natural, reflecting premium Indian hospitality. Keep answers relatively concise and highly engaging. Do not use markdown format for structure, use clear line breaks instead.`;

    // Format chat history for Gemini
    const contents = [
      { role: "user", parts: [{ text: systemPrompt }] },
      { role: "model", parts: [{ text: "Understood. I am Framey, the With Frame Creator AI assistant. I am ready to welcome prospective clients with warm Indian hospitality and help them plan their dream shoots!" }] }
    ];

    if (history && Array.isArray(history)) {
      history.forEach((h: any) => {
        contents.push({
          role: h.role === "assistant" ? "model" : "user",
          parts: [{ text: h.content }]
        });
      });
    }

    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const ai = getAIClient();
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
      config: {
        maxOutputTokens: 500,
        temperature: 0.7,
      }
    });

    const reply = response.text || "Thank you for contacting With Frame Creator! Please feel free to call us directly at +91 82876 15770.";
    res.json({ reply });
  } catch (error: any) {
    console.error("AI Chatbot Error:", error);
    res.status(500).json({ 
      reply: "Namaste! I am having a slight technical hitch, but Sumit is available 24/7! Please feel free to WhatsApp or call us directly at +91 82876 15770. How can we make your day special?" 
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`With Frame Creator Studio server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
