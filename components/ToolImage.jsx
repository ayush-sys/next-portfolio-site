import Image from "next/image";

export default function ToolImage({ location }) {
    return (
        <Image src={location} height={50} width={50} className="mx-2 px-1 lg:ml-0"/>
    )
}