import Image from "next/image";
import LogoImg from "@/assets/images/icon-192.png";
import LogoBlack from "@/assets/images/icon-black.png";
import LogoWhite from "@/assets/images/icon-white.png";

interface ILogo {
    mode?: "color" | "white"
}
export default function Logo({ mode = "color" }: ILogo) {
    return (
        <div className="flex flex-row gap-2 items-center">
            {mode === "color"
                ? <Image src={LogoImg} alt="logo" className="h-6 w-6" />
                : <Image src={LogoWhite} alt="logo" className="h-14 w-14" />
            }

            <h1 className={"text-2xl font-semibold " + (mode === "color" ? "text-primary" : "text-white")}>UET calendar</h1>
        </div>
    )
}