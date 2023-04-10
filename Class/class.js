class Car {
    constructor(name) {
        this.name = name;
    }

    intro() {
        console.log(`my car is ${this.name}`);
    }

    static kia() {
        console.log('KIA');
    }

}

let myCar = new Car('k3')

myCar.intro()

Car.kia()