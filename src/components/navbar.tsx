import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (

            <header className="shadow text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src={'/next.svg'} alt="logo" width={150} height={40}/>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href={'/'} className="mr-5 hover:text-gray-900">Home</Link>
                    <Link href={'/products'} className="mr-5 hover:text-gray-900">All products</Link>
                    <Link href={'/contact'} className="mr-5 hover:text-gray-900">Contact</Link>
                    </nav>
                    <Link href={'/shopping-cart'}>
                    <button className="text-white inline-flex items-center bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0">Cart
                    <svg fill="none" stroke="currentColor" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </button>
                    </Link>
                </div>
            </header>
    );
}

export default Navbar;