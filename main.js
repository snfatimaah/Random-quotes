const quoteSource = [
    {
        quote: "Think of all the beauty still left around you and be happy.",
        author:"Anne Frank"
    },
    {
        quote: "Turn your wounds into wisdom.",
        author:"Oprah Winfrey"
    },
    {
        quote:"Start with the end in mind.",
        author:"Stephen R. Covey"
    },
    {
        quote:"You are today where your thoughts have brought you; you will be tomorrow where your thoughts take you.",
        author:"James Allen"
    }
];

function getRandomQuote(){
    console.log("sxjjsjq")
    const randomNumber = getRandomNumber();
    const quoteObject = quoteSource[randomNumber];
    elementSetter('saying', quoteObject.quote);
    elementSetter('author', quoteObject.author);
}

function elementSetter(elementId, innerHTMLValue){
    document.getElementById(elementId).innerHTML = innerHTMLValue;
}

function getRandomNumber(){
    const sourceLength = quoteSource.length;
    return Math.floor(Math.random()*sourceLength);     
}   