import './news.css';
import { mainDataTypes } from '../../../types/index';
class News {
    protected draw(data: mainDataTypes) {
        const news: string[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        news.forEach((item: string, idx) => {
            if (newsItemTemp) {
                const newsClone: HTMLElement | null = <HTMLElement>newsItemTemp.content.cloneNode(true);

                if (newsClone) {
                    if (idx % 2) {
                        const newsCloneItem: HTMLElement | null = newsClone.querySelector('.news__item')
                        newsCloneItem?.classList.add('alt');
                    }
                    const newsClonePhoto: HTMLElement | null = newsClone.querySelector('.news__meta-photo');
                    newsClonePhoto!.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'
                        })`;
                    newsClone.querySelector('.news__meta-author')!.textContent = `${item.author}` || item.source.name;
                    newsClone.querySelector('.news__meta-date')!.textContent = item!.publishedAt
                        .slice(0, 10)
                        .split('-')
                        .reverse()
                        .join('-');

                    newsClone.querySelector('.news__description-title')!.textContent = item.title;
                    newsClone.querySelector('.news__description-source')!.textContent = item.source.name;
                    newsClone.querySelector('.news__description-content')!.textContent = item.description;
                    newsClone.querySelector('.news__read-more a')!.setAttribute('href', item.url);

                    fragment.append(newsClone);
                }
            }
        });

        document.querySelector('.news')!.innerHTML = '';
        document.querySelector('.news')!.appendChild(fragment);
    }
}

export default News;
