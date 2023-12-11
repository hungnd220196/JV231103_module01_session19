const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btn10 = document.querySelector("#btn10");

const inputreview = document.querySelector("#input-review");

const send = document.querySelector("#send");
send.addEventListener("click", (e) => {
  e.preventDefault();

  const reviewLocal = JSON.parse(localStorage.getItem("feedback")) || [];
  reviewLocal.push(inputreview.value);

  localStorage.setItem("feedback", JSON.stringify(reviewLocal));

  inputreview.value = ""

  
});

const render = () => {
    const reviewLocal = JSON.parse(localStorage.getItem("feedback"))||[]
    const result = reviewLocal.map((review,index) =>{
        return `
        <div class = "item">${review}
        `
    })
}