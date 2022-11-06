import { plainToClass } from "class-transformer";

class User {
    _id: string;
    firstName: string;
    lastName: string
    email: string;
    statusMessage: string;
    status: string;
    dob: Date;
    recoveryEmail: string;
    gender: string
    pwi: string;
    id: string;

    constructor(
        _id: string,
        firstName: string,
        lastName: string,
        email: string,
        statusMessage: string,
        status: string,
        dob: Date,
        recoveryEmail: string,
        gender: string,
        pwi: string,
        id: string
    ) {
        this._id = id
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.statusMessage = statusMessage
        this.status = status
        this.dob = dob
        this.recoveryEmail = recoveryEmail
        this.gender = gender
        this.pwi = pwi
        this.id = id
    }

    static plainToInstance(plainData: object): User {
        return plainToClass(User, plainData);
    }
    static plainToInstances(plainData: object[]): User[] {
        return plainToClass(User, plainData);
    }
}


export default User;