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
});
