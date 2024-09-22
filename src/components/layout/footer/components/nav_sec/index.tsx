import QuickLink, { IQuickLinkProps } from "../quick_link";

export interface INavSecProps {
    title: string;
    links: IQuickLinkProps[];
}

export default function NavSec({ links, title }: INavSecProps) {
    return (
        <div className="col-span-4 flex flex-col items-end">
            <h1 className="flex flex-col items-end text-white text-xl mb-4 uppercase after:h-1 after:w-4/6 after:bg-white w-fit">
                {title}
            </h1>

            <ul className="flex flex-col items-end">
                {links.map((link, index) => (
                    <li key={"link_" + index + link.title}>
                        <QuickLink {...link} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
