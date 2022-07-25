import SkillsCard from './SkillsCard'



const MapSkills = ({content}) => {
  return(
    <>
      {
        content.map((card) => {
          return(
            <SkillsCard key = {`${card.title}-skills-card`} cardData = {card} />
          )
        })
      }
    </>
  )
}

export default MapSkills;
