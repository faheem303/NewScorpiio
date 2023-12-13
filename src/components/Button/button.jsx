import React from "react"



const Button = ({ text, link, wallet, onClick, classes, imageClass, }) => {
    return (
        <div className="" >
            <a href={`${link}`}>
            <button onClick={onClick} type="button" className={` ${classes}`}>
                {wallet &&
                    <img className={imageClass} src={wallet} alt="" />
                }
                <span className="">
                    {(text)}
                </span>


            </button>
            </a>

        </div>
    )
}
export default Button;