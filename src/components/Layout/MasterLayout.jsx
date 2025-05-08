import { Outlet } from "react-router"
import Header from "./header"
export function MasterLayout() {
    return (
        <div className='m-5'>
                <Header />
            <main>
                <Outlet />
            </main>
        </div>)
}

