import { NavLink } from "react-router-dom";
const NotFound = () => {

    return (
        <>

            <div className="flex flex-col p-5 justify-center h-full items-center gap-5 mb-52 translate-y-36 md:translate-y-24">
                <h1 className="text-6xl md:text-8xl font-bold text-black/85 ">4 <span className="text-primary-color">0</span> 4</h1>
                <p className="text-xl text-gray-500 font-medium">Oops page not found</p>
                <NavLink
                    to="/"
                    className="bg-primary-color hover:bg-secondary-color  w-2/3 md:w-1/4 text-center  text-white px-5 py-3 rounded transition-all md:text-xl"
                >
                    Back to home
                </NavLink>
            </div>


        </>
    );
}
export default NotFound