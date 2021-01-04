const confirmBox = confirm('Start swiping right?');
const buttons = document.querySelectorAll(".focus-button-style");
const likeButton = buttons[buttons.length - 2];
const dislikeButton = buttons[buttons.length - 4];

let counter = 0;

function like() {
    if (likeButton.disabled) {
        alert(`Congrats! You swiped out!\n \
               You swiped ${counter} girls.`);
        console.log(`The number of swipe ${couter}`);
    } else {
        let random = Math.random();
        if (random < 0.98) {
            counter += 1;
            likeButton.click();
        } else {
            dislikeButton.click();
        }
        let interval = 1500 + Math.random() * 1000;
        setTimeout(like, interval);
    }
}

if (confirmBox) {
    like();
}