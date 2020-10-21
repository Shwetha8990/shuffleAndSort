"use strict";

const styleMap = {
    1: 'tile-light-blue',
    2: 'tile-blue',
    3: 'tile-dark-gray',
    4: 'tile-blue',
    5: 'tile-dark-gray',
    6: 'tile-gray',
    7: 'tile-gray',
    8: 'tile-light-blue',
    9: 'tile-dark-gray'
}

let gridItems = Array(9).fill().map((_, i) => i + 1);
let gridContainer;

function init() {
    gridContainer = getGridContainer();
    if (gridContainer) {
        renderGrid(gridContainer, gridItems);
    }
}

function renderGrid(parentElement, gridItems) {
    parentElement.innerHTML = '';
    let gridContent = ''
    gridItems.forEach(number => gridContent += `<div class="grid-item ${styleMap[number]}">${number}</div>`);
    parentElement.innerHTML = gridContent;
}

function shuffle() {
    for (let i = gridItems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        [gridItems[i], gridItems[j]] = [gridItems[j], gridItems[i]];
    }
    renderGrid(getGridContainer(), gridItems);
}

function sort() {
    gridItems = gridItems.sort();
    renderGrid(getGridContainer(), gridItems);
}

function getGridContainer() {
    if (gridContainer) {
        return gridContainer;
    }
    gridContainer = document.querySelector('.number-grid-container');
    return gridContainer;
}