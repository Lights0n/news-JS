export interface source {
    id: string;
    name: string;
    description?: string;
    url?: string;
    category?: string;
    language?: string;
    country?: string;
}

export interface sourcesResponseTypes {
    status: string;
    sources: source[];
}

export interface article {
    source: source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface newsTypes {
    status: string;
    totalResults: number;
    articles: article[];
    author: string;
    source: source;
    length: number;
    publishedAt: string;
}

export interface fetchResponse {
    ok: boolean;
    redirected: boolean;
    status: 200 | 400 | 401 | 404 | 429 | 500;
    code?: string;
    statusText: string;
    type: string;
    url: string;
    message?: string;
    res?: string;
    value?: string;
}

export interface urlOptionstypes {
    category: requestCategory;
    language: requestLang;
    country: requestCountry;
}

type requestCategory = 'busines' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology';
type requestLang = 'ar' | 'de' | 'en' | 'es' | 'fr' | 'he' | 'it' | 'nl' | 'no' | 'pt' | 'ru' | 'sv' | 'ud' | 'zh';
type requestCountry =
    | 'ae'
    | 'ar'
    | 'at'
    | 'au'
    | 'be'
    | 'bg'
    | 'br'
    | 'ca'
    | 'ch'
    | 'cn'
    | 'co'
    | 'cu'
    | 'cz'
    | 'de'
    | 'eg'
    | 'fr'
    | 'gb'
    | 'gr'
    | 'hk'
    | 'hu'
    | 'id'
    | 'ie'
    | 'il'
    | 'in'
    | 'it'
    | 'jp'
    | 'kr'
    | 'lt'
    | 'lv'
    | 'ma'
    | 'mx'
    | 'my'
    | 'ng'
    | 'nl'
    | 'no'
    | 'nz'
    | 'ph'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'rs'
    | 'ru'
    | 'sa'
    | 'se'
    | 'sg'
    | 'si'
    | 'sk'
    | 'th'
    | 'tr'
    | 'tw'
    | 'ua'
    | 'us'
    | 've'
    | 'za';
export interface requestOptions {
    apiKey: string;
    q?: string;
    searchIn?: string;
    sources?: string;
    domains?: string;
    excludeDomains?: string;
    from?: string;
    to?: string;
    language?: string;
    sortBy?: string;
    pageSize?: number;
    page?: number;
}
