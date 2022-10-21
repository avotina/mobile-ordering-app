import { menuArray } from "/data.js";

function renderItems() {
    let itemsHtml = ""
    menuArray.forEach(function(item) {
        itemsHtml += `
        <span class="emoji">${item.emoji}</span>
            <div class="item-info">
                <span class="title">${item.name}</span>
                <span class="ingredients">${item.ingredients}</span>
                <span class="price">$${item.price}</span>
            </div>
            <button class="order-btn">+</button>
        `
    })
    document.getElementsById("item-container").innerHTML = itemsHtml
}

renderItems()