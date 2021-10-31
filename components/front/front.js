import frontStyles from "./front.module.css"
import Header from "../header/header";
import layoutStyles from "../layout.module.css";
import classNames from "classnames";
import {AnimatedVariantButton} from "../buttons/animatedVariantButton";

export default function Front() {
    return (
        <div className={frontStyles.front}>
            <div className={classNames(layoutStyles.container, frontStyles.frontBorder, "flex flex-col h-full justify-between")}>
                <Header />
                <div className="mb-40">
                    <p style={{color: "#faa9bd"}}>Home</p>
                    <div className="textBorder">
                        <h1 className="header1 text-white z-10 relative mb-7">
                            Hey, my name is Mateusz and I work as a Software Engineer, it's my job and passion
                        </h1>
                    </div>
                    <AnimatedVariantButton
                        variant="pink"
                        text="Look at my posts"
                        fontSize="14px"
                        className="mt-2"
                    />
                </div>
            </div>
        </div>
    )
}