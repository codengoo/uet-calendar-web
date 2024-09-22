import { FaArrowRightLong } from "react-icons/fa6";

export interface IQuickLinkProps {
    href: string;
    title: string;
}

export default function QuickLink({ href, title }: IQuickLinkProps) {
    return (
        <a href={href} className="group text-white flex gap-3 items-center">
            {title}
            <FaArrowRightLong className="opacity-0 w-0 group-hover:opacity-100 group-hover:w-fit" size={14}/>
        </a>
    )
}