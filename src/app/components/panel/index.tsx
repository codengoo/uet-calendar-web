import BrowsingPanel from "../browsing_panel";

export default function Panel() {
    return (
        <div className="lg:3/4 relative z-10 mx-auto mt-10 flex h-96 w-full flex-col rounded-xl bg-white shadow-2xl md:w-4/5 xl:w-1/2">
            <div className="p-5">
                <button className="rounded-lg bg-primary/10 px-3 py-1 text-primary">
                    Browsing
                </button>
            </div>

            <BrowsingPanel />
        </div>
    );
}
