import privateAxios from "../api/PrivateAxios";
import axios from "../api/index";
import User from "../models/User";
import Response from '../types/response';

const useUser = () => {
    const findPendingUsers = async (): Promise<Response<User[]>> => {
        try {
            
            const response = await privateAxios.get('/admin/indentity/verification/pending');
            const users = User.plainToInstances(response.data.users)
            const data: Response<User[]> = {
                data: users,
                error: null
            }
            return data;
        } catch (err: any) {
            console.log(err);
            const data: Response<User[]> = {
                data: [],
                error: err.response.data.message
            }
            return data;
        }

    }

    const  findUsers = async (users:string[]): Promise<Response<User[]>> => {
        try {
            const response = await privateAxios.get(`/admin/users?users=${JSON.stringify(users)}`);
            const fetchedUsers = User.plainToInstances(response.data.users)
            const data: Response<User[]> = {
                data: fetchedUsers,
                error: null,
            }
            return data;
        } catch (err: any) {
            console.log(err);
            const data: Response<User[]> = {
                data: [],
                error: err.response.data.message
            }
            return data;
        }

    }
    const updatePendingUserStatus = async (userID: string, body: FormData): Promise<Response<String>> => {
        try {
            await privateAxios.put(`/admin/change/user/verification/status/${userID}`, body, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const data = {
                data: "User status updated successfully",
                error: null
            }
            return data;
        } catch (err: any) {
            console.log(err);
            const data = {
                data: null,
                error: err.response.data.message
            }
            return data;
        }

    }
    const verifyEmail=async()=>{
        try {
            await privateAxios.get(`/client/verify/email`);
            const data = {
                data: "Please enter the code sent to your email",
                error: null
            }
            return data;
        } catch (err: any) {
            console.log(err);
            const data = {
                data: null,
                error: err.response.data.message
            }
            return data;
        }
    }

    const postVerificationCode=async(body:FormData)=>{
        try {
            await privateAxios.post(`/client/check/email/verification/code`,body,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                
            });
            const data = {
                data: "Email verified successfully",
                error: null
            }
            return data;
        } catch (err: any) {
            console.log(err);
            const data = {
                data: null,
                error: err.response.data.message
            }
            return data;
        }
    }

    const postIdentityConfirmation=async(body:FormData)=>{
        try {
            await privateAxios.post(`/client/identity/confirmation`,body,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }

            });
            const data = {
                data: "Identity is submitted for review",
                error: null
            }
            return data;
        } catch (err: any) {
            console.log(err);
            const data = {
                data: null,
                error: err.response.data.message
            }
            return data;
        }
    }

    return {
        findPendingUsers,
        findUsers,
        updatePendingUserStatus,
        verifyEmail,
        postVerificationCode,
        postIdentityConfirmation
    }

}

export default useUser;