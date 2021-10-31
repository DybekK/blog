import frontStyles from "./front.module.css"
import Header from "../header/header";
import layoutStyles from "../layout.module.css";
import classNames from "classnames";

export default function Front() {
    return (
        <div className={frontStyles.front}>
            <div className={classNames(layoutStyles.container, "flex flex-col h-full justify-between")}>
                <Header />
                <div>
                    <p style={{color: "#faa9bd"}}>Home</p>
                    <h1 className="header1 textBorder text-white mb-7">
                        Hey, my name is Mateusz and I work as a Software Engineer, it's my job and passion
                    </h1>
                </div>
            </div>
        </div>
    )
}