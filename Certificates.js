let certificates = [{
  img: 'https://i.ibb.co/FHhsSv8/freecode-responsive-developer.png',
  name: 'Responsive Web',
  description: 'Freecodecamp Responsive Developer',
},
{
  img:'https://i.ibb.co/0JYv5St/diploma-computacion-basica.jpg',
  name:'Basic Computing',
  description: 'Platzi Basic Computing',
},
{
  img:'https://i.ibb.co/hYQPt0r/diploma-ingenieria.jpg',
  name:'Software Engineering',
  description: 'Platzi Software Engineering',
},
{
  img:'https://i.ibb.co/t3xPnPX/diploma-introweb.jpg',
  name:'Web History',
  description: 'Platzi Web History',
},
{
  img:'https://i.ibb.co/D9jGtPR/diploma-pensamiento-logico.jpg',
  name:'Logical Thinking',
  description: 'Platzi Logical Thinking',
},
{
  img:'https://i.ibb.co/vJwFsbc/diploma-pensamiento-logico-estructuras.jpg',
  name:'Logical Thinking II',
  description: 'Platzi Logical Thinking 2',
},
{
  img:'https://i.ibb.co/YZ1c7XS/diploma-historia-programacion.jpg',
  name:'Programming Paradigms',
  description: 'Platzi Programming Paradigms',
},
{
  img:'https://i.ibb.co/ckzwy5Y/diploma-pensamiento-logico-lenguajes.jpg',
  name:'Programming Languages',
  description: 'Platzi Programming Languages',
},
{
  img:'https://i.ibb.co/t3ddMcY/diploma-programacion-basica.jpg',
  name:'Basic Programming',
  description: 'Platzi Basic Programming',
},
{
  img:'https://i.ibb.co/tzQQ0MM/diploma-git-github.jpg',
  name:'Git',
  description: 'Platzi Professional Git',
},
{
  img:'https://i.ibb.co/cYpyLWv/diploma-basico-javascript.jpg',
  name:'Basic JS',
  description: 'Platzi Basic JS',
},
{
  img:'https://i.ibb.co/DY9QLhr/diploma-backend-introduccion.jpg',
  name:'Backend',
  description: 'Platzi Backend',
},
{
  img:'https://i.ibb.co/B3tTZP7/diploma-react.jpg',
  name:'React',
  description: 'Platzi React',
},
{
  img:'https://i.ibb.co/MsXwBwB/diploma-python-cs.jpg',
  name:'Phyton',
  description: 'Platzi Phyton',
},
{
  img:'https://i.ibb.co/7x3RsZ7/diploma-web-fundamentos.jpg',
  name:'Web Fundamentals School',
  description: 'Platzi Web Fundamentals School',
},
{
  img:'https://i.ibb.co/dmkyB6V/diploma-tecnologia-gerentes.jpg',
  name:'Technology for Managers',
  description: 'Platzi Technology for Managers',
},
{
  img:'https://i.ibb.co/r29rDFK/diploma-php.jpg',
  name:'PHP Basics',
  description: 'Platzi PHP Basics',
},
{
  img:'https://i.ibb.co/0JGZKxz/diploma-php-arreglos-funciones.jpg',
  name:'PHP Functionality',
  description: 'Platzi PHP Functionality',
},
{
  img:'https://i.ibb.co/S6PLXw0/diploma-php-practico.jpg',
  name:'Practical PHP',
  description: 'Platzi Practical PHP',
},
{
  img:'https://i.ibb.co/VMtcrNJ/diploma-php-html.jpg',
  name:'PHP in HTML',
  description: 'Platzi PHP in HTML',
},
{
  img:'https://i.ibb.co/Ny50tQR/diploma-vuejs.jpg',
  name:'Introduction and Fundamentals of Vue.js',
  description: 'Platzi Introduction and fundamentals of vue',
},
{
  img:'https://i.ibb.co/L8SqvCz/diploma-vuejs-componentes-composition.jpg',
  name:'Components and Composition API Vue.js',
  description: 'Platzi Components and Composition API Vue.js',
},
{
  img:'https://i.ibb.co/KhxywKF/diploma-vue-practico.jpg',
  name:'Vue.js Practical Course',
  description: 'Platzi Vue.js Practical Course',
},
{
  img:'https://i.ibb.co/PhMFWvf/diploma-javascript-practico.jpg',
  name:'Javascript Practical Course',
  description: 'Platzi Javascript Practical Course',
},
{
  img:'https://i.ibb.co/9gn1MLS/freecode-js.png',
  name:'JavaScript Algorithms and Data Structures',
  description: 'FreeCodeCamp JavaScript Algorithms and Data Structures',
},
{
  img:'https://i.ibb.co/F4Ww87k/diploma-javascript-closures-scope.jpg',
  name:'JavaScript Closures and Scope',
  description: 'Platzi JavaScript Closures and Scope',
},
{
  img:'https://i.ibb.co/Vmkk9XK/diploma-asincronismo-js.jpg',
  name:'JavaScript Asynchronism',
  description: 'Platzi JavaScript Asynchronism',
},
];
const certificatesContainer = document.querySelector(".certificates-container");
const addCertificates = (() => {
  certificates.forEach((certificate) => {
    certificatesContainer.innerHTML += ` 
<div>
  <img class="grid-projects-certificates__image"
  src="${certificate.img}" alt="${certificate.description}" />
  <p class="grid-projects-certificates__title">
    ${certificate.name}
  </p>
</div>
`;
  });
})();


