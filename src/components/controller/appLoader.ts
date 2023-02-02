import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        // super('https://newsapi.org/v2/', {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '18897f5f951843439cf63c625a5002f0', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
