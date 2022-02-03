export interface Site {
    name: string;
    link: string;
    sitePic: string;
}

export interface Display {
    image: string;
    articles: {
        title: string;
        text: string;
    }[];
}