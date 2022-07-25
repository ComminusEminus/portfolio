import { Routes,Route, Outlet, Link, useSearchParams, useParams } from "react-router-dom";
import { Suspense, lazy } from 'react';

import NavContainer from '../../components/Nav/container/NavContainer'
import MainPageLayout from '../../components/common/layouts/MainPageLayout'
import HomePageLayout from '../../components/common/layouts/HomePageLayout'
import AboutContainer from '../../components/AboutComponent/container/AboutContainer'
const ProjectContainer = lazy(() => import('../../components/ProjectComponent/container/ProjectContainer'))



const RoutePaths = () => {
  return (
    <>
      <Routes>
        <Route path = '/' element = {<MainPageLayout children = {<NavContainer/>} />} >
          <Route index element = {<HomePageLayout />} />
            <Route path = '/about' element = {<AboutContainer />} />
            <Route path = 'viewprojects/:project' element = {
                <Suspense fallback = {<h1>...Loading</h1>}>
                  <ProjectContainer />
                </Suspense>
              }
            />
            <Route path = '*' element = {<h1>That Page Does Not Exist</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default RoutePaths
