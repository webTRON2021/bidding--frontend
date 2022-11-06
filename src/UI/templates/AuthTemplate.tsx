import { Outlet } from "react-router-dom"
import Logo from "../molecules/Logo";

export default ()=>{
    return(
        <section className="auth_template_section d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row center w-100">
                    <Logo/>
                    <Outlet/>
                </div>
            </div>
        </section>
    )
}