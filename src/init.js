import "regenerator-runtime";
import "dotenv/config";
import "./db"; /*서버를 mongo에 연결*/
import "./models/Video";
import "./models/User";
import "./models/Comment";
import app from "./server"

const PORT = process.env.PORT || 4000;

const handleListening = () => 
    console.log(`Server listening on port http://localhost:${PORT}🧚‍♀️`);

app.listen(PORT, handleListening);
/*또는 위 두줄은 아래 한 줄로 줄일 수 있음
app.listen(4000, () => console.log("Server listening on port 4000🧚‍♀️");*/