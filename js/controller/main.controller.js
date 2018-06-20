import {view} from '../view/main.view';

export default class MainController {
    constructor() {
        this.render();
    };

    render() {
        document.getElementById('app').innerHTML = view;
    }
}