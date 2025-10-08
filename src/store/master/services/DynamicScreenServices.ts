import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "./config/masteraxiosconfig";
import { Dynamic_URL } from "./endpoints/DynamicScreen";


const getPricingList = (): Promise<any> =>
    axiosInstance
        .get(Dynamic_URL.Getpricing)
        .then((response: AxiosResponse<any>) => {

            if (response.status === 200) {
                return response;
            }
            throw new Error("Error getting Data" + response);
        })
        .catch((error: AxiosError | string) => {
            throw error;
        });

const getLibraryList = (): Promise<any> =>
    axiosInstance
        .get(Dynamic_URL.GetLibrary)
        .then((response: AxiosResponse<any>) => {

            if (response.status === 201) {
                return response;
            }
            throw new Error("Error getting Data" + response);
        })
        .catch((error: AxiosError | string) => {
            throw error;
        });

const getTutorialList = (): Promise<any> =>
    axiosInstance
        .get(Dynamic_URL.GetTutorial)
        .then((response: AxiosResponse<any>) => {

            if (response.status === 200) {
                return response;
            }
            throw new Error("Error getting Data" + response);
        })
        .catch((error: AxiosError | string) => {
            throw error;
        });

const getCaseStudiesList = (): Promise<any> =>
    axiosInstance
        .get(Dynamic_URL.GetCaseStudies)
        .then((response: AxiosResponse<any>) => {

            if (response.status === 200) {
                return response;
            }
            throw new Error("Error getting Data" + response);
        })
        .catch((error: AxiosError | string) => {
            throw error;
        });

// const addApplicationParameter = (requestBody: any): Promise<any> =>
//   axiosInstance
//     .post(Dynamic_URL.Getpricing, requestBody)
//     .then((response: AxiosResponse<any>) => {
//       if (response.status === 201) {
//         return response.data;
//       }
//       throw new Error("Error getting Data" + response);
//     })
//     .catch((error: AxiosError | string) => {
//       throw error;
//     });

// const EditApplicationParameter = (requestBody: any): Promise<any> =>
//   axiosInstance
//     .post(Dynamic_URL.Getpricing, requestBody)
//     .then((response: AxiosResponse<any>) => {
//       if (response.status === 201) {
//         return response.data;
//       }
//       throw new Error("Error getting Data" + response);
//     })
//     .catch((error: AxiosError | string) => {
//       throw error;
//     });
// const StatusChangeApplicationParameter = (requestBody: any): Promise<any> =>
//   axiosInstance
//     .post(Dynamic_URL.Getpricing, requestBody)
//     .then((response: AxiosResponse<any>) => {
//       if (response.status === 201) {
//         return response.data;
//       }
//       throw new Error("Error getting Data" + response);
//     })
//     .catch((error: AxiosError | string) => {
//       throw error;
//     });


const DynamicScreenService = {
    getPricingList,
    getLibraryList,
    getTutorialList,
    getCaseStudiesList,
    //   addApplicationParameter,
    //   EditApplicationParameter,
    //   StatusChangeApplicationParameter,
};

export default DynamicScreenService;
