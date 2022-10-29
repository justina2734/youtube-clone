/*아래 네줄이 서버를 만드는 것!*/
import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();
const handleHome = (req,res) => res.send("home");
globalRouter.get("/", handleHome);

const userRouter = express.Router();
const handleEditUser = (req, res) => res.send("Edit user");
userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();
const handleWatchVideo = (req, res) => res.send("Watch Video");
videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter)





/*middleware를 use 하는게 먼저오고 그 다음에 url의 get이 와야함*/
/* () => 이건 함수를 보내는 역할을 함 이게 없으면 실행이 되지 않기 때문에 꼭 필요함
const handleHome = (req, res) => console.log("someone is trying to go home.")
app.get("/",handleHome) 주석 위에 있는 걸 inner function이라고 하는데 이건 이 위 두줄과 같음*/

/*윗 줄은 button.addEventListener("click", handleClick); 과 아주 비슷함*/
const handleListening = () => 
    console.log(`Server listening on port http://localhost:${PORT}🧚‍♀️`);

app.listen(PORT, handleListening);
/*또는 위 두줄은 아래 한 줄로 줄일 수 있음
app.listen(4000, () => console.log("Server listening on port 4000🧚‍♀️");*/
