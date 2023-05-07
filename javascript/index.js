function toggleInputDisable() {
  const rangeInputs = document.querySelectorAll('input[type="range"]');

  for (const rangeInput of rangeInputs) {
    if (window.innerWidth <= 711) {
      rangeInput.setAttribute('disabled', true);
    } else {
      rangeInput.removeAttribute('disabled');
    }  
  }
}

onUiUpdate(toggleInputDisable);
onUiLoaded(toggleInputDisable);
onUiTabChange(toggleInputDisable);
onOptionsChanged(toggleInputDisable);
window.addEventListener('resize', toggleInputDisable);
