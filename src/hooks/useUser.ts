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

    return {
        findPendingUsers,
        updatePendingUserStatus
    }

}

export default useUser;