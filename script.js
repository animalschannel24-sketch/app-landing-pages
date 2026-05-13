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
  whatsappInput.value = whatsappInput.value.replace(/\D/g, "");
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
function generateLandingPage() {
  const name = document.getElementById("business-name").value;
  const service = document.getElementById("business-service").value;
  const location = document.getElementById("business-location").value;
  const whatsapp = document.getElementById("business-whatsapp").value;

  const container = document.querySelector(".container");

  container.innerHTML = `
    <div class="card" style="padding: 32px;">
      <p style="color: #666; margin-bottom: 10px;">Atendimento em ${location}</p>
      <h1 style="font-size: 32px; margin-bottom: 12px;">${name}</h1>
      <p style="font-size: 18px; margin-bottom: 20px;">
        ${service} com atendimento profissional, rápido e fácil de agendar.
      </p>

      <div style="background: #f5f5f5; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
        <h3 style="margin-bottom: 10px;">Por que escolher ${name}?</h3>
        <p style="margin-bottom: 8px;">✅ Atendimento humanizado</p>
        <p style="margin-bottom: 8px;">✅ Resposta rápida no WhatsApp</p>
        <p style="margin-bottom: 0;">✅ Fácil localização em ${location}</p>
      </div>

      <a class="btn" href="https://wa.me/55${whatsapp}" target="_blank" style="display: inline-block; text-align: center;">
        Falar no WhatsApp
      </a>
    </div>
  `;
}
