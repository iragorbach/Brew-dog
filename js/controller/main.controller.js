import {renderView} from "../view/main.view";

export class MainController {
    static init() {
        let self = new this;
        self.getItems();
    };

    getItems() {
        const url = 'https://api.punkapi.com/v2/beers';

        fetch(url).then(function(response) {
            return response.json();
        }).then(function(result) {
            for(let i = 0; i < result.length; i++){
                document.getElementById('beer-container').innerHTML += renderView({
                    id: result[i].id,
                    img: result[i].image_url,
                    name: result[i].name,
                    tagline: result[i].tagline
                });
            }
        });
    };
}