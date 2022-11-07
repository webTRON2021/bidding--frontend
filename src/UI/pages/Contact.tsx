import Form from "react-bootstrap/Form";
import { BsFillPhoneFill } from "react-icons/bs";
import { IoMailOpenOutline } from "react-icons/io5"
import { MdLocationOn, MdEmail } from "react-icons/md"
import Input from "../atoms/Input";
import Title from "../atoms/Title";
import { TbUserCircle } from "react-icons/tb"
import Textarea from "../atoms/Textarea";
import Button from "../atoms/Button";
import useScrollTop from '../../hooks/useScrollTop';

export default () => {
    useScrollTop();
    // function to handle submit form
    const submit = (e: any) => {
        e.preventDefault();
    }

    return <section className="contact_section">
        <div className="container">
            <Title text="CONTACT DETAILS" />
            <div className="sub_heading">
                If you still have any question, please contact us at or request.
            </div>
            <div className="row">
                <div className="col-lg-6 col-12 ">
                    <div className="contact_option  ">
                        <div className="text font_bold">
                            <BsFillPhoneFill /> Phone :
                        </div>
                        <div className="text pt-1 ">
                            <a href="tel:9851022662"> +977 9851022662</a>
                        </div>
                    </div>
                    <div className="contact_option">
                        <div className="text font_bold">
                            <MdEmail /> Email :
                        </div>
                        <div className="text  ">
                            <a href="mailto:info@infocarenepal.com">
                                info@infocarenepal.com
                            </a>
                        </div>
                    </div>
                    <div className="contact_option">
                        <div className="text font_bold">
                            <MdLocationOn /> Address :
                        </div>
                        <a
                            href="https://www.google.com/maps/place/Cliff+Byte/@27.680794,85.344664,15z/data=!4m5!3m4!1s0x0:0x14bad80620f24e14!8m2!3d27.6807942!4d85.3446635?hl=en"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="text pt-1 ">Mahadevsthan Marga,</div>
                            <div className="text  ">Mid Baneshwor, Kathmandu</div>
                            <div className="text  ">postal code: 44600</div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-12 contact_form">
                    <Form onSubmit={(e) => submit(e)}>
                        <Form.Group className="mb-3">
                            <Input placeholder="Ram bd. thapa" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Input variant="number" placeholder="+977- 98-xxxx-xxxx" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Input variant="email" placeholder="someone@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Textarea placeholder="Write your message here"></Textarea>
                        </Form.Group>
                        <br />
                        <Button>
                            Send Message &nbsp;
                            <IoMailOpenOutline />
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
        <div className="mt-5">
            <iframe
                title="google maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1811928325956!2d85.34247481488583!3d27.68079418280288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1922adf46107%3A0x14bad80620f24e14!2sCliff%20Byte!5e0!3m2!1sen!2snp!4v1651084412033!5m2!1sen!2snp"
                width="100%"
                height="250"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </section>
}