import { TbBrightnessDown } from "react-icons/tb";
import NavLink from "../navlink";
import Logo from "../logo";
import { FaGithub } from "react-icons/fa"

export default function Header() {
    return (
        <div className="flex flex-row px-10 py-5 justify-between items-center">
            <Logo />

            <div className="flex flex-row items-center">
                <nav>
                    <ul className="flex flex-row list-none gap-5">
                        <li>
                            <NavLink href="#" title="Home" />
                        </li>

                        <li>
                            <NavLink href="#" title="Guideline" />
                        </li>

                        <li>
                            <NavLink href="#" title="Changelog" />
                        </li>
                    </ul>
                </nav>

                <div className="flex flex-row items-center border-l border-gray-300 ml-5 pl-5 gap-2">
                    <NavLink href="#" icon={FaGithub} />
                    <NavLink href="#" icon={TbBrightnessDown} />
                    <NavLink href="#" title="Vi" />
                </div>
            </div>
        </div>
    )
}