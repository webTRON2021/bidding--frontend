
import Images from "../../config/constant/Images";
import useAuth from "../../hooks/useAuth";

const UserInfo = () => {

   const {user} = useAuth(); 
   console.log(user);
  return (
    <section className="userinfo_section">
        <div className="container">
            <div className="row d-flex justify-content-between align-items-center">
                <div className="col-lg-4 col-md-8 col-12 user_image">
                    <img src={Images.logo} alt="logo" />
                   <div className="user_status">
                     Status:{user?.info?.status}
                    </div>
                </div>
                <div className="col-lg-8 col-md-8 col-12 user_details">
                    <div className="row user_info">
                        <div className="col-6">
                        FirstName: {user?.info?.firstName}
                        </div>
                        <div className="col-6">
                        LastName: {user?.info?.lastName}
                        </div>
                        <div className="col-6">
                        Sex: {user?.info?.gender}
                        </div>
                        <div className=" col-6">
                        DOB: {user?.info?.dob}
                        </div>
                        <div className="col-6">
                        RecoveryEmail: {user?.info?.recoveryEmail}
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
        </section>
  )
}

export default UserInfo;