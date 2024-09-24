import { UetLogo, UetNavLink } from "@ui";
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
                <section className="mb-10 flex flex-col items-center justify-start md:mb-0 md:flex-row md:items-start md:justify-between">
                    <div className="mb-10 flex w-full flex-col items-center xs:w-2/3 md:mb-5 md:w-1/3 md:items-start">
                        <UetLogo mode="white" className="hidden md:flex" />
                        <UetLogo
                            mode="white"
                            direction="vertical"
                            className="flex md:hidden"
                        />

                        <p className="text-center font-light text-white md:text-left">
                            Easily browsing, modifying, creating tour own
                            calendar and more with UET students. It is
                            completely free and no sign-up required
                        </p>
                    </div>

                    <div className="xxs:grid-cols-8 grid w-full grid-cols-4 gap-y-4 xs:grid-cols-12 xs:gap-y-0 md:w-3/5 lg:w-1/2">
                        <NavSec {...project_section} />
                        <NavSec {...references_section} />
                        <NavSec {...explore_section} />
                    </div>
                </section>

                <section>
                    <p className="mb-1 inline-flex items-center text-sm font-light text-white">
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
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row gap-1">
                            <UetNavLink
                                href="#"
                                mode="white"
                                icon={TbBrandGithub}
                            />
                            <div className="border-l border-white/20"></div>
                            <UetNavLink
                                href="#"
                                mode="white"
                                icon={TbBrandFacebook}
                            />
                            <UetNavLink
                                href="#"
                                mode="white"
                                icon={TbBrandLinkedin}
                            />
                            <UetNavLink
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
