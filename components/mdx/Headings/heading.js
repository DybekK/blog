import classNames from "classnames";

const variants = {
    h1: "text-4xl",
    h2: "text-3xl",
    h3: "text-2xl"
}

export function Heading({children, variant}) {
    const classes = classNames(variants[variant], "font-bold mb-7 secondColor");
    return <h1 data-aos="fade-down" className={classes}>{children}</h1>
}