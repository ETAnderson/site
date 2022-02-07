export interface Site {
    name: string;
    link: string;
    sitePic: string;
}

export interface Articles {
    title: string;
    text: string;
};
export interface Display {
    image: string;
    articles: Array<Articles>;
}

