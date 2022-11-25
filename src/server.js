/*아래 네줄이 서버를 만드는 것!*/
import express from "express";  /*import하지 않으면 express를 쓸 수 없음*/
import morgan from "morgan";
import session from "express-session";
import flash from "express-flash";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import apiRouter from "./routers/apiRouter";
import videoRouter from "./routers/videoRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(session({
    secret:process.env.COOKIE_SECRET,
    resave:false,
    saveUninitialized:false,
    store:MongoStore.create({mongoUrl:process.env.DB_URL})
})
);

app.use(flash());
app.use(localsMiddleware);
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("assets"));
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/api", apiRouter);

/*middleware를 use 하는게 먼저오고 그 다음에 url의 get이 와야함*/
/* () => 이건 함수를 보내는 역할을 함 이게 없으면 실행이 되지 않기 때문에 꼭 필요함
const handleHome = (req, res) => console.log("someone is trying to go home.")
app.get("/",handleHome) 누군가가 어떤 route로 get request를 보낸다면 그거에 반응하는　callback(함수)을 추가. button.addEventListener("click", handleClick)와 같음 주석 위에 있는 걸 inner function이라고 하는데 이건 이 위 두줄과 같음*/

export default app;