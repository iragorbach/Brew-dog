import {BeerController} from "./controller/beer.controller";
import {MainController} from "./controller/main.controller";

const controllers = [
    MainController,
    BeerController,
];
controllers.forEach(function (controller) {
    controller.init();
});