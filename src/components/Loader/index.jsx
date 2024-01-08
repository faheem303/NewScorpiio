import React from "react"


import loader from "../../assects/images/loader.gif"


const Loader = () => {

    return (
        <>
            <div className="bg-[#111010] space-y-2 flex h-[100vh] justify-center items-center ">
               <img className="h-[140px] xs:h-[100px]" src={loader} alt="" />
            </div>
        </>
    )
}
export default Loader;