import axios from "axios";

class getStickerResponse {
  constructor() {}

  public getStickerV2 = (keyword: any) => {
    return axios({
      method: "GET",
      url: `https://messenger.stipop.io/v1/search`,
      headers: {
        apikey: "01ef4cb790c4012b63a0e96e4999d8a1",
      },
      params: {
        userId: 9937,
        q: `${keyword}`,
        lang: "en",
        pageNumber: 1,
        limit: 20,
      },
    });
  };

  public getSticker = async () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://messenger.stipop.io/v1/search?userId=1&lang=en&q=3d",
      headers: {
        apikey: "01ef4cb790c4012b63a0e96e4999d8a1",
      },
    };

    return await axios(config)
      .then(function (response: any) {
        // console.log(JSON.stringify(response.data));
        return response.data; // console.log(JSON.stringify(response.data));
      })
      .catch(function (error: any) {
        console.log(JSON.stringify(error.message));
        return error.message;
      });
  };
}

let axiosResponse = new getStickerResponse();
export default axiosResponse;
