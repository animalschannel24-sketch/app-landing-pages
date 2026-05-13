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
    <div class="card">
      <h1>${name}</h1>
      <p>${service} em ${location}</p>
      <p>Atendimento rápido, profissional e com foco no seu resultado.</p>
      <a class="btn" href="https://wa.me/55${whatsapp}" target="_blank">Falar no WhatsApp</a>
    </div>
  `;
}
