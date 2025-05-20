let allItems = [];
let activeFilters = [];

fetch('/data/tools.json')
    .then(res => res.json())
    .then(data => {
        allItems = data;
        renderTable();
    });

function renderTable() {
    const tbody = document.querySelector('#tool-table tbody');
    tbody.innerHTML = '';

    const filteredItems = applyFilters();

    filteredItems.forEach(app => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        const link = document.createElement('a');
        link.href = app.url;
        link.target = '_blank';
        link.textContent = app.name;
        nameCell.appendChild(link);

        const categoryCell = document.createElement('td');
        categoryCell.textContent = app.category;

        const tagsCell = document.createElement('td');
        tagsCell.textContent = app.tags;

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = app.description;

        const versionCell = document.createElement('td');
        versionCell.textContent = app.version;

        row.append(nameCell, categoryCell, tagsCell, descriptionCell, versionCell);
        tbody.appendChild(row);
    });
}

function applyFilters() {
    return allItems.filter(app => {
        return activeFilters.every(filter => {
            const value = (app[filter.field] || '').toString().toLowerCase();
            const expression = filter.expression.toLowerCase();

            if (filter.condition === 'contains') {
                return value.includes(expression);
            } else if (filter.condition === 'not_contains') {
                return !value.includes(expression);
            }
            return true;
        });
    });
}

function addFilter() {
    const id = Date.now();

    const wrapper = document.createElement('div');
    wrapper.className = 'filter';
    wrapper.dataset.id = id;

    wrapper.innerHTML = `
        <select class="field">
            <option value="name">Name</option>
            <option value="category">Category</option>
            <option value="tags">Tags</option>
            <option value="description">Description</option>
            <option value="version">Version</option>
        </select>
        <select class="condition">
            <option value="contains">contains</option>
            <option value="not_contains">does not contain</option>
        </select>
        <input type="text" class="expression" placeholder="Enter text" />
        <button onclick="removeFilter(${id})">Remove</button>
    `;

    wrapper.querySelectorAll('select, input').forEach(el =>
        el.addEventListener('input', updateFilters)
    );

    document.getElementById('filters-container').appendChild(wrapper);
}

function removeFilter(id) {
    document.querySelector(`.filter[data-id="${id}"]`).remove();
    updateFilters();
}

function resetFilters() {
    activeFilters = [];
    document.getElementById('filters-container').innerHTML = '';
    renderTable();
}

function updateFilters() {
    const filterElements = document.querySelectorAll('#filters-container .filter');

    activeFilters = Array.from(filterElements).map(el => {
        return {
            field: el.querySelector('.field').value,
            condition: el.querySelector('.condition').value,
            expression: el.querySelector('.expression').value.trim()
        };
    }).filter(f => f.expression.length > 0);

    renderTable();
}
