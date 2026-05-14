export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).json({
      ok: true,
      message: "API de leads funcionando"
    });
  }

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbz9mx_WXo1_jFZRHZUanUZKCg7Dj-j6Sccu4egs_2Y6BgUYHgutfPA7wcGdYNedSUqf/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();

    return res.status(200).json({
      ok: true,
      message: "Lead enviado para a planilha",
      sheetsResponse: data
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: "Erro ao enviar lead para a planilha",
      error: String(error)
    });
  }
}
