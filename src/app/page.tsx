import Headline from "@components/headline";
import Panel from "@components/panel";

export default function Home() {
  return (
    <div>
      <section className="relative h-screen w-screen container mx-auto before:absolute before:top-[50px] before:left-[50px] before:w-[600px] before:h-[600px] before:bg-[url('/hero-pattern.svg')] after:absolute after:bottom-[50px] after:right-[50px] after:w-[600px] after:h-[600px] after:bg-[url('/hero-pattern.svg')]">
        <Headline />
        <Panel />
      </section>
    </div>
  );
}
