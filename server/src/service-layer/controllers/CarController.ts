import { Vehicle } from "../../data-layer/models/models";
import {
  CarCreationParams,
  CarService,
} from "../../data-layer/services/CarService";
import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Post,
  Route,
  SuccessResponse,
} from "tsoa";

@Route("cars")
export class CarController extends Controller {
  @Get("{carId}")
  public async getCar(@Path() carId: number): Promise<Vehicle> {
    return new CarService().get(carId);
  }

  @SuccessResponse("201", "Created") // Custom success response
  @Post()
  public async createCar(
    @Body() requestBody: CarCreationParams
  ): Promise<Vehicle> {
    this.setStatus(201); // set return status 201
    return new CarService().create(requestBody);
  }

  @Delete("{carId}")
  public async deleteCar(@Path() carId: number): Promise<void> {
    await new CarService().delete(carId);
  }

  @Get()
  public async getAllCars(): Promise<Vehicle[]> {
    return new CarService().getAll();
  }
}
