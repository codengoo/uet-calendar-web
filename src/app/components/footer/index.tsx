import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import NavLink from "../navlink";
import { TbBrightnessUp, TbHeartFilled, TbMoon } from "react-icons/tb";
import Logo from "../logo";
import { SiGmail } from "react-icons/si";
import Link from "../link";

export default function Footer() {
    return (
        <footer className="bg-primary py-10">
            <section className="container mx-auto">
                <div className="flex flex-row items-start justify-between">
                    <div className="w-1/3 mb-5">
                        <Logo mode="white" />
                        <p className="text-white font-light">Easily browsing, modifying, creating tour own calendar and more with UET students. It is completely free and no sign-up required</p>
                    </div>

                    <div className="grid grid-cols-12 w-1/2">
                        <div className="col-span-4 flex flex-col items-end">
                            <h1 className="flex flex-col items-end text-white text-xl mb-4 uppercase after:h-1 after:w-4/6 after:bg-white w-fit">Projects </h1>

                            <ul className="flex flex-col items-end">
                                <li><Link href="#" title="Vnutea" /></li>
                                <li><Link href="#" title="Checkin" /></li>
                                <li><Link href="#" title="Lunar Date" /></li>
                            </ul>
                        </div>

                        <div className="col-span-4 flex flex-col items-end">
                            <h1 className="flex flex-col items-end text-white text-xl mb-4 uppercase after:h-1 after:w-4/6 after:bg-white w-fit">References </h1>
                            <ul className="flex flex-col items-end">
                                <li><Link href="#" title="UET Tkb" /></li>
                                <li><Link href="#" title="UET qldt" /></li>
                            </ul>
                        </div>

                        <div className="col-span-4 flex flex-col items-end">
                            <h1 className="flex flex-col items-end text-white text-xl mb-4 uppercase after:h-1 after:w-4/6 after:bg-white w-fit">Explore </h1>
                            <ul className="flex flex-col items-end">
                                <li><Link href="#" title="Home" /></li>
                                <li><Link href="#" title="Guideline" /></li>
                                <li><Link href="#" title="Changelog" /></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="text-white mb-1 font-light text-sm inline-flex items-center">{"@" + (new Date()).getFullYear() + ", NghiaDT made with love"} <span><TbHeartFilled size={14} color="red" className="ml-1" /></span> </p>
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

                            <button className="text-white">
                                Vi
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}