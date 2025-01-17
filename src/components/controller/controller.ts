import AppLoader from './appLoader';
import { Callback } from '../../types/index';
class AppController extends AppLoader {
    public getSource(callback: Callback): void {
        super.getResp(
            {
                endpoint: 'sources',
                options: {},
            },
            callback
        );
    }

    public getNews(e: Event, callback: Callback): void {
        let target = <HTMLElement>e.target;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = <HTMLElement>target.parentNode;
        }
    }
}

export default AppController;
