/* Live search for the Writing and Presentations pages.
   Works on the already-built HTML — no rendering logic here. */

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("input[data-filter-for]").forEach(function (input) {
    var list = document.getElementById(input.dataset.filterFor);
    if (!list) return;

    var items = Array.prototype.slice.call(list.querySelectorAll(".item"));
    var countEl = document.querySelector(".count");

    function update() {
      var q = input.value.toLowerCase();
      var shown = 0;
      items.forEach(function (el) {
        // data-search is stamped onto each card at build time (below)
        var hay = (el.getAttribute("data-search") || el.textContent).toLowerCase();
        var hit = !q || hay.indexOf(q) !== -1;
        el.style.display = hit ? "" : "none";
        if (hit) shown++;
      });
      var count = list.parentElement.querySelector(".count");
      if (count) count.textContent = shown + " of " + items.length;
    }

    // Stamp searchable text once, so filtering never re-reads the DOM text
    items.forEach(function (el) {
      el.setAttribute("data-search", el.textContent);
    });
    update();
    input.addEventListener("input", update);
  });
});
