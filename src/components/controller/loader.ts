import { fetchResponse } from '../../types/index';
import { requestOptions } from '../../types/index';
class Loader {
    baseLink: string;
    options: { apiKey: string };
    constructor(baseLink: string, options: { apiKey: string }) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: { endpoint: string; options: object },
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response | fetchResponse) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: object, endpoint: string) {
        const urlOptions = { ...((this.options as unknown) as requestOptions), ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key as keyof requestOptions]}&`;
        });
        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: FileCallback, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            // ! Мне нужна помощь на этом моменте. Если раскомментить нижнюю строку, то я не могу решить конфликты. Не понимаю и не нахожу решения
            // .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
