import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        // super('https://newsapi.org/v2/', { // development url
        super('https://nodenews.up.railway.app/', {
            apiKey: '18897f5f951843439cf63c625a5002f0', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
