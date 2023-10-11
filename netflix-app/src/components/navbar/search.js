"use client";

import { AiOutlineSearch } from "react-icons/ai";

export default function Search({
  pathName,
  router,
  searchQuery,
  setSearchQuery,
  setPageLoader,
  setShowSearchBar,
}) {
  return <div className="hidden md:flex justify-center text-center  items-center ">
    <div className="bg-[rgba(0,0,0,0.75)] border border-[hsla(0,0%,100%,0.85)] px-4 items-center text-center flex">
        <div className="order-2">
            <input
            name="search"
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            placeholder="Search Movies,TV,Dramas ..."
            className="bg-transparent text-[14px] font-medium h-[34px] px-4 py-2 placeholder:text-[14px] fonr-md text-white outline-none w-[210px]"
            />
        </div>
        <button>
            <AiOutlineSearch onClick={()=>setShowSearchBar(false)}
            className="hidden sm:inline sm:w-6 sm:h-6"
            />
        </button>

    </div>
  </div>
}
