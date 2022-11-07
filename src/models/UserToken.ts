class Token{
    _id: string;
    amount: string;
    bidId: string;
    userId: string;
    createdAt: string;
    transactionId: string;
    constructor(_id: string, amount: string, bidId: string, userId: string, createdAt: string, transactionId: string){
        this._id = _id;
        this.amount = amount;
        this.bidId = bidId;
        this.userId = userId;
        this.createdAt = createdAt;
        this.transactionId = transactionId;
    }
    static plainToInstance(plain: any): Token {
        return new Token(plain._id, plain.amount, plain.bidId, plain.userId, plain.createdAt, plain.transactionId);
    }
    static plainToInstances(plain: any[]): Token[] {
        return plain.map(Token.plainToInstance);
    }
}

class UserToken{
    userId: string;
    tokens: Token[];
    constructor(userId: string, tokens: Token[]){
        this.userId = userId;
        this.tokens = tokens;
    }
    static plainToInstance(plain: any): UserToken {
        return new UserToken(plain.userId, Token.plainToInstances(plain.tokens));
    }
    static plainToInstances(plain: any[]): UserToken[] {
        return plain.map(UserToken.plainToInstance);
    }

}

export default UserToken;