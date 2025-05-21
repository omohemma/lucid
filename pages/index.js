import {Geist, Geist_Mono} from "next/font/google";
import {useFormulaStore} from "@/store";
import {fetchAllSuggestions} from "@/pages/api";
import {useQuery} from "@tanstack/react-query";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Home() {

    const {input, setInput} = useFormulaStore();

    const {data: allSuggestions = [], isLoading, isError} = useQuery({
        queryKey: ['autocomplete-all'],
        queryFn: fetchAllSuggestions,
        staleTime: 60 * 1000,
    });

    const filteredSuggestions = input
        ? allSuggestions.filter((item) =>
            item.name.toLowerCase().includes(input.toLowerCase())
        )
        : [];

    const handleChange = (e) => setInput(e.target.value);

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
                    {input && (
                        <ul className={`absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-sm max-h-48 overflow-auto ${
                            filteredSuggestions.length > 0 ? 'mt-64' : 'mt-24'
                        }`}>
                            {isLoading && (
                                <li className="px-3 py-2 text-gray-400 text-sm">Loading...</li>
                            )}
                            {isError && (
                                <li className="px-3 py-2 text-red-500 text-sm">Failed to load suggestions</li>
                            )}
                            {filteredSuggestions.map((suggestion) => (
                                <li
                                    key={suggestion.id}
                                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                >
                                    {suggestion.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
