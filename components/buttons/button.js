import buttonStyles from './button.module.css';
import classNames from "classnames";

export default function Button({className, text}) {
    const classes = classNames(buttonStyles.button, className);
    return <button className={classes}>{text}</button>
}