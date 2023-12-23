import React from "react"



const Button = ({ text, link, wallet, onClick,target, classes, imageClass, }) => {
    return (
        <div className="" >
            <a href={`${link}` } target={target}>
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