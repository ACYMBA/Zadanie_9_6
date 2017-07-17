function checkOnclickEvent(param) {
  console.log(param);
}
var addElem = document.getElementById('addElem');
var list = document.getElementById('list');

addElem.addEventListener('click', function(e) {
  var element = document.createElement('li');
  var itemsByTagName = document.getElementsByTagName('li');
  var i = itemsByTagName.length;
  if ( i <= 1 ){
    var wynik = i; 
    element.innerHTML = ('item '+ wynik);
    list.appendChild(element); 
  } else {
  var wynik = (i)
  console.log( wynik );
  element.innerHTML = ('item '+ wynik);
  list.appendChild(element); 
  }
});

/*
var a = prompt ('Podaj wartość a');
var h = prompt ('Podaj wartość h');
var zadanie = (a*h/2);


function getTriangleArea(a, h) {

if ( (a <= 0) || (h <= 0)) {
    console.log('dane nieprawidłowe');
} else {
  return (a*h/2);
}
}
var triangle1Area = getTriangleArea (a, h);
  console.log(triangle1Area);
*/




// nowe komantarze są w modzie
 /* var name = prompt('Enter your name');
  alert('Hello, ' + name);
 console.log('Hello, ' + name);
*/
/*
var a = prompt ('Podaj wartość a');
var  h = prompt ('Podaj wartość h');
var triangleArea = a*h/2;
console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
alert('Hello, ' + triangleArea);
*/

/*
var a = prompt ('Podaj wartość a');
var  b = prompt ('Podaj wartość b');
var wynik = (a * a) + (2 * a * b) - (b * b);
console.log(wynik);
var value = wynik;

if ( value > 0) {
    console.log('wynik dodatni');
} else if (value < 0 ) {
    console.log('wynik ujemny');
}
if ( value == 0) {
   console.log('jest rowny 0');
}
*/


/*
var a = prompt ('Podaj wartość a');
var h = prompt ('Podaj wartość h');
var zadanie = (a*h/2);

    function getTriangleArea (a, h) {

	if ( (a <= 0) || (h <= 0) ) {
	console.log('dane nieprawidłowe');
} else {
   return zadanie;
}

var winner = checkResult (userChecked, computerChecked);



var a = prompt ('Podaj wartość a');
var h = prompt ('Podaj wartość h');

if ( (a <= 0) || (h <= 0)) {
    console.log('dane nieprawidłowe');
} 
*/