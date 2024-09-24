import TabHeader from "@/components/ui/tab/components/tab_header";

import BrowsingPanel from "./components/browsing_panel";

export default function SearchPanel() {
    return (
        <div className="lg:3/4 relative z-10 mx-auto mt-10 flex h-96 w-full flex-col rounded-xl bg-white shadow-2xl md:w-4/5 xl:w-1/2">
            <TabHeader tabTitle={["Browsing"]} />
            <BrowsingPanel />
        </div>
    );
}
