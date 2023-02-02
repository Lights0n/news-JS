import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '11e8dad77b87b9487a8f2c98ce99277333', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
