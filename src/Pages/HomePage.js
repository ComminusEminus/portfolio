import Hero from '../components/Hero/Hero'
import Objective from '../components/Objective/Objective'
import Skills from '../components/Skills/Skills'
import LangLib from '../components/LangLib/LangLib'
import About from '../components/About/About'
import ProjectPreview from '../components/ProjectPreview/ProjectPreview'
import ContactFormContainer from '../components/ContactForm/ContactFormContainer'


const HomePage = () => {
  return(
    <>
      <Hero />
      <Objective />
      <Skills />
      <About />
      <LangLib />
      <ProjectPreview />
      <ContactFormContainer />
    </>
  )
}

export default HomePage
