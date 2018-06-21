import {view} from '../view/beer.view';

export default class BeerController {

    static init() {
        let self = new this;
        self.render();
    };

    render() {
        document.getElementById('beer-container').innerHTML = view;
    }
}