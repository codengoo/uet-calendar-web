"use client"

import { ReactNode, useState } from "react";
import TabHeader from "./components/tab_header";

interface ITabItem {
    title: string;
    body: ReactNode;
}

interface UetTabProps {
    data: ITabItem[];
    tabHeaderComponent: ReactNode;
}

export default function UetTab({ data = [], tabHeaderComponent }: UetTabProps) {
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
                {tabHeaderComponent}
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
