import './news.css';
import { Article } from '../../../types/index';

class News {
    public draw(data: Article[]) {
        const news = data.length >= 10 ? data.filter((_item: Article, idx: number) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item: Article, idx: number) => {
            if (newsItemTemp) {
                const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

                if (newsClone) {
                    if (idx % 2) {
                        const newsCloneItem = newsClone.querySelector('.news__item') as HTMLElement;
                        newsCloneItem?.classList.add('alt');
                    }
                    const newsClonePhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
                    newsClonePhoto.style.backgroundImage = `url(${
                        item.urlToImage || 'https://upload.wikimedia.org/wikipedia/commons/b/b6/No_image_template.svg'
                    })`;
                    (newsClone.querySelector('.news__meta-author') as HTMLElement).textContent =
                        `${item.author}` || item.source.name;
                    (newsClone.querySelector('.news__meta-date') as HTMLElement).textContent = item.publishedAt
                        .slice(0, 10)
                        .split('-')
                        .reverse()
                        .join('-');
                    (newsClone.querySelector('.news__description-title') as HTMLElement).textContent = item.title;
                    (newsClone.querySelector('.news__description-source') as HTMLElement).textContent =
                        item.source.name;
                    (newsClone.querySelector('.news__description-content') as HTMLElement).textContent =
                        item.description;
                    (newsClone.querySelector('.news__read-more a') as HTMLElement).setAttribute('href', item.url);

                    fragment.append(newsClone);
                }
            }
        });

        (document.querySelector('.news') as HTMLElement).innerHTML = '';
        (document.querySelector('.news') as HTMLElement).appendChild(fragment);
    }
}

export default News;
