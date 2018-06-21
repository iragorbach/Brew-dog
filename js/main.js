import MainController from './controller/main.controller';
import BeerController from "./controller/beer.controller";

const imports = [
    MainController,
    BeerController,
];

imports.forEach(function (importValue) {
    importValue.init();
});