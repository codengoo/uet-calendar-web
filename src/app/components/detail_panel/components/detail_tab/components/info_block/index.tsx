export interface IInfoBlockItem {
    title: string;
    value: string;
    highlight?: boolean;
}

interface IInfoBlockProps {
    data: IInfoBlockItem[];
    calendarMode?: boolean;
    onHover?: () => void;
    refValue?: string;
}

export default function InfoBlock({
    data,
    calendarMode,
    onHover,
    refValue,
}: IInfoBlockProps) {
    return (
        <div
            onMouseEnter={onHover}
            className={
                "w-full rounded-xl border-2 border-dashed p-5 " +
                (calendarMode
                    ? "border-primary/40 bg-primary/5 hover:border-primary hover:bg-primary/15"
                    : "border-primary bg-indigo-100")
            }
        >
            {data.map((item, index) => (
                <div
                    key={item.title + "-" + index}
                    className="flex w-full flex-row items-center justify-between"
                >
                    <span>{item.title}</span>
                    <span
                        className={
                            "rounded-md px-2 text-gray-800 " +
                            (item.highlight ? "bg-indigo-700 text-white" : "")
                        }
                    >
                        {item.value}
                    </span>
                </div>
            ))}
        </div>
    );
}
