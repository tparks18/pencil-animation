const labels = document.querySelectorAll(".barchart-labels li");
const bars = document.querySelectorAll(".barchart .item");

const updateChart = (newActiveItem) => {
  for (const label of labels) {
    if (label.dataset.item !== newActiveItem) {
      label.classList.remove("active");
    } else {
      label.classList.add("active");
    }
  }

  for (const bar of bars) {
    if (bar.dataset.item !== newActiveItem) {
      bar.classList.remove("active");
    } else {
      bar.classList.add("active");
    }
  }
};

for (const label of labels) {
  label.addEventListener("mouseover", () => updateChart(label.dataset.item));
}

for (const bar of bars) {
  bar.addEventListener("mouseover", () => updateChart(bar.dataset.item));
}
