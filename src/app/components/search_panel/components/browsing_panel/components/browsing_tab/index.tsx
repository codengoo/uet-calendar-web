import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IBrowsingBodyPanelProps {
    onTextChange?: Dispatch<SetStateAction<string>> | ((value: string) => void);
    value?: string;
}

export default function BrowsingTab({
    onTextChange,
    value,
}: IBrowsingBodyPanelProps) {
    function onChangeValue(e: ChangeEvent<HTMLInputElement>) {
        onTextChange && onTextChange(e.target.value);
    }

    return (
        <div className="mt-10 flex-grow p-5">
            <div className="mx-auto w-full overflow-hidden rounded-2xl border-2 border-dashed border-primary xs:w-3/4 sm:w-2/3">
                <input
                    className="h-full w-full border-none bg-primary/10 py-3 text-center indent-5 text-2xl font-bold tracking-[1em] text-primary transition-all placeholder:text-primary/50 focus:bg-primary/20 focus:outline-none"
                    type="number"
                    pattern="[0-9]*"
                    placeholder="22025130"
                    maxLength={8}
                    minLength={8}
                    onChange={onChangeValue}
                    value={value}
                />
            </div>
        </div>
    );
}
