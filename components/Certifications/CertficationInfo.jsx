import React from "react";

const CertificationInfo = ({ name, link, duration }) => {
    return (
        <>
            <div className="flex flex-row md:items-center tracking-wide items-start justify-start">
                <div className="flex flex-col justify-start items-start">
                    <h1 className="text-2xl font-semibold">{name}</h1>
                    <a className="text-sm font-light text-gray-600" href={link}>Click here to view</a>
                </div>
            </div>
            <div className="font-semibold text-gray-700 hidden md:inline">
                <div className="flex flex-row items-end justify-end">
                    {duration}
                </div>
            </div>
        </>
    )
}

export default CertificationInfo;