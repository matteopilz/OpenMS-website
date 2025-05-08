let selectedTags = {};
let allItems = [];

console.log("applications.js loaded");
fetch('/data/tools.json')
    .then(response => response.json())
    .then(data => {
        allItems = data;
        renderItems();
    });
// fetch('/data/tools.json')
//     .then(response => response.text())
//     .then(text => {
//         console.log("Raw JSON text:", text);
//     })

function renderItems() {
    const container = document.getElementById("item-list");
    container.innerHTML = "";

    allItems.forEach(app => {
        const item = document.createElement("div");
        item.className = "item";
        item.setAttribute("data-category", app.category);
        item.setAttribute("data-tags", app.tags.join(","));

        const tagsHTML = app.tags.map(tag => `<span class="entry-tag">${tag}</span>`).join("");

        item.innerHTML = `
      <div class="item-content">
        <strong>${app.name}</strong> (v${app.version}) - by ${app.author}
        <div class="entry-tags">${tagsHTML}</div>
      </div>
      <span class="item-category ${app.category}">${app.category}</span>
      `;

        container.appendChild(item);
    });

    filterItems();
}

window.toggleTag = function(element, tag) {
    function toggleTag(element, tag) {
        if (!selectedTags[tag]) {
            selectedTags[tag] = "positive";
            element.classList.add("positive");
            element.classList.remove("negative");
            element.textContent = "- " + tag;
        } else if (selectedTags[tag] === "positive") {
            selectedTags[tag] = "negative";
            element.classList.remove("positive");
            element.classList.add("negative");
            element.textContent = "× " + tag;
        } else {
            delete selectedTags[tag];
            element.classList.remove("positive", "negative");
            element.textContent = "+ " + tag;
        }
        filterItems();
    }
}

window.setCategory = function(category) {
    function setCategory(category) {
        document.querySelectorAll(".category-select button").forEach(btn => btn.style.background = "#3498db");
        event.target.style.background = "#2980b9";
        document.getElementById("item-list").setAttribute("data-category", category);
        filterItems();
    }
}

window.filterItems = function() {
    function filterItems() {
        let searchQuery = document.getElementById("search").value.toLowerCase();
        let categoryFilter = document.getElementById("item-list").getAttribute("data-category") || "all";

        document.querySelectorAll(".item").forEach(item => {
            let itemText = item.textContent.toLowerCase();
            let itemCategory = item.getAttribute("data-category");
            let itemTags = item.getAttribute("data-tags").split(",");

            let matchesSearch = itemText.includes(searchQuery);
            let matchesCategory = (categoryFilter === "all" || itemCategory === categoryFilter);
            let matchesTags = Object.entries(selectedTags).every(([tag, status]) =>
                (status === "positive" && itemTags.includes(tag)) ||
                (status !== "negative" || !itemTags.includes(tag))
            );

            item.style.display = (matchesSearch && matchesCategory && matchesTags) ? "block" : "none";
        });
    }
}
