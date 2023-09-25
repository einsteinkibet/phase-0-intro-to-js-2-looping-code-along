// Code your solutions in this file
function writeCards(names, event) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
}

// Function to count down from a given number from zero
function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}

const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";
const thankYouMessages = writeCards(names, event);
console.log(thankYouMessages);
countDown(5);