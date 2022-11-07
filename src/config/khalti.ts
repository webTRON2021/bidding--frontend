import KhaltiCheckout from "khalti-checkout-web";

export const testKhaltiPublicKey = "test_public_key_2b600af3278649e3b069f3b642f1a926";
export const testKhaltiSecretKey = "test_secret_key_1a85291ba8f24222b75aac3504a3c193 ";


const payment=(productIdentity:string,productName:string,productUrl:string,onSuccess:any,onError:any,onClose:any)=>{
    const config = {
        publicKey: testKhaltiPublicKey,
        productIdentity: productIdentity,
        productName: productName,
        productUrl: productUrl,
        eventHandler: {
            onSuccess (payload:any) {
                // hit merchant api for initiating verfication
                console.log(payload);
                onSuccess(payload);
            },
            onError (error:any) {
                console.log(error);
                onError(error);
            },
            onClose () {
                onClose();
            }
        }
    };
    const checkout = new KhaltiCheckout(config);
    return checkout;
}

export default payment;
