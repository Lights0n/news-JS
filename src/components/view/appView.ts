import News from './news/news';
import Sources from './sources/sources';
import { NewsTypes } from '../../types/index';
import { SourcesResponseTypes } from '../../types/index';

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: NewsTypes): void {
        const values = data.articles ? data.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: SourcesResponseTypes) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
