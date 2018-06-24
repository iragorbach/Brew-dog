import {renderBeer} from "../view/beer.view";


export class BeerController {
    static init() {
        console.log('Beer controller');
         let elements = document.getElementsByClassName('beer-item');
         console.log(elements);
        [].forEach.call(elements, function (elem) {
            elem.onclick = function () {
                console.log('asdasdasd');
            }
        })
    }
    getBeer() {

        let strGET = window.location.search.replace( '?id=', '');

        const idUrl = "https://api.punkapi.com/v2/beers/" + strGET;

        console.log(idUrl);

        fetch(idUrl).then(function(response) {
            return response.json();
        }).then(function(result) {
            document.getElementById('beer-info').innerHTML = renderBeer({
                img: result[0].img_url,
                beer: result[0].description
            })
        })
    }
}