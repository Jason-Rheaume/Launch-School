let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function find(destination, list) {
for (let i = 0; i < list.length; i++) {
    if (list[i] === destination) {
      return true;  
    }}
    return false;
}

console.log(find('London', destinations));