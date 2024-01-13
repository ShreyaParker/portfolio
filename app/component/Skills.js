import React from 'react';
import Image from 'next/image';

const Skills = ({ skills }) => {
    return (
        <div className="flex flex-col justify-center items-center py-8 sm:py-12 gap-5">
            <div>
                <h1 className="font-extrabold text-4xl hidden sm:block">
                    Skills
                </h1>
            </div>
            <div className="grid lg:grid-cols-8 sm:grid-cols-4 grid-cols-4 sm:gap-24">
                {skills.map((item) => (
                    <div key={item.id} className="flex flex-col items-center justify-center">
                       <div className="h-4/5 px-5 py-2 flex items-center">
                           <Image
                               src={item.image}
                               alt={item.name}
                               width={54}
                               height={30}
                           />
                       </div>
                        <h1 className="block">
                            {item.name}
                        </h1>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Skills;
