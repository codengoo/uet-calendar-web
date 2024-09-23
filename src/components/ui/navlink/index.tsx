import { IconType } from "react-icons";

interface INavLinkProps {
    href: string;
    title?: string;
    icon?: IconType,
    mode?: "color" | "white"
}

export default function NavLink({ href, title, icon: Icon, mode = "color" }: INavLinkProps) {
    return (
        <div className={
            "py-1 rounded-lg group " +
            (Icon ? "px-1 " : "px-2 ") +
            (mode === "color" ? "hover:bg-gray-100 " : "hover:bg-gray-100/10")
        }>
            <a href={href} className={"font-normal text-sm " +
                (mode === "color"
                    ? "text-gray-500 group-hover:text-gray-800 "
                    : "text-white/70 group-hover:text-white")
            }>
                {Icon && <Icon size={20} />}
                {title}
            </a>
        </div>
    )
}