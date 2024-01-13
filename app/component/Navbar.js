import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex sticky top-0 z-50 bg-purple-300 w-full p-5 flex-row">
            <div>
                <Link  className="hover:text-white " href={"/#Header"}>
                    Home
                </Link>
            </div>

            <div className="ml-auto flex gap-2">
                <Link href={"/#contact"}>
                <button className="hover:text-white rounded-2xl">Contact Me</button>
                </Link>
            </div>

        </nav>
    );
};

export default Navbar;