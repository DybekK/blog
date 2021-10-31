import buttonStyles from './button.module.css';
import classNames from "classnames";
import {useEffect} from "react";
import AOS from "aos";

export function AnimatedVariantButton({className, variant, fontSize = 11, dataAos, text}) {
    const variantStyles = variant === 'blue' ?  buttonStyles.button_blue : buttonStyles.button_pink;
    const classes = classNames(buttonStyles.button, variantStyles, className);
    return <button data-aos={dataAos} style={{fontSize}} className={classes}>{text}</button>
}