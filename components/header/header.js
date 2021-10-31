import Button from "../buttons/button";

export default function Header() {
    return (
        <div className={"mt-7 flex justify-between items-center"}>
            <h1 className="text-white header2">
                My blog
            </h1>
            <div>
                <Button text="About me" className="mr-2" />
                <Button text="FAQ" className="ml-2" />
            </div>
        </div>
    )
}