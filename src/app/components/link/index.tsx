import { FaArrowRightLong } from "react-icons/fa6";

interface ILink {
    href: string;
    title: string;
}

export default function Link({ href, title }: ILink) {
    return (
        <a href={href} className="group text-white flex gap-3 items-center">
            {title}
            <FaArrowRightLong className="opacity-0 w-0 group-hover:opacity-100 group-hover:w-fit" size={14}/>
        </a>
    )
}