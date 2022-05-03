function car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}

var cars = [];

for(var i=0; i < 20; i++){
    cars[i] = new car(`Brand${i}`, `Model${i}`, `20${(i < 9)? "0"+i : i}`)
}

console.log(cars);