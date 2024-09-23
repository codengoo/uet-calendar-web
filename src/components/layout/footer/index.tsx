import { useMemo } from "react";
import {
    TbBrandFacebook,
    TbBrandGithub,
    TbBrandGmail,
    TbBrandLinkedin,
    TbBrightnessUp,
    TbHeartFilled,
    TbMoon,
} from "react-icons/tb";

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
            <div className="container mx-auto px-10">
                <section className="flex flex-col md:flex-row items-center md:items-start justify-start md:justify-between mb-10 md:mb-0">
                    <div className="w-full xs:w-2/3 md:w-1/3 mb-10 md:mb-5 flex flex-col items-center md:items-start">
                        <Logo mode="white" className="hidden md:flex" />
                        <Logo
                            mode="white"
                            direction="vertical"
                            className="flex md:hidden"
                        />

                        <p className="text-white font-light text-center md:text-left">
                            Easily browsing, modifying, creating tour own
                            calendar and more with UET students. It is
                            completely free and no sign-up required
                        </p>
                    </div>

                    <div className="grid gap-y-4 xs:gap-y-0 grid-cols-4 xxs:grid-cols-8 xs:grid-cols-12 w-full md:w-3/5 lg:w-1/2">
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
                            <NavLink
                                href="#"
                                mode="white"
                                icon={TbBrandGithub}
                            />
                            <div className="border-l border-white/20"></div>
                            <NavLink
                                href="#"
                                mode="white"
                                icon={TbBrandFacebook}
                            />
                            <NavLink
                                href="#"
                                mode="white"
                                icon={TbBrandLinkedin}
                            />
                            <NavLink
                                href="#"
                                mode="white"
                                icon={TbBrandGmail}
                            />
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
