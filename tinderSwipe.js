let buttons = document.querySelectorAll(".focus-button-style");
let likeButton = buttons[buttons.length - 2];

function like() {
    likeButton.click();
    let interval = 1500 + Math.random() * 1000;
    setTimeout(like, interval);
}

like();