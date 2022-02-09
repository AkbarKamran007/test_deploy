import { Request, Response, NextFunction } from "express";
import axiosResponse from "./axiosResponse";
class controller {
  constructor() {}

  // public getResponseStickerV2 = async (req: Request, res: Response) => {
  //   try {
  //     const keyword = req.query.keyword;
  //     if (!!keyword) {
  //       const response: any = await axiosResponse.getSticker(keyword);
  //       // response);

  //       //  console.log(response);

  //       const data = response.data;
  //       if (!!data) {
  //         let myArr = [];
  //         let Body2: any = data.body.stickerList;
  //         console.log(Body2);
  //         if (Body2) {
  //           for (let i = 0; i < Body2.length; i++) {
  //             let myResponse = {
  //               stickerId: Body2[i].stickerId,
  //               artistName: Body2[i].artistName,
  //               keyword: Body2[i].keyword,
  //               imageUrl: Body2[i].stickerImg,
  //               cost: 10,
  //             };

  //             myArr.push(myResponse);
  //           }
  //           res.status(response.status).json({
  //             status: response.status,
  //             statusText: response.statusText,
  //             data: myArr,
  //           });
  //         } else {
  //           res.status(response.status).json({
  //             status: response.status,
  //             statusText: response.statusText,
  //             data: [],
  //           });
  //         }
  //       } else {
  //         res.status(500).json({
  //           status: 1000,
  //           message: "Unable to receive data from the server",

  //           data: [],
  //         });
  //       }
  //     } else {
  //       res.status(401).json({
  //         status: 401,
  //         message: "Invalid",
  //         Error: "No Param",
  //         data: [],
  //       });
  //     }
  //   } catch (error: any) {
  //     res.status(501).json({
  //       status: 9000,
  //       message: "The API key used does not exist",
  //       data: error.message,
  //     });
  //   }
  // };
  public getResponseSticker = async (req: Request, res: Response) => {
    try {
      // const keyword = req.query.keyword;
      // console.log(keyword);

      await axiosResponse.getSticker().then((data) => {
        console.log(data);
        res.status(200).json({
          status: 200,
          statusText: "ok",
          data: data,
        });
      });
    } catch (error: any) {
      res.status(501).json({
        status: 9000,
        message: "The API key used does not exist",
        data: error.message,
      });
    }
  };
}
let controllerSticker = new controller();
export default controllerSticker;
