import GlobalContext from './GlobalContext';
import {actions, globalReducer} from '../Reducer/GlobalReducer'
import {useReducer, useEffect} from 'react';

//import resumeInformation from '../components/common/data/resumeInformation'
//pageData: resumeInformation
import siteContent from '../Data/SiteContent'
const initialState = {
  content: siteContent
};

const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(globalReducer, initialState)
  let {content} = state
  return(
    <GlobalContext.Provider value = {{state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider;
