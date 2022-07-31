import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '4c0a290d45394ed5bff1b0b8b566b98e', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
