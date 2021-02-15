//we create a type when creating an interface
//interface 首字母大写
interface Belongs {
  summary(): string; //can have functions inside the interface definition
}

//Instance首字母小写
//instance可以有interface没有的variables, 但interface里有的object也必须有
const oldCivic = {
  name: 'Yaris',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

//instance2和instance1有很多不同variables, 但都共同有summary()function
const drink = {
  color: 'purple',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};


//(item: Belongs): in order to call the func, you must pass in an object
// that meet the requirement of the interface (i.e. summary())
const printSummary = (item: Belongs) : void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);