import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

interface UetBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: IconType;
    title: string;
}

export default function UetBtn({
    disabled,
    onClick,
    icon: Icon,
    title,
}: UetBtnProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="group flex cursor-pointer flex-row items-center gap-2 rounded-md bg-primary px-7 py-2 text-white transition-all hover:bg-primary/90 hover:shadow-lg disabled:bg-primary/30 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
            {title}
            {Icon && (
                <Icon
                    color="white"
                    size={12}
                    className="transition-all group-hover:translate-x-1 group-disabled:group-hover:translate-x-0"
                />
            )}
        </button>
    );
}
