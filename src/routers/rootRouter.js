import express from "express";
import {getJoin, postJoin, getLogin, postLogin} from "../controllers/userController";/*default export 를 안쓰면 이런식으로 import 함*/
import {home, search} from "../controllers/videoController";/*../는 지금 있는 폴더에서 벗어난다는 의미, ./는 지금의 장소를 의미*/
import { publicOnlyMiddleware } from "../middlewares";


const rootRouter = express.Router();/*프로젝트에 있는 모든 파일은 분리된 모듈이어서 파일 내에 있는 무언가를 바깥에 공유하기 위해서는 익스포트를 먼저 해줘야함
이 경우에는 여기에 글로벌 라우터를 익스포트 하고 있음*/

rootRouter.get("/", home);
rootRouter.route("/join").all(publicOnlyMiddleware).get(getJoin).post(postJoin);
rootRouter
   .route("/login")
   .all(publicOnlyMiddleware)
   .get(getLogin)
   .post(postLogin);
rootRouter.get("/search", search);

export default rootRouter; /* 이런식으로 디폴트로 익스포트 할때는 내가 원하는 어떤 이름이던지 임포트 가능. 
벗, export const를 하면 실제 이름을 그대로 써야 함*/