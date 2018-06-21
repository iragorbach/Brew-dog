import {view} from '../view/main.view';

export default class MainController {

    static init() {
        let self = new this;
        self.render();
    };

    render() {
        document.getElementById('app').innerHTML = view;
    }
}