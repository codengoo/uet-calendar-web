import { useMemo } from "react";
import { TbDots, TbShare2 } from "react-icons/tb";
import { toast } from "react-toastify";

import { useAppDispatch } from "@/hooks";
import { createCalendar } from "@/libs/redux";
import { authorize } from "@/libs/utils";

import { UetBtn, UetBtnIcon, UetTab } from "@ui";

import DetailTab from "./components/detail_tab";
import SettingsTab from "./components/settings_tab";

export default function DetailPanel() {
    const dispatch = useAppDispatch();

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

    async function handleCalendarCreate() {
        try {
            const isAuth = await authorize();
            isAuth && dispatch(createCalendar());
        } catch (error) {
            toast.error("Unable authorization");
        }
    }

    return (
        <div className="relative z-10 mb-16 h-fit w-1/2 rounded-2xl bg-white shadow-2xl">
            <UetTab
                data={tabData}
                tabHeaderComponent={
                    <div className="flex flex-row gap-2">
                        <UetBtnIcon icon={TbDots} />
                        <UetBtnIcon icon={TbShare2} />
                        <UetBtn title="Create" onClick={handleCalendarCreate} />
                    </div>
                }
            />
        </div>
    );
}
