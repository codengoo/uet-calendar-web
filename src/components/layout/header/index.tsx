import { UetLogo, UetNavLink } from "@ui";
import { TbBrandGithub, TbBrightnessDown, TbMenu } from "react-icons/tb";

import Nav from "./components/nav";

export default function Header() {
    return (
        <div className="flex flex-row items-center justify-between px-10 py-5">
            <UetLogo />

            <div className="flex flex-row items-center">
                <Nav />

                <div className="ml-5 flex flex-row items-center gap-2 border-l-0 border-gray-300 pl-5 md:border-l">
                    <UetNavLink href="#" icon={TbBrandGithub} />
                    <UetNavLink href="#" icon={TbBrightnessDown} />
                    <UetNavLink href="#" title="Vi" />
                    <UetNavLink href="#" icon={TbMenu} />
                </div>
            </div>
        </div>
    );
}
