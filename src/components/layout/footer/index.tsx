import { useMemo } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TbBrightnessUp, TbHeartFilled, TbMoon } from "react-icons/tb";

import Logo from "@ui/logo";
import NavLink from "@ui/navlink";

import NavSec, { INavSecProps } from "./components/nav_sec";

export default function Footer() {
    const project_section = useMemo(
        () =>
            ({
                title: "Projects",
                links: [
                    { href: "#", title: "Vnutea" },
                    { href: "#", title: "Checkin" },
                    { href: "#", title: "Lunar Date" },
                ],
            }) as INavSecProps,
        [],
    );

    const references_section = useMemo(
        () =>
            ({
                title: "References",
                links: [
                    { href: "#", title: "UET Tkb" },
                    { href: "#", title: "UET qldt" },
                ],
            }) as INavSecProps,
        [],
    );

    const explore_section = useMemo(
        () =>
            ({
                title: "Explore",
                links: [
                    { href: "#", title: "Home" },
                    { href: "#", title: "Guideline" },
                    { href: "#", title: "Changelog" },
                ],
            }) as INavSecProps,
        [],
    );

    return (
        <footer className="bg-primary py-10">
            <div className="container mx-auto">
                <section className="flex flex-row items-start justify-between">
                    <div className="w-1/3 mb-5">
                        <Logo mode="white" />
                        <p className="text-white font-light">
                            Easily browsing, modifying, creating tour own
                            calendar and more with UET students. It is
                            completely free and no sign-up required
                        </p>
                    </div>

                    <div className="grid grid-cols-12 w-1/2">
                        <NavSec {...project_section} />
                        <NavSec {...references_section} />
                        <NavSec {...explore_section} />
                    </div>
                </section>

                <section>
                    <p className="text-white mb-1 font-light text-sm inline-flex items-center">
                        {"@" +
                            new Date().getFullYear() +
                            ", NghiaDT made with love"}{" "}
                        <span>
                            <TbHeartFilled
                                size={14}
                                color="red"
                                className="ml-1"
                            />
                        </span>
                    </p>
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row gap-1">
                            <NavLink href="#" mode="white" icon={FaGithub} />
                            <div className="border-l border-white/20"></div>
                            <NavLink href="#" mode="white" icon={FaFacebook} />
                            <NavLink href="#" mode="white" icon={FaLinkedin} />
                            <NavLink href="#" mode="white" icon={SiGmail} />
                        </div>

                        <div className="flex items-center gap-5">
                            <button>
                                <TbBrightnessUp size={20} color="white" />
                            </button>
                            <button>
                                <TbMoon size={20} color="white" />
                            </button>

                            <button className="text-white">Vi</button>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
}
