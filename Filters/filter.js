let cars = [
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  }
]
let car1 = {
  "color": "blue",
  "type": "truck",
  "registration":  new Date('2017-01-03'),
  "capacity": 3
}
cars.unshift(car1)
let car2 = {
  "color": "green",
  "type": "cabrio",
  "registration":  new Date('2017-01-03'),
  "capacity": 5
}
cars.unshift(car2)
let car3 = {
  "color": "red",
  "type": "cabrio",
  "registration":  new Date('2017-01-03'),
  "capacity": 12
}
cars.unshift(car3)
let car4 = {
  "color": "wight",
  "type": "suv",
  "registration": new Date('2018-03-03'),
  "capacity": 2
}
cars.unshift(car4)

let car5 = {
  "color": "red",
  "type": "cabrio",
  "registration": new Date('2018-03-03'),
  "capacity": 3
}
cars.unshift(car5)

let car6 = {
  "color": "wight",
  "type": "suv",
  "registration": new Date('2018-03-03'),
  "capacity": 67
}
cars.unshift(car6)

let car7 = {
  "color": "green",
  "type": "cabrio",
  "registration": new Date('2018-03-03'),
  "capacity": 93
}
cars.unshift(car7)

let car8 = {
  "color": "green",
  "type": "truck",
  "registration": new Date('2018-03-03'),
  "capacity": 5
}
cars.unshift(car8)

console.log(cars);


let Fcolor = cars.filter(cars => cars.color === "red");

console.log(Fcolor);


let carsType = cars.map(car => {
  let types = {
    "type": car.type
  };
  if (car.type != " "){
    types['type'];
  }
  return types;
 });
 console.log(carsType);

let carsColors = cars.map( car =>{
    let colors = {
        "color": car.color
    };
    if (car.color != "red"){
        colors['color'] = "red";
    };
    if (car.color != "green"){
      colors['color'] = "green";
  }
  return colors;
});
console.log(carsColors);


