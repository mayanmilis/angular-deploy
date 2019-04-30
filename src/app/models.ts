export interface SongsResponse {
    chart: Song[];
    properties: any;
}

export interface Song {
    heading: Heading;
    images: Images;
    url:string;
}

export interface Heading {
    subtitle: string;
    title: string;
}

export interface Images {
    blurred: string;
    default: string;
    play: string;
}