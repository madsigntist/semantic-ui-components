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

    tabButtons.forEach(function (button, index) {
      button.addEventListener("keydown", function (event) {
        handleTabKeyNavigation(event, index);
      });
    });

    function handleTabKeyNavigation(event, currentIndex) {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
        return;
      }

      event.preventDefault();

      let newIndex;

      if (event.key === "ArrowRight") {
        newIndex = (currentIndex + 1) % tabButtons.length;
      } else if (event.key === "ArrowLeft") {
        newIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length;
      }

      const nextButton = tabButtons[newIndex];

      nextButton.focus();

      resetTabs();
      activateTab(nextButton);
    }
  }

  window.addEventListener("DOMContentLoaded", tabComponent);
})();

// Accordion Functionality
(function () {
  "use strict";

  function accordionComponent() {
    const accordionTriggers = document.querySelectorAll(".accordion__trigger");

    function closeAccordionItem(trigger) {
      const panelId = trigger.getAttribute("aria-controls");
      const targetPanel = document.getElementById(panelId);

      trigger.setAttribute("aria-expanded", "false");
      trigger.classList.remove("accordion__trigger--open");

      targetPanel.style.height = `${targetPanel.scrollHeight}px`;

      requestAnimationFrame(function () {
        targetPanel.classList.remove("accordion__panel--open");
        targetPanel.style.height = "0px";
      });

      targetPanel.addEventListener(
        "transitionend",
        function handleCloseTransition(event) {
          if (event.propertyName !== "height") {
            return;
          }

          targetPanel.hidden = true;
          targetPanel.removeEventListener(
            "transitionend",
            handleCloseTransition,
          );
        },
      );
    }

    function openAccordionItem(trigger) {
      const panelId = trigger.getAttribute("aria-controls");
      const targetPanel = document.getElementById(panelId);

      trigger.setAttribute("aria-expanded", "true");
      trigger.classList.add("accordion__trigger--open");

      targetPanel.hidden = false;
      targetPanel.classList.add("accordion__panel--open");

      const panelHeight = targetPanel.scrollHeight;

      targetPanel.style.height = `${panelHeight}px`;

      targetPanel.addEventListener(
        "transitionend",
        function handleOpenTransition(event) {
          if (event.propertyName !== "height") {
            return;
          }

          targetPanel.style.height = "auto";
          targetPanel.removeEventListener(
            "transitionend",
            handleOpenTransition,
          );
        },
      );
    }

    function closeAllAccordionItems() {
      accordionTriggers.forEach(function (trigger) {
        const isExpanded = trigger.getAttribute("aria-expanded") === "true";

        if (isExpanded) {
          closeAccordionItem(trigger);
        }
      });
    }

    accordionTriggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        const isExpanded = trigger.getAttribute("aria-expanded") === "true";

        closeAllAccordionItems();

        if (!isExpanded) {
          openAccordionItem(trigger);
        }
      });
    });
  }

  window.addEventListener("DOMContentLoaded", accordionComponent);
})();
