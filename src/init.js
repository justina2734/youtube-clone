import "./db"; /*서버를 mongo에 연결*/
import video from "./models/Video";
import app from "./server"

const PORT = 9999;

const handleListening = () => 
    console.log(`Server listening on port http://localhost:${PORT}🧚‍♀️`);

app.listen(PORT, handleListening);
/*또는 위 두줄은 아래 한 줄로 줄일 수 있음
app.listen(4000, () => console.log("Server listening on port 4000🧚‍♀️");*/