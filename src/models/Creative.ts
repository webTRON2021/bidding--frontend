class Creative {
    caption: string;
    alt: string;
    filename: string;
    mimetype: string;

    constructor(caption: string, alt: string, filename: string, mimetype: string) {
        this.caption = caption
        this.alt = alt
        this.filename = filename
        this.mimetype = mimetype
    }
}

export default Creative;