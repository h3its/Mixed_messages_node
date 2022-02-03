
let quotes = [
    "I have never listened to anyone who criticized my taste in space travel, sideshows or gorillas. When this occurs, I pack up my dinosaurs and leave the room. - Bradbury",
    "Time is an illusion. Lunchtime doubly so. - Douglas Adams", "A fire-eater must eat dire, even if he has to kindle it himself. - Asimov 'Foundation'",
    "It is good to have an end to journey towars; but it is the journey that matters, in the end. -Guin 'Left hand of Darkness'",
    "Stuff your eyes with wonder, he said, live as if you’d drop dead in 10 seconds. See the world. It’s more fantastic than any dream made or paid for in factories. - Bradbury"
];

function pickQuote(){
    let i = Math.floor(Math.random() * (quotes.length));
    console.log(quotes[i]);
}

pickQuote();