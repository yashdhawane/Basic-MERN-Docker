import { PrismaClient } from "@prisma/client"
import express from "express"
import cors from "cors"

const app = express()
app.use(cors({
    origin: '*',  // Allow all origins for testing
  }));
  
  // Enable CORS with custom options

const prismaClient = new PrismaClient();

app.get("/", async (req, res) => {
   
    const data = await prismaClient.user.findMany();
    res.json({
        data
    })
})

app.post("/", async (req, res) => {

    await prismaClient.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    res.json({
        "message": "post endpoint"
    })
})

app.listen(3001);