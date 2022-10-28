import { menuArray } from "/data.js";

const incBtn = document.getElementsByClassName("increaseBtn")
const finalOrder = []

function renderPosts() {
    let postsHtml = ""
    menuArray.forEach(function(post) {
        postsHtml += `
        <div class="fx">
            <p>${post.emoji}</p>
            <p>${post.name}</p>
            <p>${post.ingredients}</p>
            <p>$${post.price}</p>
            <button class="increaseBtn">+</button>
        </div>
        `    
          
    })
    document.getElementById("container").innerHTML = postsHtml
}
    
renderPosts()

incBtn.forEach(function(btn) {
    btn.addEventListener("click", function() {
        console.log("clicked")
    })
})


function addToOrder() {
  
}

// addToOrder()

