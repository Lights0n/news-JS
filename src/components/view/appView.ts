import News from './news/news';
import Sources from './sources/sources';
import { newsTypes } from '../../types/index';
import { sourcesResponseTypes } from '../../types/index';

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: newsTypes): void {
        const values = data.articles ? data.articles : [];
        this.news.draw(values);
    }

    drawSources(data: sourcesResponseTypes) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
