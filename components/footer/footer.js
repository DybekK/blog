import layoutStyles from "../layout.module.css";
import classNames from "classnames";
import {AiFillFacebook, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

export function Footer() {
    return (
        <div className={classNames(layoutStyles.footer, layoutStyles.container, "flex justify-center items-center")}>
            <div className="w-1/2">
                <h2 style={{color: '#faa9bd'}} className="font-bold text-right">@Mateusz Dybowski</h2>
                <h2 className="textBorder-short font-bold text-white text-2xl">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h2>
                <div className="flex mt-5">
                    <AiFillFacebook size="25" color="white" />
                    <AiFillLinkedin size="25" className="mx-2"  color="white" />
                    <AiFillGithub size="25" color="white" />
                </div>
            </div>
        </div>
    )
}