import express,{Request, Response} from 'express';
import cors from "cors";


const app = express();

const PORT : number = 3006;

app.use(express.json());
app.use(cors());

app.get("/check",(req:Request, res:Response)=>{

     res.json({
        message: "user-bank-sweeper"
    })
})


app.listen(PORT,()=>{
    console.log(`Server is up on port ---${PORT}`);
})

