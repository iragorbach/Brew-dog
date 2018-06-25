import {renderBeer} from "../view/beer.view";

const idUrl = "https://api.punkapi.com/v2/beers/";

export class BeerController {
    static init() {
        console.log('Beer controller');
    };

    setClickFunc() {
        let elements = document.getElementsByClassName('beer-item');

        [].forEach.call(elements, function (elem) {
            elem.addEventListener('click', function () {
                let beersId = this;
                let beerId = beersId.dataset.id;

                document.getElementById('beer-container').innerHTML = '<img src="assets/loader.gif">';

                fetch(idUrl + beerId).then(function(response) {
                    return response.json();
                }).then(function(result) {
                    document.getElementById('beer-container').innerHTML = renderBeer({
                        img: result[0].image_url,
                        beer: result[0].description
                    })
                })
            });
        });
    };

}