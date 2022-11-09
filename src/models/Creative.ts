class Creative {
    caption: string;
    alt: string;
    src: string;
    mimetype: string;

    constructor(caption: string, alt: string, src: string, mimetype: string) {
        this.caption = caption
        this.alt = alt
        this.src = src
        this.mimetype = mimetype
    }
}

export default Creative;