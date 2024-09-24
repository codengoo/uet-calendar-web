import { UetNavLink } from "@ui";

export default function Nav() {
    return (
        <nav className="hidden md:block">
            <ul className="flex list-none flex-row gap-5">
                <li>
                    <UetNavLink href="#" title="Home" />
                </li>

                <li>
                    <UetNavLink href="#" title="Guideline" />
                </li>

                <li>
                    <UetNavLink href="#" title="Changelog" />
                </li>
            </ul>
        </nav>
    );
}
