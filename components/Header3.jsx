'use client';

const Header3 = () => {
    return (
        <div className="bg-gradient-to-r from-red-600 to-red-400 h-64">
            <div className="p-5">
                <h2 className="font-bold text-4xl text-center text-white">Over 174,000+ hotels and homes across 35+ countries</h2>
                <div className="grid grid-cols-5 my-5 mx-20">
                    <input type="text" placeholder="Search by city, hotel or neighbourhood" className="h-16 outline-none col-span-2 px-3 text-lg border-r-2 border-gray-400" />
                    <input type="text" placeholder="Search..." className="h-16 outline-none col-span-1 px-3 text-lg border-r-2 border-gray-400" />
                    <input type="text" placeholder="Search..." className="h-16 outline-none col-span-1 px-3 text-lg border-r-2 border-gray-400" />
                    <button type="submit" className="h-16 px-3 py-2 col-span-1 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white font-bold text-xl">Search</button>
                </div>
                <div className="flex mx-20">
                    <button type="submit" className="h-16 px-3 py-2 col-span-1 hover:cursor-pointer font-bold text-sm mr-5 text-white">Continue your search</button>
                    <button type="submit" className="h-16 px-3 py-1 rounded-md text-white col-span-1 hover:cursor-pointer font-bold text-sm mr-5 border-2 border-white hover:bg-gray-500">Inn Coorg Homestay * 2 Guests</button>
                </div>
            </div>
        </div>
    )
}

export default Header3