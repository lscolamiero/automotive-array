class Vehicle {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.speed = 0;
        this.record = true;
        this.felonies = 0;
        this.fuel = 6;
        this.destroyed = true;
    }
        vehicleInfo() {
             console.log("Make: " + this.make + ", " + "Model: " + this.model + ", " + "Year: " + this.year + ", " + "Color: " + this.color)
        }
        radar() {
            this.speed += 30
            console.log("Current subject speed is " + this.speed + "mph.")
            this.speed += 30
            console.log("Current subject speed is " + this.speed + "mph.")
            this.speed += 30
            console.log("Current subject speed is " + this.speed + "mph.")
            if (this.speed >= 90){
                console.log("Subject is over the speed limit. Start pull over procedure right away for reckless driving.");
            }
            else {
                console.log("Subject is not breaking any laws")
            }
        }
        pullover() {
            this.speed -= 90
            console.log("Stopping subject over the speaker. Asking to stop engine.")
            console.log("Subject has stopped the engine. Current speed is " + this.speed + "mph.")
            if (this.speed == 0){
                this.stopengine()
            }
            else {
                console.log("Calling for backup.")
            }
        }
        stopengine() {
            console.log("Checking subject antecedents.")
            if (this.record == true){
                console.log("Subject has an issued warrant. Proceed to arrest.")
                this.arrest()
            }
            else {
                console.log("Subject is free to go.")
            }
        }
        arrest() {
            this.felonies += 5
            console.log("Subject is being transported to the police hq.")
            if (this.felonies > 3){
                console.log("Subject is being sentenced for 20 years in prison for having " + this.felonies + " felonies.")
            }
        }
        checkCar() {
            console.log("Car information after being secuestred:")
            this.vehicleInfo()
            console.log("Current fuel level is " + this.fuel + " Gallons")
            console.log("Extracting fuel... % .... % ....")
            this.fuel -= 2
            console.log("Fuel level -- " + this.fuel + " Gallons")
            this.fuel -= 4
            if (this.fuel == 0){
                console.log("Fuel level -- " + this.fuel + " Gallons")
                console.log("Starting destroy procedure...")
            }
            else {
                console.log("Car will not be destroyed.")
            }
        }
        destroy() {
            if (this.destroyed == true){
                console.log("Car has been destroyed.")
            }
            else {
                console.log("Car has not being destroyed")
            }
        }
}

let car = new Vehicle("Jaguar", "Turbo XE", "2015", "Black", "30000");
car.vehicleInfo();
car.radar();
car.pullover();
car.checkCar();
car.destroy();