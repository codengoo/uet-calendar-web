import { useMemo } from "react";
import Tab from "../search_panel/components/tab";
import DetailTab from "./components/detail_tab";
import SettingsTab from "./components/settings_tab";

export default function DetailPanel() {
    const tabData = useMemo(
        () => [
            {
                body: <DetailTab />,
                title: "Detail",
            },
            {
                body: <SettingsTab />,
                title: "Settings",
            },
        ],
        [],
    );

    return (
        <div className="relative z-10 mb-16 h-fit w-1/2 rounded-2xl bg-white shadow-2xl">
            <Tab data={tabData} />
        </div>
    );
}
