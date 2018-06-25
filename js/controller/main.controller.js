import {renderView} from "../view/main.view";
import {BeerController} from "./beer.controller";

let self;
let beerController;

const url = 'https://api.punkapi.com/v2/beers';

export class MainController {
    static init() {
        self = new this;
        beerController = new BeerController();
        self.getItems();
    };

    getItems() {
        document.getElementById('beer-container').innerHTML = '<img src="assets/loader.gif">';
        fetch(url).then(function(response) {
            return response.json();
        }).then(function(result) {
            document.getElementById('beer-container').innerHTML = '';

            for(let i = 0; i < result.length; i++){
                document.getElementById('beer-container').innerHTML += renderView({
                    id: result[i].id,
                    img: result[i].image_url,
                    name: result[i].name,
                    tagline: result[i].tagline
                });
            }
            beerController.setClickFunc();
        });
    };
}