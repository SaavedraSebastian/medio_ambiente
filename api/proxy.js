// api/proxy.js (para Vercel)
export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  try {
    const gsResponse = await fetch("https://script.google.com/macros/s/AKfycbyFZrTilWgjFxsVBwfLx0eGGrwwKW6fy1qA_fBZnnb1r_f3YpHpgE--pT-nw6gcIP0l/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    const data = await gsResponse.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json(data);
  } catch (error) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(500).json({ success: false, error: error.message });
  }
}
