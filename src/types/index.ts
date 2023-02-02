export type Callback = <T>(data?: T) => void;

export interface source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface SourcesResponseTypes {
    status: string;
    sources: source[];
}

export interface Article {
    source: source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface NewsTypes {
    status: string;
    totalResults: number;
    articles: Article[];
    author: string;
    source: source;
    length: number;
    publishedAt: string;
}

export interface FetchResponse {
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

export interface RequestOptions {
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
export type GetSourcesCallback<T> = (data: T) => void;
