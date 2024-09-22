import { FaGithub } from "react-icons/fa";
import { TbBrightnessDown } from "react-icons/tb";

import Logo from "@ui/logo";
import NavLink from "@ui/navlink";

import Nav from "./components/nav";

export default function Header() {
    return (
        <div className="flex flex-row px-10 py-5 justify-between items-center">
            <Logo />

            <div className="flex flex-row items-center">
                <Nav />

                <div className="flex flex-row items-center border-l border-gray-300 ml-5 pl-5 gap-2">
                    <NavLink href="#" icon={FaGithub} />
                    <NavLink href="#" icon={TbBrightnessDown} />
                    <NavLink href="#" title="Vi" />
                </div>
            </div>
        </div>
    );
}
