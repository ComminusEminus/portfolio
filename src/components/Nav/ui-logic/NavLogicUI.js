import GlobalContext from '../../../Provider/GlobalContext'
import findObject from '../../common/helpers/findObject'

import {useEffect, useState, useContext} from 'react'


const useNavLogicUI = () => {
  const {content: {pageData}, dispatch, actions} = useContext(GlobalContext);
  const [navLinks, setNavLinks] = useState('')

  useEffect(() => {
    findObject(pageData, 'navLinks', setNavLinks)
  }, [pageData])
  console.log(navLinks)
  return {navLinks}
}

export default useNavLogicUI;
