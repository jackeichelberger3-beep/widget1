// Welcome Widget — Accordion behavior (vanilla JS)
(function () {
  "use strict";

  document.querySelectorAll("[data-accordion]").forEach(function (group) {
    var triggers = group.querySelectorAll(".ww-acc-trigger");

    triggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        var panel = trigger.nextElementSibling;
        var isOpen = trigger.classList.contains("is-open");

        // Close all siblings within this group
        triggers.forEach(function (other) {
          if (other !== trigger) {
            other.classList.remove("is-open");
            other.nextElementSibling.style.maxHeight = null;
          }
        });

        if (isOpen) {
          trigger.classList.remove("is-open");
          panel.style.maxHeight = null;
        } else {
          trigger.classList.add("is-open");
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });
  });
})();
