import Image from "next/image";
import Block from "./Block";


const Header1 = () => {
    return (

        <div className="flex items-center justify-between px-10 h-16 border-b-2 border-gray-300">
            <Image src={'/logo.png'} alt="logo" width={200} height={200} className="w-24 h-24" />
            <div className="h-full flex">
                <Block title={'Become a Member'} para={'Additional 10% oof on stays.'} />
                <Block title={'Oyo for Business'} para={'Additional 10% oof on stays.'} />
                <Block title={'List your property'} para={'Additional 10% oof on stays.'} />
                <Block title={'8019237822'} para={'Call us to book now.'} />
                <div className="flex items-center px-3">
                    <Image src={'/demo.svg'} alt="demo" width={200} height={200} className="w-10 h-10 rounded-full mr-5" />
                    <h3 className="font-bold cursor-pointer text-gray-900 hover:text-blue-700">Login / Signup</h3>
                </div>

            </div>
        </div>
    )
}

export default Header1;