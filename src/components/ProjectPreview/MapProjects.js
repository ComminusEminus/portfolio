import ProjectCards from './ProjectCards'



const MapProjects = ({content}) => {
  return(
    <>
      {
        content.map((card) => {
          return(
            <ProjectCards key = {`${card.title}-projects-card`} cardData = {card} />
          )
        })
      }
    </>
  )
}

export default MapProjects;
