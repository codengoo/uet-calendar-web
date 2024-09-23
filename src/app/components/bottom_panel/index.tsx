import { FaArrowRightLong } from "react-icons/fa6";

interface IBottomPanel {
    onClick: () => void;
}
export default function BottomPanel({ onClick }: IBottomPanel) {
    return (
        <div>
            <div className="flex flex-row justify-end gap-5 border-t border-gray-100 px-5 py-5">
                <div className="flex items-center justify-center rounded-md bg-blue-50 px-7 py-2 text-sm font-light text-blue-400">
                    Fetching ...
                </div>

                <button
                    onClick={onClick}
                    className="group flex cursor-pointer flex-row items-center gap-2 rounded-md bg-primary px-7 py-2 text-white transition-all hover:-translate-y-1 hover:bg-primary/90 hover:shadow-lg disabled:bg-primary/30 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                    Explore data
                    <FaArrowRightLong
                        color="white"
                        size={12}
                        className="transition-all group-hover:translate-x-1 group-disabled:group-hover:translate-x-0"
                    />
                </button>
            </div>
        </div>
    );
}
