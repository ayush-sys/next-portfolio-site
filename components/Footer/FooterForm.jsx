import React from "react";


const FooterForm = () => {
    return (
        <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-gray-50 rounded-lg shadow-2xl lg:max-w-xl shadow-gray-200">
            <h1 className="text-lg font-medium text-gray-700">Drop me a message here !</h1>

            <form className="mt-6">
                <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-600">Full Name</label>
                    <input type="text" placeholder="Tony Stark" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-600">Email address</label>
                    <input type="email" placeholder="ironman@avengers.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="w-full mt-6">
                    <label className="block mb-2 text-sm text-gray-600">Message</label>
                    <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                </div>

                <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default FooterForm;