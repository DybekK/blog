import buttonStyles from './button.module.css';
import classNames from "classnames";

const variants = {
    "blue": buttonStyles.button_blue,
    "pink": buttonStyles.button_pink,
    "black": buttonStyles.button_black
}

export function AnimatedVariantButton({className, variant = 'blue', fontSize = 11, padding, dataAos, text}) {
    const classes = classNames(buttonStyles.button, variants[variant], className);
    return <button data-aos={dataAos} style={{fontSize, padding}} className={classes}>{text}</button>
}