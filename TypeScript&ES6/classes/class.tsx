
//class
class Car {
  constructor({ title }) {
   // this.title = title;
  }
  //no need to use ,

  //no need to write "function"
  drive() {
    return 'vroom';
  }
}

//inherit from Car
class Toyota extends Car{
  constructor(options){
    super(options); //Car.constructor()
   // this.color = options.color;
  }

  honk(){
    return 'beep';
  }
}

const toyota = new Toyota( { color: 'red', title: 'Daily driver'});
toyota.honk();

const car = new Car({ title: 'Toyota' });
car;
car.drive();
