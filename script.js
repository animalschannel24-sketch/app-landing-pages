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
  if (currentStep < 3) {
    currentStep++;
    showStep(currentStep);
  }
}

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
