import frontStyles from "./front.module.css"
import Header from "../header/header";
import layoutStyles from "../layout.module.css";
import classNames from "classnames";
import {AnimatedVariantButton} from "../buttons/animatedVariantButton";

export default function Front({home, postData}) {
    const title = home ? "Hey, my name is Mateusz and I work as a Software Engineer, it's my job and passion" : postData?.title;
    const height = home ? "100vh" : "500px";
    const margin = home ? "mb-40" : "mb-20";
    const classes = classNames(margin, " z-10 relative");

    return (
        <div style={{height}} className={frontStyles.front}>
            <div className={classNames(layoutStyles.container, frontStyles.frontBorder, "flex flex-col h-full justify-between")}>
                <Header dataAos="fade-down" home={home} />
                <div className={classes}>
                    {home && <p data-aos="fade-right" style={{color: "#faa9bd"}}>Home</p>}
                    <div className="textBorder">
                        <h1 data-aos="fade-right" className="font-bold sm:w-3/4 md:w-3/5 lg:w-full md:leading-snug sm:leading-snug lg:leading-snug sm:text-3xl md:text-4xl lg:text-5xl text-white z-10 relative mb-7">
                            {title}
                        </h1>
                    </div>
                    {!home && postData?.categories?.map(category => <AnimatedVariantButton className="z-10 relative mr-4" variant="pink" fontSize="13px" padding="9px 17px" text={`#${category}`} />)}
                    {home && <AnimatedVariantButton
                        dataAos="fade-right"
                        variant="pink"
                        text="Look at my posts"
                        fontSize="14px"
                        className="mt-2"
                    />}
                </div>
            </div>
        </div>
    )
}