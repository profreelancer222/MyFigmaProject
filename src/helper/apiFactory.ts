/* eslint-disable import/no-anonymous-default-export */
import StringConstant from "./constants";
import axios from "axios";
import isEmpty from "is-empty";
import qs from "qs";

const apiFactory = {
    signUp: (data: { email: string, password: string }) => axios.post(`${process.env.SERVER_IP}/signup`, qs.stringify(data)),
    signIn: (data: { email: string, password: string }) => axios.post(`${process.env.SERVER_IP}/signin`, qs.stringify(data)),
    test: (token: any) => axios.get(`${process.env.SERVER_IP}/test`, { headers: { Authorization: `Bearer ${token}` } }),
    createJob: (data: any, token: any) => axios.post(`${process.env.SERVER_IP}/jobs`, qs.stringify(data), { headers: { Authorization: `Bearer ${token}` } }),
    readJobs: (token: any, page: number, search: string, selected: string) => axios.get(`${process.env.SERVER_IP}/jobs?page=${page}&search=${search}&selected=${selected}`, { headers: { Authorization: `Bearer ${token}` } }),
    updateJob: (_id: any, data: any, token: any) => axios.put(`${process.env.SERVER_IP}/jobs/${_id}`, qs.stringify(data), { headers: { Authorization: `Bearer ${token}` } }),
    deleteJob: (_id: any, token: any) => axios.delete(`${process.env.SERVER_IP}/jobs`, { headers: { Authorization: `Bearer ${token}` } }),
    readJob: (_id: any, token: any) => axios.get(`${process.env.SERVER_IP}/jobs/${_id}`, { headers: { Authorization: `Bearer ${token}` } }),
    getError: (error: any, router: any) => {
        if (!isEmpty(error.response)) {
            switch (error.response.status) {
                case 400:
                case 404:
                    return StringConstant.BAD_REQUEST;
                case 405:
                    return StringConstant.INVALID_DATA;
                case 401:
                case 403:
                    if (router) {
                        router.push("/");
                    }
                    return StringConstant.NEED_AUTH;
                case 409:
                    return StringConstant.ALREADY_EXIST;
                case 500:
                    return StringConstant.SERVER_ERROR;
            }
        } else {
            return StringConstant.CONNECTION_FAILED;
        }
    },
}

export default apiFactory;