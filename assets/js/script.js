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


// const formation = document.querySelector(".myself")
// const txt = " Bonjour, moi c'est Romain. Actuellement étudiant à La Manu, je suis quelqu'un d'appliqué et de sérieux. <br> J'aime dessiner, jouer aux jeux vidéos etcoder. Je porte un intérêt plus particulier au web-design."

// function typewriter(word, index){
//   if(index < word.length) {
//     setTimeout(() => {
//       formation.innerHTML += `<span>${word[index]}</span>`
//       typewriter(txt, index + 1)
//     }, 300);
//   }
// }

// setTimeout(() => {
//   typewriter(txt, 0)
// }, 500)