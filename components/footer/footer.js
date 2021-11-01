import layoutStyles from "../layout.module.css";
import frontStyles from "../front/front.module.css";
import classNames from "classnames";
import {AiFillFacebook, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

export function Footer() {
    return (
        <div className={classNames(layoutStyles.footer, layoutStyles.container,  frontStyles.frontBorder, "flex justify-center items-center")}>
            <div className="w-3/4 md:w-1/2 relative z-10">
                <p data-aos="fade-left" style={{color: '#faa9bd'}} className="font-bold text-sm relative z-10 mb-2 text-right">@Mateusz Dybowski 2021</p>
                <div className="textBorder-short">
                    <h2 data-aos="fade-left" className="text-sm sm:text-2xl font-bold text-white z-10 relative">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h2>
                </div>
                <div data-aos="fade-left" className="flex mt-5 z-10 relative">
                    <AiFillFacebook size="25" color="white" />
                    <AiFillLinkedin size="25" className="mx-2"  color="white" />
                    <AiFillGithub size="25" color="white" />
                </div>
            </div>
        </div>
    )
}