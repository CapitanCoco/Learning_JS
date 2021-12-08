const WIDTH = 400;
const HEIGHT = 400;

let target = {
  x:getRandumNumber(WIDTH),
  y:getRandumNumber(HEIGHT)
};

let $map = document.getElementById ('map');

$map.addEventListener ('click' , function () {
console.log('click');
})
