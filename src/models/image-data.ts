export class ImageData {
    image_source: string;
    image_alt: string;
    link: string;
    constructor(image_source: string, image_alt: string, link: string) {
        this.image_source = image_source;
        this.image_alt = image_alt;
        this.link = link;
    }
}