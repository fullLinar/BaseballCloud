import axios from "axios";
import StorageServices from "../StorageServices";

class ApiServices {
  axiosInstance = async () => {
    const {
      accessToken,
      client,
      uid,
    } = await StorageServices.getHeadersDataFromStorage();
    let headers = {
      "Access-Control-Expose-Headers": "Access-Token, Uid, Client",
      "Content-Type": "application/json; charset=utf-8",
    };

    if (accessToken) {
      headers = {
        ...headers,
        "Access-Token": accessToken,
        Client: client,
        Uid: uid,
      };
    }

    return axios.create({
      baseURL: "https://baseballcloud-back.herokuapp.com/api/v1",
      headers,
    });
  };
  singIn = async ({ userData }) => {
    try {
      const request = await this.axiosInstance();
      const response = await request.post("/auth/sign_in", userData);
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  singUp = async ({ userData }) => {
    try {
      const request = await this.axiosInstance();
      const response = await request.post("/auth", userData);
      return response;
    } catch (err) {
      throw err;
    }
  };
}

export default new ApiServices();
