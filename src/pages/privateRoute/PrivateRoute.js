import { Navigate, Outlet } from "react-router-dom"
import DasRightSectionPage from "../../components/admin/dasboardRightSection/DasBoardRightSection"



function PrivateRoute({ component: component, tokenNoti, walletData, services, handleLogout }) {
    const token = window.localStorage.getItem('userIdToken')
    return token ?
        <DasRightSectionPage tokenNoti={tokenNoti} walletData={walletData} PrivateRoute={PrivateRoute} services={services} handleLogout={handleLogout} />

        : <Navigate to='/login-area' />
}
export default PrivateRoute