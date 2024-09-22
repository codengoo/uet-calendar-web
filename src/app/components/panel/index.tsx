import { FaArrowRightLong } from "react-icons/fa6";

export default function Panel() {
    return (
        <div className="relative z-10 w-1/2 h-96 rounded-xl bg-white shadow-2xl mx-auto mt-10 flex flex-col">
            <div className="p-5">
                <button className="bg-primary/10 rounded-lg px-3 py-1 text-primary">Browsing</button>
            </div>

            <div className="mt-10 flex-grow p-5">
                <div className="border-2 border-dashed border-primary rounded-2xl w-2/3 mx-auto overflow-hidden">
                    <input className="text-primary tracking-[1em] text-2xl font-bold text-center w-full h-full focus:outline-none py-3 bg-primary/5 focus:bg-primary/20 transition-all placeholder:text-primary/50 indent-5" placeholder="21020365" maxLength={8} minLength={8}/>
                </div>
            </div>
            <div className="px-5 py-5 border-t border-gray-100 flex flex-row justify-end gap-5">
                <div className="bg-blue-50 rounded-md px-7 py-2 text-blue-400 font-light text-sm flex justify-center items-center">
                    Fetching ...
                </div>

                <button className="bg-primary px-7 py-2 rounded-md text-white flex flex-row gap-2 items-center group hover:shadow-lg transition-all hover:-translate-y-1 hover:bg-primary/90 disabled:bg-primary/30 cursor-pointer disabled:hover:translate-y-0 disabled:hover:shadow-none">
                    Explore data
                    <FaArrowRightLong color="white" size={12} className="group-hover:translate-x-1 group-disabled:group-hover:translate-x-0 transition-all" />
                </button>
            </div>
        </div>
    )
}