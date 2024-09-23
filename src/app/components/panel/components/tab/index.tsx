import Btn from "@/components/ui/btn/inex";
import BtnIcon from "@/components/ui/btn_icon";
import TabHeader from "@/components/ui/tab_header";
import { ReactNode, useState } from "react";
import { TbDots, TbShare2 } from "react-icons/tb";

interface ITabItem {
    title: string;
    body: ReactNode;
}

interface ITabProps {
    data: ITabItem[];
}

export default function Tab({ data = [] }: ITabProps) {
    const [currIndex, setCurrIndex] = useState(0);

    function handleChange(index: number) {
        setCurrIndex(index);
    }

    return (
        <div>
            <TabHeader
                hasBottomBorder
                tabTitle={data.map((tab) => tab.title)}
                currentTabIndex={currIndex}
                onChange={handleChange}
            >
                <div className="flex flex-row gap-2">
                    <BtnIcon icon={TbDots} />
                    <BtnIcon icon={TbShare2} />
                    <Btn title="Create" />
                </div>
            </TabHeader>
            <div className="w-full">
                {data.map((item, index) => (
                    <div
                        key={item.title + "body" + index}
                        className={
                            "w-full " +
                            (currIndex === index ? "flex" : "hidden")
                        }
                    >
                        {item.body}
                    </div>
                ))}
            </div>
        </div>
    );
}
