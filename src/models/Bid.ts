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
    this.value = value;
    this.userId = userId;
  }
}

class Bid {
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
  creative: Creative[];
  userId: string;
  name: string;
  highestTokenValue: number;

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
    name: string,
    highestTokenValue: number
  ) {
    this._id = id;
    this.statusMessage = statusMessage;
    this.initialToken = initialToken;
    this.endDate = endDate;
    this.bidStory = bidStory;
    this.startDate = startDate;
    this.specification = specification;
    this.status = status;
    this.minimumTokenRaise = minimumTokenRaise;
    this.category = category;
    this.brand = brand;
    this.meta = meta;
    this.tokenCurrency = tokenCurrency;
    this.creative = creative;
    this.userId = userId;
    this.name = name;
    this.highestTokenValue = highestTokenValue;
  }

  static plainToInstance(plainData: object): Bid {
    return plainToClass(Bid, plainData);
  }
  static plainToInstances(plainData: object[]): Bid[] {
    return plainToClass(Bid, plainData);
  }
}

export default Bid;
