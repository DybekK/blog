import {AnimatedVariantButton} from "../buttons/animatedVariantButton";

export default function Header({dataAos, home}) {
    return (
        <div data-aos={dataAos} className={"mt-7 flex justify-between items-center"}>
            <h1 className="text-white header2">
                My blog
            </h1>
            {home && (
                <div>
                    <AnimatedVariantButton variant="blue"  text="About me" className="mr-2" />
                    <AnimatedVariantButton variant="blue" text="FAQ" className="ml-2" />
                </div>
            )}
        </div>
    )
}