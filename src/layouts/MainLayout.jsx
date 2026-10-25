import { NavLink, Outlet } from 'react-router-dom'
import './MainLayout.css'

function MainLayout() {
  return (
    <div className="layout">
      <main className="layout-content">
        <Outlet />
      </main>

      <nav className="bottom-nav">
        <NavLink to="/" end>الرئيسية</NavLink>
        <NavLink to="/history">السجل</NavLink>
        <NavLink to="/chat">المساعد</NavLink>
        <NavLink to="/profile">حسابي</NavLink>
      </nav>
    </div>
  )
}

export default MainLayout