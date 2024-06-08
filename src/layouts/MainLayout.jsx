import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu.jsx/Menu'

function MainLayot() {
  return (
    <>
      <Menu></Menu>
      <Outlet />
    </>
  )
}

export default MainLayot
