const works = [
  {
    url:'https://codepen.io/carlos-alfredo-falconi/pen/vYRzmwe',
    img: 'https://abrahamsoncenter.com/es/wp-content/uploads/2019/09/informacion-nutricional-etiqueta.jpg',
    name:'Nutrition Label',
    description:'The nutrition table',
  },
  {
    url:'https://codepen.io/carlos-alfredo-falconi/pen/bGvxWPm',
    img:'https://static5.depositphotos.com/1001599/516/v/600/depositphotos_5162593-stock-illustration-piano-keyboard.jpg',
    name:'Piano',
    description:'Piano CSS Image',
  },
  {
    url:'https://codepen.io/carlos-alfredo-falconi/pen/poLOPMm',
    img:'https://conceptodefinicion.de/wp-content/uploads/2017/10/Javascript2.jpg',
    name:'JavaScript Information',
    description:'JavaScript Information',
  },
  {
    url:'https://codepen.io/carlos-alfredo-falconi/pen/VwXGWwz',
    img:'https://static.vecteezy.com/system/resources/previews/005/148/777/non_2x/humpback-whale-design-with-golden-lineart-over-black-background-free-vector.jpg',
    name:'Callenas Liquor',
    description:'Callenas Liquor',
  },
  {
    url:'./moods/public/index.html',
    img:'./moods/public/assets/inside-out.jpg',
    name:'Moods Game !!!',
    description:'Moods Game',
  },
  {
    url:'https://to-do-app-falco.netlify.app/',
    img:'./moods/public/assets/to-do-machine.png',
    name:'To Do Machine (Task Organizer)!!!',
    description:'Task Organizer',
  },
  {
    url:'https://cashflowcfalco.netlify.app/',
    img:'./moods/public/assets/cashFlow.png',
    name:'Cashflow !!!',
    description:'Cashflow app',
  },
  {
    url:'https://stop-watch-cf.netlify.app/',
    img:'./moods/public/assets/StopWatch.png',
    name:'Stopwatch !!!',
    description:'Stopwatch app',
  },
  {
    url:'./taller-javascript-math/index.html',
    img:'./moods/public/assets/js.jpg',
    name:'Mathematics with JS !!',
    description:'Mathematics with JS',
  },
];
const worksContainer = document.querySelector(".works-container");
const addWorks = (() => {
  works.forEach((work) => {
    worksContainer.innerHTML += ` 
    <div><a href="${work.url}" target = "_blank"><img
        class="grid-projects-work__image"
        src="${work.img}"
        alt="${work.description}" />
          <p class="grid-projects-work__title">${work.name}
          </p>
        </a>
    </div>
`;
  });
})();
