// // const express=require("express")
// import express from "express";
// import ChatApi from "../chatAI/ChatApi.js";



// const router = express.Router()


// router.route("/chatApi").post(ChatApi)




// export default router;


import express from "express";
import ChatApi from "../chatAI/ChatApi.js";

const router = express.Router();

router.post("/chat", ChatApi);

export default router;
 