import {view} from '../view/main.view';

export default class BeerController {

    static init() {
        let self = new this;
        self.render();
    };

    render() {
        document.getElementById('beer-container').innerHTML = view;
    }
}