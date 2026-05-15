let currentStep = 1;

function showStep(step) {
  const steps = document.querySelectorAll(".step-screen");
  steps.forEach((item) => item.classList.remove("active"));

  const current = document.getElementById(`step-${step}`);
  if (current) {
    current.classList.add("active");
  }

  const indicator = document.getElementById("step-indicator");
  if (indicator) {
    indicator.innerText = `Etapa ${step} de 3`;
  }
}

function nextStep() {
  if (currentStep === 2) {
    const nameInput = document.getElementById("business-name");
    const serviceInput = document.getElementById("business-service");
    const locationInput = document.getElementById("business-location");
    const whatsappInput = document.getElementById("business-whatsapp");

    if (
      !nameInput.value.trim() ||
      !serviceInput.value.trim() ||
      !locationInput.value.trim() ||
      !whatsappInput.value.trim()
    ) {
      alert("Preencha todos os campos antes de avançar.");
      return;
    }

    document.getElementById("preview-name").textContent = nameInput.value;
    document.getElementById("preview-service").textContent = serviceInput.value;
    document.getElementById("preview-location").textContent = locationInput.value;
    document.getElementById("preview-whatsapp").textContent = whatsappInput.value;
    document.getElementById("preview-whatsapp-link").href = "https://wa.me/55" + whatsappInput.value;
  }

  if (currentStep < 3) {
    currentStep++;
    showStep(currentStep);
  }}
function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    showStep(currentStep);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  showStep(currentStep);

  const nameInput = document.getElementById("business-name");
  const serviceInput = document.getElementById("business-service");
  const locationInput = document.getElementById("business-location");
  const whatsappInput = document.getElementById("business-whatsapp");

  const previewName = document.getElementById("preview-name");
  const previewService = document.getElementById("preview-service");
  const previewLocation = document.getElementById("preview-location");
  const previewWhatsapp = document.getElementById("preview-whatsapp");

function updatePreview() {
  previewName.textContent = nameInput.value || "Seu negócio aparecerá aqui";
  previewService.textContent = serviceInput.value || "Seu serviço aparecerá aqui.";
  previewLocation.textContent = locationInput.value || "Sua localização aparecerá aqui.";
  whatsappInput.value = whatsappInput.value.replace(/\D/g, "") .slice(0, 11);
  previewWhatsapp.textContent = whatsappInput.value || "Seu WhatsApp aparecerá aqui.";

  const cleanWhatsapp = whatsappInput.value.replace(/\D/g, "");
  const whatsappLink = document.getElementById("preview-whatsapp-link");
  whatsappLink.href = cleanWhatsapp ? `https://wa.me/55${cleanWhatsapp}` : "#";
}

  nameInput.addEventListener("input", updatePreview);
  serviceInput.addEventListener("input", updatePreview);
  locationInput.addEventListener("input", updatePreview);
  whatsappInput.addEventListener("input", updatePreview);

  updatePreview();
});
async function generateLandingPage() {
  const name = document.getElementById("business-name").value.trim();
  const service = document.getElementById("business-service").value.trim();
  const location = document.getElementById("business-location").value.trim();
  const whatsapp = document.getElementById("business-whatsapp").value.replace(/\D/g, "").slice(0, 11);
  const params = new URLSearchParams(window.location.search);
const utm_source = params.get("utm_source") || "";
const utm_medium = params.get("utm_medium") || "";
const utm_campaign = params.get("utm_campaign") || "";
const origem = utm_source || "direto";

  if (!name || !service || !location || !whatsapp) {
    alert("Preencha todos os campos.");
    return;
  }

  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        service,
        location,
        whatsapp,
        origem,
        utm_source,
  utm_medium,
  utm_campaign
      })
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Erro ao enviar lead.");
      return;
    }

    alert("Lead enviado com sucesso!");

    const container = document.querySelector(".container");

    container.innerHTML = `
  <div style="max-width: 960px; margin: 0 auto; padding: 24px; font-family: Arial, sans-serif; color: #222;">
    
    <section style="background: #f8f9fb; padding: 40px 24px; border-radius: 16px; margin-bottom: 24px;">
      <p style="color: #666; margin-bottom: 10px;">Atendimento em ${location}</p>
      <h1 style="font-size: 36px; margin-bottom: 16px;">${name}</h1>
      <p style="font-size: 18px; line-height: 1.5; margin-bottom: 24px;">
        Organize pendências fiscais entre escritório e cliente com mais clareza, prioridade e acompanhamento.
      </p>
      <a href="https://wa.me/55${whatsapp}" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #25D366; color: white; text-decoration: none; padding: 14px 22px; border-radius: 10px; font-weight: bold;">
        Falar no WhatsApp
      </a>
    </section>

    <section style="margin-bottom: 24px;">
      <h2 style="font-size: 26px; margin-bottom: 16px;">Como o ${name} ajuda</h2>
      <div style="display: grid; gap: 12px;">
        <div style="background: #ffffff; border: 1px solid #e5e7eb; padding: 18px; border-radius: 12px;">
          ✅ Mais clareza sobre pendências e prioridades
        </div>
        <div style="background: #ffffff; border: 1px solid #e5e7eb; padding: 18px; border-radius: 12px;">
          ✅ Comunicação mais organizada entre escritório e cliente
        </div>
        <div style="background: #ffffff; border: 1px solid #e5e7eb; padding: 18px; border-radius: 12px;">
          ✅ Atendimento direto pelo WhatsApp em ${location}
        </div>
      </div>
    </section>

    <section style="background: #f8f9fb; padding: 28px 24px; border-radius: 16px; margin-bottom: 24px;">
      <h2 style="font-size: 24px; margin-bottom: 12px;">Atendimento mais simples e objetivo</h2>
      <p style="font-size: 17px; line-height: 1.6; margin-bottom: 0;">
        Entre em contato para entender melhor suas pendências, organizar o próximo passo e continuar o atendimento com mais segurança.
      </p>
    </section>

    <section style="text-align: center; background: #111827; color: white; padding: 36px 24px; border-radius: 16px;">
      <h2 style="font-size: 28px; margin-bottom: 12px;">Fale agora com ${name}</h2>
      <p style="font-size: 17px; margin-bottom: 20px;">
        Clique no botão abaixo e continue seu atendimento pelo WhatsApp.
      </p>
      <a href="https://wa.me/55${whatsapp}" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #25D366; color: white; text-decoration: none; padding: 14px 22px; border-radius: 10px; font-weight: bold;">
        Chamar no WhatsApp
      </a>
      <br /><br />
      <button onclick="copyLandingHTML()" style="background: white; color: #111827; border: none; padding: 14px 22px; border-radius: 10px; font-weight: bold; cursor: pointer;">
        Copiar HTML
      </button>
    </section>
  </div>
`;
  } catch (error) {
    alert("Erro de conexão ao enviar lead.");
  }
}function copyLandingHTML() {
  const container = document.querySelector(".container");
  const clone = container.cloneNode(true);

  const copyButton = clone.querySelector('button[onclick="copyLandingHTML()"]');
  if (copyButton) {
    copyButton.remove();
  }

  const fullHTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Landing Page</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background: #ffffff; color: #222;">
  ${clone.innerHTML}
</body>
</html>`;

  navigator.clipboard.writeText(fullHTML)
    .then(() => {
      alert("HTML completo copiado com sucesso!");
    })
    .catch(() => {
      alert("Não foi possível copiar o HTML.");
    });
}
