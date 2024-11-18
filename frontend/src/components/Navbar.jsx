
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full top-0 left-0">
            <div className="flex flex-wrap justify-between">
            <div className="">
                <h1 className="text-4xl font-bold text-white m-4 ms-10 font-serif"><a href="/">SEO Expert</a></h1>
            </div>
            <div className="p-4 m-2 mr-4 space-x-6 font-bold">
                <Link to={'/service'} className="text-white hover:text-gray-200">Services</Link>
                <Link to={'/project'} className="text-white hover:text-gray-200">Project</Link>
                <Link to={'/contact'} className="text-white hover:text-gray-200">Contact</Link>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;
