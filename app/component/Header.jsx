import React from 'react';


import Link from "next/link";

const Header = () => {

    return (
        <div className="flex flex-col bg-gray-300 justify-center items-center py-32 xl:py-40 gap-5" id="Header">
            <h1 className="font-extrabold text-center text-5xl">
                Hello,<br className="md:hidden" /> I'm Shreya Parkar

            </h1>
            <h1 className="break-normal text-center w-11/12">
                Aspiring  web developer showcasing a passion for creating seamless and responsive web applications through a dynamic portfolio that reflects proficiency in front-end and back-end technologies
            </h1>
            <Link href={"/#project"}>
                <button className="bg-purple-300 rounded-2xl p-3">
                    Projects
                </button>
            </Link>

        </div>
    );
};

export default Header;