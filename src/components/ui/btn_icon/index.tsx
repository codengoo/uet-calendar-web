import { IconType } from "react-icons";

interface UetBtnIconProps {
    icon: IconType;
    onClick?: () => void;
}
export default function UetBtnIcon({ icon: Icon, onClick }: UetBtnIconProps) {
    return (
        <div className="cursor-pointer w-10 h-10 rounded-md bg-primary/5 hover:bg-primary/20 flex justify-center items-center">
            <Icon size={22} className="text-primary "/>
        </div>
    );
}
