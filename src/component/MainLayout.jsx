import {Outlet} from 'react-router-dom';
import AppTitle from './AppTitle';
import Navs from './Navs';
function MainLayout() {
  return (
    <div>
      <Navs/>
      <AppTitle />
      <Outlet/>
    </div>
  )
}

export default MainLayout
