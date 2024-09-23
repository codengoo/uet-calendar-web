import { StoreProvider } from "@libs/redux";

import Headline from "@components/headline";
import Panel from "@components/panel";

export default function Home() {
    return (
        <StoreProvider>
            <section className="container relative mx-auto h-screen w-screen px-5 before:absolute before:left-[50px] before:top-[50px] before:w-full before:bg-[url('/hero-pattern.svg')] after:absolute after:bottom-[50px] after:right-[50px] after:w-full after:bg-[url('/hero-pattern.svg')] sm:before:h-[600px] sm:before:w-[600px] sm:after:h-[600px] sm:after:w-[600px]">
                <Headline />
                <Panel />
            </section>
        </StoreProvider>
    );
}
