import React from 'react';
import ProjectCard from "@/app/component/ProjectCard";

const Projects = ({projects}) => {
    return (
        <div id="project" className="flex flex-col justify-center p-3 py-16  bg-purple-300  items-center">
         <h2 className="font-extrabold text-4xl pb-5">
             My projects
         </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10" >{
                projects.map((item)=>(

                        <ProjectCard project={item} key={item.id} />
                    ))
            }
            </div>
        </div>
    );
};

export default Projects;