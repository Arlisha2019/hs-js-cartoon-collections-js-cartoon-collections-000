function dwarfRollCall(dwarves) {
  var list = '';
for (var i = 0; i < dwarves.length; i++) {
  list += (i + 1) + '. ' + dwarves[i] + ' ';
 }  
  return list;
}

function summonCaptainPlanet(planeteerCalls) {
  var list = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
   list.push(planeteerCalls[i].toUpperCase() + ' ! ') ;
}
 return list;
}

function longPlaneteerCalls(words) {
 let list = true;
if ( words.length > 4) {
  return list;
} else {
  return false;
 }
}
<<<<<<< HEAD

function findTheCheese (foods) {
  let cheese = ['cheddar', 'gouda', 'camembert'];
    for (var i = 0; i < foods.length; i++) {
      for (var j = 0; i < cheese.length; j++) {
       if(cheese[j] === foods[i]) {
          return foods[i];
        }
      }
    }
      return 'no cheese!';
=======
 
function findTheCheese (foods) {
  var cheese = ['chedder', 'gouda', 'camermbert'];
for (var i = 0; i < foods.length; i++) {
  if( foods.length === chesse.length) {
    return cheese[i];
  } else {
    return "no cheese!";
  }
 }
>>>>>>> 3054c1c3b8c25fd73deac657957f97a9812afff2
}
