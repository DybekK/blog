import buttonStyles from "./button.module.css";
import classNames from "classnames";

export function SimpleCategoryButton({className, fontSize = 11, dataAos, text}) {
    const classes = classNames(buttonStyles.button, buttonStyles.categoryButton, className);
    return <button data-aos={dataAos} style={{fontSize}} className={classes}>{text}</button>
}