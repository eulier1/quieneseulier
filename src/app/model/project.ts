export class Image {
    public id?: number;
    public name: string;
    public url: string;
    public isActive?: boolean;

    constructor(
        name = '',
        url = ''
    ) {
        this.name = name;
        this.url = url;
    }
}

export class Project {
    public id?: number;
    public name: string;
    public duration?: string;
    public description: string;
    public image?: Array<Image>;

    constructor(
        name = '',
        duration = '',
        description = '',
        image: Array<Image>
    ) {
        this.name = name;
        this.duration = duration;
        this.description = description;
        this.image = image;
    }


}