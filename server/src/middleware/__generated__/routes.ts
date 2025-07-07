/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CarController } from './../../service-layer/controllers/CarController';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "Vehicle": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "make": {"dataType":"string","required":true},
            "model": {"dataType":"string","required":true},
            "year": {"dataType":"double","required":true},
            "color": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_Vehicle.Exclude_keyofVehicle.id__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"make":{"dataType":"string","required":true},"model":{"dataType":"string","required":true},"year":{"dataType":"double","required":true},"color":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_Vehicle.id_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_Vehicle.Exclude_keyofVehicle.id__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CarCreationParams": {
        "dataType": "refAlias",
        "type": {"ref":"Omit_Vehicle.id_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        const argsCarController_getCar: Record<string, TsoaRoute.ParameterSchema> = {
                carId: {"in":"path","name":"carId","required":true,"dataType":"double"},
        };
        app.get('/cars/:carId',
            ...(fetchMiddlewares<RequestHandler>(CarController)),
            ...(fetchMiddlewares<RequestHandler>(CarController.prototype.getCar)),

            async function CarController_getCar(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCarController_getCar, request, response });

                const controller = new CarController();

              await templateService.apiHandler({
                methodName: 'getCar',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsCarController_createCar: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"CarCreationParams"},
        };
        app.post('/cars',
            ...(fetchMiddlewares<RequestHandler>(CarController)),
            ...(fetchMiddlewares<RequestHandler>(CarController.prototype.createCar)),

            async function CarController_createCar(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCarController_createCar, request, response });

                const controller = new CarController();

              await templateService.apiHandler({
                methodName: 'createCar',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsCarController_deleteCar: Record<string, TsoaRoute.ParameterSchema> = {
                carId: {"in":"path","name":"carId","required":true,"dataType":"double"},
        };
        app.delete('/cars/:carId',
            ...(fetchMiddlewares<RequestHandler>(CarController)),
            ...(fetchMiddlewares<RequestHandler>(CarController.prototype.deleteCar)),

            async function CarController_deleteCar(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCarController_deleteCar, request, response });

                const controller = new CarController();

              await templateService.apiHandler({
                methodName: 'deleteCar',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsCarController_getAllCars: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/cars',
            ...(fetchMiddlewares<RequestHandler>(CarController)),
            ...(fetchMiddlewares<RequestHandler>(CarController.prototype.getAllCars)),

            async function CarController_getAllCars(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCarController_getAllCars, request, response });

                const controller = new CarController();

              await templateService.apiHandler({
                methodName: 'getAllCars',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
