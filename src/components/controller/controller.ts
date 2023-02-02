import AppLoader from './appLoader';

class AppController extends AppLoader {
    //! idk what is this
    getSources(callback: void) {
        super.getResp(
            {
                endpoint: 'sources',
                options: {},
            },
            callback
            // console.log(callback);
        );
    }

    getNews(e: { target: HTMLElement; currentTarget: HTMLElement }, callback: void) {
        let target = <HTMLElement>e.target;
        const newsContainer = e.currentTarget;

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
