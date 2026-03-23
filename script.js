// Tabs Functionality
(function () {
  "use strict";

  function tabComponent() {
    const tabButtons = document.querySelectorAll(".tabs__button");
    const tabPanels = document.querySelectorAll(".tabs__panel");

    function resetTabs() {
      tabButtons.forEach(function (button) {
        button.classList.remove("tabs__button--active");
        button.setAttribute("aria-selected", "false");
      });

      tabPanels.forEach(function (panel) {
        panel.classList.remove("tabs__panel--active");
        panel.hidden = true;
      });
    }

    function activateTab(button) {
      const panelId = button.getAttribute("aria-controls");
      const targetPanel = document.getElementById(panelId);

      button.classList.add("tabs__button--active");
      button.setAttribute("aria-selected", "true");

      targetPanel.classList.add("tabs__panel--active");
      targetPanel.hidden = false;
    }

    tabButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        resetTabs();
        activateTab(button);
      });
    });
  }

  window.addEventListener("DOMContentLoaded", tabComponent);
})();

// Accordion Functionality
(function () {
  "use strict";

  function accordionComponent() {
    const accordionTriggers = document.querySelectorAll(".accordion__trigger");

    accordionTriggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        const panelId = trigger.getAttribute("aria-controls");
        const targetPanel = document.getElementById(panelId);
        const isExpanded = trigger.getAttribute("aria-expanded") === "true";

        trigger.setAttribute("aria-expanded", String(!isExpanded));
        trigger.classList.toggle("accordion__trigger--open");
        targetPanel.hidden = isExpanded;
      });
    });
  }

  window.addEventListener("DOMContentLoaded", accordionComponent);
})();
