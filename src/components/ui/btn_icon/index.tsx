import { IconType } from "react-icons";

interface UetBtnIconProps {
    icon: IconType;
    onClick?: () => void;
}
export default function UetBtnIcon({ icon: Icon, onClick }: UetBtnIconProps) {
    return (
        <button
            onClick={onClick}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary/5 hover:bg-primary/20"
        >
            <Icon size={22} className="text-primary" />
        </button>
    );
}
