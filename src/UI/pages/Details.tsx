import Images from "../../config/constant/Images"
import Input from "../atoms/Input"
import Title from "../atoms/Title"
import { TbCurrencyDollar } from "react-icons/tb"
import Button from "../atoms/Button"
import SimilarProduct from "../organisms/SimilarProduct"
export default () => {
    // payment option icon
    const paymentOption = [
        Images.esewa,
        Images.bank_transfer,
        Images.imepay,
        Images.paypal,
        Images.khalti,
        Images.visacard,
    ]

    return <section className="details_page_section py-4">
        <div className="container">
            <div className="row">
                <div className="col-md-5 col-12">
                    <div className="image">
                        <img src={Images.product} alt="product image" />
                    </div>
                </div>
                <div className="col-md-7 col-12">
                    <div className="details">
                        <Title text="1856 $1 One Dollar Gold Indian Princess Type 3 Upright 5 Ex Mount ? #CC" />
                        <div className="items">
                            <div className="item">Condition : Good condition</div>
                            <div className="item">Time Left : 4d | Thursday, 2:15PM</div>
                            <div className="item bid_input py-4 ">
                                <div>Current bid : <span className="currency">Npr: 30303</span></div>
                                <div className="pt-2 d-flex gap-2">
                                    <div className="w-25">
                                        <Input type="number" icon={<TbCurrencyDollar />} />
                                    </div>
                                    <Button>Place Bid</Button>
                                </div>
                                <div className="pt-1"> minimum increment (Npr. 1000)</div>
                            </div>
                            <div className="item font-weight-500">
                                Description
                            </div>
                            <div className="item">Location : NewBaneshwor-28, Ktm Nepal</div>
                            <div className="item">Delivery : free  within ktm valley </div>
                            <div className="item">Return : 30 day returns | Buyer pays for return shipping  </div>
                            <div className="item pt-2 font-weight-500">
                                Payments
                            </div>
                            <div className="item d-flex gap-3">
                                {
                                    paymentOption && paymentOption.map((item: string, index: number) => {
                                        return <div className="logo" key={index}>
                                            <img src={item} alt="logo" />
                                        </div>
                                    })
                                }
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        <div className="pt-5">
            <SimilarProduct />
        </div>
        <div className="pt-5 d-flex justify-content-center">
            <Button variant="secondary" className="p-5" useFor="pagination">
                Load More
            </Button>
        </div>
    </section>
}