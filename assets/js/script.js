// cards animation
VanillaTilt.init(document.querySelectorAll(".card1"), {
    max: 25,
    speed: 250,
  });
  VanillaTilt.init(document.querySelectorAll(".card2"), {
    max: 25,
    speed: 250,
  });
  VanillaTilt.init(document.querySelectorAll(".card3"), {
    max: 25,
    speed: 250,
  });
  VanillaTilt.init(document.querySelectorAll(".card4"), {
    max: 25,
    speed: 250,
  });
  VanillaTilt.init(document.querySelectorAll(".card5"), {
    max: 25,
    speed: 250,
  });


// title animation
const h1 = document.querySelector("h1")
const title = "Romain Wybo"
let i = 0;
const interval = setInterval (()=> {
  h1.innerHTML += title[i]
  i++
  if(i >= title.length) {
    clearInterval(interval)
  }
}, 150)