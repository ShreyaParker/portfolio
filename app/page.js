import Header from "@/app/component/Header";
import Skills from "@/app/component/Skills";
import {data} from "@/app/utils/data";
import Projects from "@/app/component/Projects";
import Contact from "@/app/component/Contact";
import Navbar from "@/app/component/Navbar";

export default function Home() {


  return (

      <>
          <Navbar/>
          <Header/>
          <Skills  skills={data.skills}/>
          <Projects projects={data.projects}/>
          <Contact/>
      </>
  )
}
