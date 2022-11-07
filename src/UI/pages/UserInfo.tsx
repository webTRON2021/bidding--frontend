
import Images from "../../config/constant/Images";
import useAuth from "../../hooks/useAuth";

const UserInfo = () => {

   const {user} = useAuth(); 
   console.log(user);
  return (
    <section className="userinfo_section">
        <div className="container">
            <div className="row d-flex justify-content-between align-items-center">
                <div className="col-lg-4 col-md-8 col-12">
                    <img src={Images.logo} alt="logo" />
                </div>
                <div className="col-lg-8 col-md-8 col-12">
                    <div className="user_name">
                        Tinjure Supplier
                    </div>
                </div>
                
            </div>
        </div>
        </section>
  )
}

export default UserInfo;