'use client';
import Image from "next/image";
const ExploreBtn = () => {
    return (
        <button
            type="button"
            id="explore-btn"
            className="mx-auto mt-7 flex w-full max-w-md items-center justify-center gap-3 rounded-full border border-gray-800 bg-[#0d141c] px-6 py-4 text-white"
            onClick={() => console.log("Click")}
        >
            <a href="#event" className="flex items-center gap-3">
                <span>Explore Events</span>

                <Image
                    src="/icons/arrow-down.svg"
                    alt="arrow-down"
                    width={24}
                    height={24}
                />
            </a>
        </button>
    )
}

export default ExploreBtn