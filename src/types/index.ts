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
export enum clientErrors {
    badRequest = 400,
    unauthorized = 401,
    notFound = 404,
    tooManyRequest = 429,
}

export interface FetchResponse extends Response {
    readonly status: 200 | 400 | 401 | 404 | 429 | 500;
    readonly code: string;
    readonly message: string;
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
