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
