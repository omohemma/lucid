import {Geist, Geist_Mono} from "next/font/google";
import {useFormulaStore} from "@/store";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Home() {

    const handleChange = (e) => setInput(e.target.value);
    const {input, setInput} = useFormulaStore();
    return (
        <div
            className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
        >
            <div className="relative w-full max-w-md">
                <div className="flex flex-wrap items-center border border-gray-300 p-2 rounded-md gap-1">
                    <input
                        value={input}
                        onChange={handleChange}
                        className="flex-1 outline-none bg-transparent text-sm px-1 py-1"
                        placeholder="Type to search..."
                    />
                </div>
            </div>
        </div>
    );
}
