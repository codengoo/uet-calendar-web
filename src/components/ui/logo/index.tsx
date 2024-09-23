import LogoImg from "@/assets/images/icon-192.png";
import LogoWhite from "@/assets/images/icon-white.png";
import Image from "next/image";

interface ILogoProps {
    mode?: "color" | "white";
    direction?: "vertical" | "horizontal";
    className?: string;
}

export default function Logo({
    mode = "color",
    direction = "horizontal",
    className = "",
}: ILogoProps) {
    return (
        <div
            className={
                "flex gap-2 items-center " +
                (direction === "horizontal" ? "flex-row " : "flex-col ") +
                className
            }
        >
            {mode === "color" ? (
                <Image src={LogoImg} alt="logo" className="h-6 w-6" />
            ) : (
                <Image src={LogoWhite} alt="logo" className="h-14 w-14" />
            )}

            <h1
                className={
                    "text-2xl font-semibold text-nowrap " +
                    (mode === "color" ? "text-primary" : "text-white")
                }
            >
                UET calendar
            </h1>
        </div>
    );
}
