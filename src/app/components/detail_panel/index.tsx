import { useEffect, useMemo, useRef } from "react";
import { TbDots, TbShare2 } from "react-icons/tb";
import { toast } from "react-toastify";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { createCalendar, selectCalendarStatus } from "@/libs/redux";
import { authorize } from "@/libs/utils";

import { ProgressPopupMethods, UetBtn, UetBtnIcon, UetProgressPopup, UetTab } from "@ui";

import DetailTab from "./components/detail_tab";
import SettingsTab from "./components/settings_tab";

export default function DetailPanel() {
    const ref = useRef<ProgressPopupMethods>(null);
    const dispatch = useAppDispatch();
    const { isDone, message, status } = useAppSelector(selectCalendarStatus);

    useEffect(() => {
        if (status === "fulfilled") toast.success(message);
        else if (status === "rejected") toast.error(message);
    }, [message]);

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
        } catch {
            toast.error("Unable authorization");
        }
    }

    function test(){
        ref?.current?.open();
    }

    return (
        <div className="relative z-10 mb-16 h-fit w-1/2 rounded-2xl bg-white shadow-2xl">
            <UetTab
                data={tabData}
                tabHeaderComponent={
                    <div className="flex flex-row gap-2">
                        <UetBtnIcon icon={TbDots} />
                        <UetBtnIcon icon={TbShare2} onClick={test}/>
                        <UetBtn
                            title="Create"
                            onClick={handleCalendarCreate}
                            disabled={!isDone}
                        />
                    </div>
                }
            />

            <UetProgressPopup ref={ref} />
        </div>
    );
}
