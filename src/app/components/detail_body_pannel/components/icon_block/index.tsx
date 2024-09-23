import { IconType } from "react-icons";

interface IIconBlockProps {
    icon: IconType;
}

export default function IconBlock({ icon: Icon }: IIconBlockProps) {
    return (
        <div className="flex w-24 flex-none items-center justify-center rounded-xl border-2 border-dashed border-primary bg-indigo-100">
            <Icon size={28} className="text-primary" />
        </div>
    );
}
