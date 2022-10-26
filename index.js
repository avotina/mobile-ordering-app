import { menuArray } from "/data.js";

function render() {
    let itemHtml = ""
    menuArray.forEach(function(item) {
        itemHtml += `
        <p>${item.name}</p>
        `
    })

    document.getElementById("items-info").innerHTML = itemHtml
}

render()