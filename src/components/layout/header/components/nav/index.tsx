import NavLink from "@/components/ui/navlink";

export default function Nav() {
    return (
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
    );
}
