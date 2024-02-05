let btn = document.getElementById("btn"); //selecting button
let body = document.getElementById("main");
let code = document.getElementById("color-code");

btn.addEventListener("click", () => {
    const randomnumber = Math.floor(Math.random() * 16777215); //generating random code without point
    const randomcode = "#" + randomnumber.toString(16);  //generating hexa decimal code with random number
    console.log(randomcode); //for printing hexa code
    body.style.backgroundColor = randomcode; //changing color
    code.innerText = randomcode //write code in the body
    navigator.clipboard.writeText(randomcode) // copy code while generating it
})


