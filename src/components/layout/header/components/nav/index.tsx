import NavLink from "@ui/navlink";

export default function Nav() {
    return (
        <nav className="hidden md:block">
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
    );
}
