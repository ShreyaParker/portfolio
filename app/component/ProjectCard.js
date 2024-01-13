"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { data } from '@/app/utils/data';

const ProjectCard = ({ project }) => {
    const { name, image, tech, description, hosted, github } = project;

    const [isImageBlurred, setIsImageBlurred] = useState(false);

    const handleMouseEnter = () => {
        setIsImageBlurred(true);
    };

    const handleMouseLeave = () => {
        setIsImageBlurred(false);
    };

    return (
        <div className="bg-gray-300 flex flex-col justify-between rounded-2xl p-3 m-2 relative">
            <div
                className="relative cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Image
                    src={image}
                    alt={name}
                    width={700}
                    height={183}
                    className={`rounded-2xl transition-all duration-500 ${
                        isImageBlurred ? 'filter blur-md' : ''
                    }`}
                    style={{zIndex: isImageBlurred ? 1 : 'auto'}}
                />
                {isImageBlurred && (
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="p-4 flex flex-row rounded-xl">
                            {tech.map((skill, index) => {
                                const matchedSkill = data.skills.find((s) => s.name === skill);

                                return (
                                    <div key={index} className="mr-2 flex justify-center items-center">
                                        <Image
                                            src={matchedSkill ? matchedSkill.image : ''}
                                            alt={skill}
                                            width={129}
                                            height={129}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            <div className="flex px-4 py-2 w-full">
                <h1 className="text-start font-extrabold flex-grow">{name}</h1>
                <div className="space-x-2">
                    {github && (
                        <Link href={github} target="_blank">
                            <button>
                                <Image
                                    src={'/github.1024x998.png'}
                                    alt={'github'}
                                    width={16}
                                    height={14}
                                />
                            </button>
                        </Link>
                    )}

                    <Link href={hosted} target="_blank">
                        <button>
                            <Image src={'/hosted.png'} alt={'hosted'} width={14} height={14}/>
                        </button>
                    </Link>
                </div>
            </div>

            <div className="px-3">
                <p>{description}</p>
            </div>

        </div>
    );
};

export default ProjectCard;
