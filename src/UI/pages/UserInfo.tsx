import { useState } from "react";
import { toast } from "react-toastify";
import Images from "../../config/constant/Images";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import Button from "../atoms/Button";

const UserInfo = () => {
  const { user, setUser } = useAuth();
  const [isEmailVerifying, setIsEmailVerifying] = useState(false);
  const [isTokenVerifying, setIsTokenVerifying] = useState(false);
  const [isMediaUploading, setIsMediaUploading] = useState(false);

  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showMediaUpload, setShowMediaUpload] = useState(false);

  //   *State to hold user status
  const [userStatus, setUserStatus] = useState(user.info.status);

  const [otpCode, setOtpCode] = useState("");
  console.log("IS medai", user.info.status === "UNVERIFIED");
  const [isEmailVerified, setIsEmailVerified] = useState(
    user.info.status === "VERIFIED"
  );
  const [isMediaUploaded, setIsMediaUploaded] = useState(false);
  const [pwiImage, setPwiImage] = useState<File>();
  const [idImage, setIdImage] = useState<File>();

  // *Hooks
  const { verifyEmail, postVerificationCode, postIdentityConfirmation } =
    useUser();

  const handleEmailVerification = async () => {
    setIsEmailVerifying(true);
    const response = await verifyEmail();
    if (response.error) {
      toast(response.error);
    } else {
      toast(response.data);
      setShowEmailInput(true);
    }
    setIsEmailVerifying(false);
  };
  const handleOTP = async () => {
    setIsTokenVerifying(true);
    const body = new FormData();
    body.append("code", otpCode);
    const response = await postVerificationCode(body);
    if (response.error) {
      toast(response.error);
    } else {
      toast(response.data);
      setShowEmailInput(false);
      setIsEmailVerified(true);
      setShowMediaUpload(true);
    }
    setIsTokenVerifying(false);
  };

  const handleUpload = async () => {
    if (!(pwiImage && idImage)) return;
    setIsMediaUploading(true);
    const body = new FormData();
    body.append("pwiPhoto", pwiImage);
    body.append("identity", idImage);
    const response = await postIdentityConfirmation(body);
    if (response.error) {
      toast(response.error);
    } else {
      toast(response.data);
      setIsMediaUploaded(true);
      setShowMediaUpload(false);
      // Update Status
      setUser({ ...user, info: { ...user.info, status: "UNDER_REVIEW" } });
    }
    setIsMediaUploading(false);
  };

  console.table("Pramesh", user);
  return (
    <>
      <section className="userinfo_section">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-lg-8 col-md-8 col-12 user_details">
              <div className="row user_info">
                <div className="col-6 my-1">
                  FirstName: {user?.info?.firstname}
                </div>
                <div className="col-6">LastName: {user?.info?.lastName}</div>
                <div className="col-6 my-2">Sex: {user?.info?.gender}</div>
                <div className=" col-6">DOB: {user?.info?.dob}</div>
                <div className="col-6">Email: {user?.info?.email}</div>
                <div className="col-6">
                  RecoveryEmail: {user?.info?.recoveryEmail}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-12 user_image">
              <img src={Images.logo} alt="logo" />
              <div className="user_status">Status: {user?.info?.status}</div>
            </div>
            {!isEmailVerified ? (
              <section className="email-verification-status mt-2">
                <div className="d-flex justify-content-center align-items-center flex-column ">
                  <div className="me-2 verify_email">Verify Email</div>
                  {!showEmailInput && (
                    <Button
                      onClick={handleEmailVerification}
                      loading={isEmailVerifying}
                    >
                      Verify
                    </Button>
                  )}
                </div>
                {showEmailInput && (
                  <div className="d-flex justify-content-center">
                    <input
                      type="text"
                      value={otpCode}
                      onChange={(e) => {
                        setOtpCode(e.target.value);
                      }}
                    />
                    <Button onClick={handleOTP} loading={isTokenVerifying}>
                      Submit
                    </Button>
                  </div>
                )}
              </section>
            ) : null}
            {showMediaUpload && (
              <section className="media-upload-status mt-2">
                <h5 className="pb-4">Upload Media</h5>
                <div className="d-flex">
                  <div>
                    <label htmlFor="pwi" className="px-1">
                      <b>Photo With ID</b>
                    </label>
                    <input
                      type="file"
                      id="pwi"
                      onChange={(e) => {
                        if (e.target.files) {
                          setPwiImage(e.target.files[0]);
                        }
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="id" className="px-1">
                      {" "}
                      <b> ID Card </b>
                    </label>
                    <input
                      type="file"
                      id="id"
                      onChange={(e) => {
                        if (e.target.files) {
                          setIdImage(e?.target?.files[0]);
                        }
                      }}
                    />
                  </div>
                  <Button onClick={handleUpload} loading={isMediaUploading}>
                    Submit
                  </Button>
                </div>
              </section>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default UserInfo;
