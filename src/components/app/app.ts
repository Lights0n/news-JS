import { sourcesResponseTypes } from '../../types/index';
import { newsTypes } from '../../types/index';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sources = document.querySelector('.sources') as HTMLButtonElement;
        sources.addEventListener('click', (e: Event): void =>
            this.controller.getNews(e, (data) => this.view.drawNews(data as newsTypes))
        );

        this.controller.getSource((data) => {
            console.log(data);
            return this.view.drawSources(data as sourcesResponseTypes);
        });
    }
}

export default App;
