const confirmBox = confirm('Start swiping right?');
const buttons = document.querySelectorAll(".focus-button-style");
const N = buttons.length;
const adjust = 0
const likeButton = buttons[N - 3 - adjust];
const dislikeButton = buttons[N - 5 - adjust];

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
