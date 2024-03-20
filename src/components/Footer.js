
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer h-full">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                <div className="flex flex-[0.25] justify-center items-center">
                    <Link to="/" className="text-white">
                        <span className="px-2 py-1 font-bold text-xl italic">ShareEat</span>
                    </Link>
                </div>

                <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                    <Link to="/donor-listing">
                        <p className="text-white text-base text-center mx-2 cursor-pointer">
                            List food
                        </p>
                    </Link>
                    <Link to="/donor-registration">
                        <p className="text-white text-base text-center mx-2 cursor-pointer">
                            Donor
                        </p> 
                    </Link>
                    <Link to="/ngo-registration">
                        <p className="text-white text-base text-center mx-2 cursor-pointer">
                            NGO
                        </p>
                    </Link>

                   
                    
                </div>

                <div className="flex flex-row justify-center items-center h-20">
               
                    <p className="text-white text-right text-xs relative w-full  right-16 ">
                        &copy;2024 All rights reserved
                    </p>

                    <p className="text-white  text-xs relative w-240 text-center ">
                        Made with ❤️ by DevChef
                    </p>
                    
                </div>
            </div>
        </div>
    )



}

export default Footer