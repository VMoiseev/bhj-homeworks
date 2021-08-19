const hasTooltip = document.querySelectorAll(".has-tooltip");

for (let index of hasTooltip) {
  index.addEventListener("click", (e) => {
    e.preventDefault();

    tooltip_active = document.querySelector(".tooltip");

    if (tooltip_active != null) {
      tooltip_active.remove();
    }

    const title = e.target.getAttribute("title");
    const tooltip = document.createElement("div");
    const tooltipPosition = e.target.getBoundingClientRect();
    tooltip.style.left = `${tooltipPosition.left}px`;
    tooltip.style.top = `${tooltipPosition.bottom}px`;
    tooltip.classList.add("tooltip");
    tooltip.textContent = title;
    tooltip.style.display = "block";
    document.addEventListener("scroll", () => {tooltip.style.display = "none"});
    index.appendChild(tooltip);
  });
}