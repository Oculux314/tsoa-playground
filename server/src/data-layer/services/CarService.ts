import { Vehicle } from "data-layer/models/models";

// Mock car data
const cars: Vehicle[] = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Blue"
  },
  {
    id: 2,
    make: "Honda",
    model: "Accord",
    year: 2019,
    color: "Red"
  },
  {
    id: 3,
    make: "Ford",
    model: "Mustang",
    year: 2021,
    color: "Black"
  },
];
let count = cars.length;

// A post request should not contain an id.
export type CarCreationParams = Pick<Vehicle, "make" | "model" | "year" | "color">;

export class CarService {
  public get(id: number): Vehicle {
    return cars.find((car) => car.id === id) || null;
  }

  public getAll(): Vehicle[] {
    return cars;
  }

  public add(car: Vehicle): void {
    cars.push(car);
  }

  public create(carCreationParams: CarCreationParams): Vehicle {
    count++;
    const car = {
      id: count, // Random
      ...carCreationParams,
    };
    cars.push(car);
    return car;
  }

  public async delete(id: number): Promise<void> {
    const index = cars.findIndex((car) => car.id === id);
    if (index === -1) {
      throw new Error(`Car with id ${id} not found`);
    }
    cars.splice(index, 1);
  }
}
