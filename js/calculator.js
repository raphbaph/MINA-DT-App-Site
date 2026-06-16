const phases = {
  test: { treasuryK: 1000, modifier: 0.05 },
  scale: { treasuryK: 20000, modifier: 0.28 },
  final: { treasuryK: 34000, modifier: 0.45 }
};

const circulatingK = 1288500;
const ask = document.querySelector("#ask");
const phase = document.querySelector("#phase");
const askLabel = document.querySelector("#askLabel");
const participationOut = document.querySelector("#participationOut");
const approvalOut = document.querySelector("#approvalOut");
const participationMina = document.querySelector("#participationMina");
const approvalMina = document.querySelector("#approvalMina");
const askOut = document.querySelector("#askOut");

function curve(x, c) {
  return x / (x + c * (1 - x));
}

function formatK(value) {
  return Math.round(value).toLocaleString("en-US") + "k MINA";
}

function updateCalculator() {
  const selected = phases[phase.value];
  const askPercent = Number(ask.value);
  const x = Math.min(askPercent / 100, 1);
  const participationBp = 2000 + (5000 - 2000) * curve(x, 0.05);
  const approvalBp = 5100 + (7000 - 5100) * curve(x, 0.10);
  const participationSupplyPct = selected.modifier * participationBp / 100;
  const approvalRatioPct = approvalBp / 100;
  const participationK = circulatingK * participationSupplyPct / 100;
  const approvalK = participationK * approvalRatioPct / 100;
  const askK = selected.treasuryK * askPercent / 100;

  askLabel.textContent = askPercent + "%";
  participationOut.textContent = participationSupplyPct.toFixed(2) + "%";
  approvalOut.textContent = approvalRatioPct.toFixed(2) + "%";
  participationMina.textContent = formatK(participationK) + " voting weight";
  approvalMina.textContent = formatK(approvalK) + " minimum yay at participation floor";
  askOut.textContent = "Estimated ask: " + formatK(askK) + " from the selected treasury.";
}

ask.addEventListener("input", updateCalculator);
phase.addEventListener("change", updateCalculator);
updateCalculator();
