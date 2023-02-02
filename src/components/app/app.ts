import AppController from '../controller/controller';
import { SourcesResponseTypes } from '../../types/index';
import { NewsTypes } from '../../types/index';
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
            this.controller.getNews(e, (data) => this.view.drawNews(data as NewsTypes))
        );

        this.controller.getSource((data) => this.view.drawSources(data as SourcesResponseTypes));
    }
}

export default App;
