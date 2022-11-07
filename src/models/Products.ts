import { plainToClass } from "class-transformer";
import Creative from "./Creative";

class Meta {
    highestToken: HighestToken;

    constructor(highestToken: HighestToken) {
        this.highestToken = highestToken;
    }

}

class HighestToken {
    value: number;
    userId: string;

    constructor(value: number, userId: string) {
        this.value = value
        this.userId = userId
    }
}



class Products {

    
    _id: string;
    statusMessage: string;
    initialToken: string;
    endDate: Date;
    bidStory: string;
    startDate: Date;
    specification: string;
    status: string;
    minimumTokenRaise: number;
    category: string;
    brand: string;
    meta: Meta;
    tokenCurrency: string;
    creative: Creative[]
    userId: string;
    name: string;

    constructor(
        id: string,
        
        statusMessage: string,
        initialToken: string,
        endDate: Date,
        bidStory: string,
        startDate: Date,
        specification: string,
        status: string,
        minimumTokenRaise: number,
        category: string,
        brand: string,
        meta: Meta,
        tokenCurrency: string,
        creative: Creative[],
        userId: string,
        name: string
    ) {
        this._id = id
        
        this.statusMessage = statusMessage
        this.initialToken = initialToken
        this.endDate = endDate
        this.bidStory = bidStory
        this.startDate = startDate
        this.specification = specification
        this.status = status
        this.minimumTokenRaise = minimumTokenRaise
        this.category = category
        this.brand = brand
        this.meta = meta
        this.tokenCurrency = tokenCurrency
        this.creative = creative
        this.userId = userId
        this.name = name
    }

    static plainToInstance(plainData: object): Products {
        return plainToClass(Products, plainData);
    }
    static plainToInstances(plainData: object[]): Products[] {
        return plainToClass(Products, plainData);
    }
}

export default Products;