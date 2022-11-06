import { useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs"

export default () => {
    const [isVisible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    window.addEventListener("scroll", toggleVisible);
    return (
        <div>
            <div
                className="scroll_box"
                style={{ display: isVisible ? "inline" : "none" }}
            >
                <span onClick={() => scrollToTop()}>
                    <BsFillArrowUpCircleFill />
                </span>
            </div>
        </div>
    );
}