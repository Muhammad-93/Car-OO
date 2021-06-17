// Part One

class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    honk() {
      return "Beep.";
    }
  
    toString() {
      return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
  }



  /** Cars are a type of vehicle with 4 wheels. */

//   Part two

class Car extends Vehicle {
    constructor(make, model, year) {
    super(make, model, year);
     this.numWheels = 4;
    }
  }

  let myFirstVehicle = new Car("Honda", "Monster Truck", 1999, 4);
   let x = myFirstVehicle.numWheels; // "Beep."
   
   let myFirstCar = new Car("Toyota", "Corolla", 2005);
   let y = myFirstCar.honk();
   console.log(x)
   console.log(y)


// Part three
   class Motorcycle extends Vehicle {
    constructor(make, model, year) {
    super(make, model, year);
     this.numWheels = 2;
     this.revEngine = "Vroom"
    }
  }

  let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

 myFirstMotorcycle.toString();
 // "The vehicle is a Honda Nighthawk from 2000."

 let a = myFirstMotorcycle.honk();     // "Beep."
 let b = myFirstMotorcycle.revEngine; // "VROOM!!!"
 let c = myFirstMotorcycle.numWheels;  // 2
 
 console.log(a)
 console.log(b)
 console.log(c)


//  Part four

class Garage {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  // mold use to make things
    add(newVehicle) {
      if (!(newVehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
      }
      this.vehicles.push(newVehicle);
      return "Vehicle added!";
    }
  }

  let garage = new Garage(2);
  let q = garage.add(new Car("Hyundai"))
  console.log(q)

  let w = garage.add(new Car("Hyunda"))
  console.log(w)

//   let e = garage.add(new Car("Honda"))
//   console.log(e)

  let e = garage.add("Taco");
  console.log(e)

  let r = garage.vehicles;
  console.log(r)

  let t = Car instanceof Vehicle
  console.log(t)





