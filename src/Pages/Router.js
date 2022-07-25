import { Routes,Route, Outlet, Link, useSearchParams, useParams } from "react-router-dom";

import Layout from './Layout'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import NavContainer from '../components/Nav/container/NavContainer'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path = '/' element = {<Layout children = {<NavContainer/>} />} >
          <Route index element = {<HomePage />} />
            <Route path = '*' element = {<h1>That Page Does Not Exist</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default Router


/*<Route path = '/about' element = {<AboutContainer />} />
<Route path = '/' element = {<Layout children = {<NavContainer/>} />} >

*/
