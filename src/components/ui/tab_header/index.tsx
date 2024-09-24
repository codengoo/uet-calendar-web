import BtnTab from "@/app/components/search_panel/components/btn_tab";

interface ITabHeaderProps {
    hasBottomBorder?: boolean;
    children?: React.ReactNode;
    tabTitle: string[];
    currentTabIndex?: number;
    onChange?: (index: number) => void;
}

export default function TabHeader({
    hasBottomBorder = false,
    children,
    currentTabIndex = 0,
    tabTitle,
    onChange,
}: ITabHeaderProps) {
    function handleChange(index: number) {
        if (index != currentTabIndex) {
            onChange?.(index);
        }
    }
    return (
        <div
            className={
                "flex flex-row justify-between p-5 " +
                (hasBottomBorder ? "border-b border-gray-100" : "")
            }
        >
            <div className="flex flex-row gap-2">
                {tabTitle?.map((tab, index) => (
                    <BtnTab
                        key={tab + index}
                        title={tab}
                        active={index === currentTabIndex}
                        onClick={() => handleChange(index)}
                    />
                ))}
            </div>

            <div className="flex flex-row">{children}</div>
        </div>
    );
}
