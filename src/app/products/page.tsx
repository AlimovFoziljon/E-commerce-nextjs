import Product from "@/components/product";
import { ProductType } from "@/interfaces";

const Products = async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    const products: ProductType[] = await res.json()

    return (
        <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-28">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                    Raw Denim Heirloom Man Braid
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                    taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
                    mi pug.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
                    <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                        SHOOTING STARS
                    </h2>
                    <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                        <a>
                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                            <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            >
                            <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>
                        First Link
                        </a>
                        <a>
                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                            <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            >
                            <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>
                        Second Link
                        </a>
                        <a>
                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                            <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            >
                            <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>
                        Third Link
                        </a>
                        <a>
                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                            <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            >
                            <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>
                        Fourth Link
                        </a>
                        <a>
                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                            <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            >
                            <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>
                        Fifth Link
                        </a>
                    </nav>
                    </div>
                    <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
                    <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                        THE 400 BLOWS
                    </h2>
                    <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                        <a>
                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                            <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            >
                            <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>
                        First Link
                        </a>
                        <a>
                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                            <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            >
                            <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>
                        Second Link
                        </a>
                        <a>
                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                            <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            >
                            <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>
                        Third Link
                        </a>
                        <a>
                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                            <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            >
                            <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>
                        Fourth Link
                        </a>
                        <a>
                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                            <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            >
                            <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>
                        Fifth Link
                        </a>
                    </nav>
                    </div>
                    <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
                    <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                        THE CATALYZER
                    </h2>
                    <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                        <a>
                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                            <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            >
                            <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>
                        First Link
                        </a>
                        <a>
                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                            <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            >
                            <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>
                        Second Link
                        </a>
                        <a>
                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                            <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            >
                            <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>
                        Third Link
                        </a>
                        <a>
                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                            <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            >
                            <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>
                        Fourth Link
                        </a>
                        <a>
                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                            <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            >
                            <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>
                        Fifth Link
                        </a>
                    </nav>
                    </div>
                    <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
                    <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                        NEPTUNE
                    </h2>
                    <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                        <a>
                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                            <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            >
                            <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>
                        First Link
                        </a>
                        <a>
                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                            <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            >
                            <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>
                        Second Link
                        </a>
                        <a>
                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                            <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            >
                            <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>
                        Third Link
                        </a>
                        <a>
                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                            <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            >
                            <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>
                        Fourth Link
                        </a>
                        <a>
                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                            <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            >
                            <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>
                        Fifth Link
                        </a>
                    </nav>
                    </div>
                </div>
                <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Button
                </button>
                </div>
            </section>
            <section className="flex flex-col space-y-12">
                <h1 className="text-5xl font-bold text-center">
                All products
                </h1>
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map(product => (
                    <Product key={product.id} product={product}/>
                ))}
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Shooting Stars</h2>
                        <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                        </div>
                    </div>
                    </div>
                    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">The Catalyzer</h2>
                        <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                        </div>
                    </div>
                    </div>
                    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                            <circle cx="12" cy="5" r="3"></circle>
                            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                        </svg>
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">The 400 Blows</h2>
                        <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                        </div>
                    </div>
                    </div>
                    <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">4</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Neptune</h2>
                        <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </main>
    );
}

export default Products;