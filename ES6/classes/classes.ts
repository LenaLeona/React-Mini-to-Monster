
//class: 首字母大写
// class Vehicle {
//   color: string;

//   constructor(color: string) {
//     this.color = color;
//   }
// 可简化成以下：
class Vehicle {
    constructor(public color: string) {
      this.color = color;
    }

  //no need to write "function"
  drive() {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

//inherit
class Car extends Vehicle {
  //override: modifier (public/private/protect) must be the same as the func in parent
  constructor(public wheels: number, color: string){ //color前不要再写modifier，因为继承父类的field
    super(color);
  }

  drive(){
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
  }
  
}
//instance首字母小写
// const car = new Car();
// car.drive(); //vroom
// car.honk();