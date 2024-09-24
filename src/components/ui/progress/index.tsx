"use client";

import { CustomFlowbiteTheme, Modal, Progress } from "flowbite-react";
import { forwardRef, useImperativeHandle, useState } from "react";
import { TbLoader2 } from "react-icons/tb";

import { useAppSelector } from "@/hooks";
import { selectCalendarStatus } from "@/libs/redux";

export type ProgressPopupMethods = {
    open: () => void;
    close: () => void;
};

const theme: CustomFlowbiteTheme["modal"] = {
    content: {
        inner: "relative flex max-[200px] flex-col rounded-xl bg-white shadow-xl dark:bg-gray-700",
    },
    body: {
        base: "flex-1 overflow-auto p-2",
    },
};

const progressTheme: CustomFlowbiteTheme["progress"] = {
    base: "w-full overflow-hidden rounded-full bg-primary/30 dark:bg-gray-700",
    color: {
        primary: "bg-primary",
    },
};

const UetProgressPopup = forwardRef<ProgressPopupMethods, any>(
    function (_, ref) {
        const [openModal, setOpenModal] = useState(false);
        const { progress, message } = useAppSelector(selectCalendarStatus);

        useImperativeHandle(ref, () => {
            return {
                open() {
                    setOpenModal(true);
                },

                close() {
                    setOpenModal(false);
                },
            };
        }, []);

        return (
            <Modal show={openModal} theme={theme}>
                <Modal.Body>
                    <div className="space-y-3 rounded-lg border-2 border-dashed border-primary bg-indigo-100 p-5">
                        <div className="flex flex-row gap-2 justify-between">
                            <p className="flex w-fit flex-row items-center gap-2 rounded-md bg-indigo-300 px-3 py-1 text-indigo-500">
                                <TbLoader2
                                    size={20}
                                    className="animate-spin text-indigo-500"
                                />
                                {message}
                            </p>
                            <p className="px-3 py-1 text-indigo-500 rounded-md">{progress} %</p>
                        </div>

                        <Progress
                            theme={progressTheme}
                            progress={50}
                            size="sm"
                            color="primary"
                        />
                    </div>
                </Modal.Body>
            </Modal>
        );
    },
);

export default UetProgressPopup;
