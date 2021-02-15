
//class: 首字母大写
class Vehicle {
  //no need to write "function"
  drive() {
    return 'vroom';
  }

  honk(): void {
    console.log('beep');
  }
}

//instance首字母小写
const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();