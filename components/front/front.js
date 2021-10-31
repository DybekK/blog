import frontStyles from "./front.module.css"
import Header from "../header/header";
import layoutStyles from "../layout.module.css";
import classNames from "classnames";
import {AnimatedVariantButton} from "../buttons/animatedVariantButton";

export default function Front() {
    return (
        <div className={frontStyles.front}>
            <div className={classNames(layoutStyles.container, frontStyles.frontBorder, "flex flex-col h-full justify-between")}>
                <Header dataAos="fade-down" />
                <div className="mb-40">
                    <p data-aos="fade-right" style={{color: "#faa9bd"}}>Home</p>
                    <div className="textBorder">
                        <h1 data-aos="fade-right" className="font-bold sm:w-3/4 md:w-3/5 lg:w-full md:leading-snug sm:leading-snug lg:leading-snug sm:text-3xl md:text-4xl lg:text-5xl text-white z-10 relative mb-7">
                            Hey, my name is Mateusz and I work as a Software Engineer, it's my job and passion
                        </h1>
                    </div>
                    <AnimatedVariantButton
                        dataAos="fade-right"
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