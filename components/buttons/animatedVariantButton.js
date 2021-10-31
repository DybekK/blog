import buttonStyles from './button.module.css';
import classNames from "classnames";

export function AnimatedVariantButton({className, variant, fontSize = 11, text}) {
    const variantStyles = variant === 'blue' ?  buttonStyles.button_blue : buttonStyles.button_pink;
    const classes = classNames(buttonStyles.button, variantStyles, className);
    return <button style={{fontSize}} className={classes}>{text}</button>
}