import UetBtn from "@/components/ui/btn";
import { FaArrowRight } from "react-icons/fa6";
import { TbLoader2 } from "react-icons/tb";

interface IBottomPanel {
    onClick: () => void;
    status: string;
    isLoading?: boolean;
    disabled?: boolean;
}
export default function UetBottomTab({
    onClick,
    status,
    isLoading,
    disabled,
}: IBottomPanel) {
    return (
        <div>
            <div className="flex flex-row justify-end gap-5 border-t border-gray-100 px-5 py-5">
                {status && isLoading ? (
                    <div className="flex items-center justify-center rounded-md bg-blue-50 px-7 py-2 text-sm font-light text-blue-400">
                        <TbLoader2 size={16} className="mr-2 animate-spin" />
                        {status}
                    </div>
                ) : null}

                <UetBtn
                    title="Explore data"
                    onClick={onClick}
                    disabled={disabled}
                    icon={FaArrowRight}
                />
            </div>
        </div>
    );
}
