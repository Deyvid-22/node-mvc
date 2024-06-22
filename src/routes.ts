import express from "express";
import CreatUserController from "./controllers/user/CreatUserController";
import ListCustumerController from "./controllers/user/ListCustumerController";
import DeleteUserControlers from "./controllers/user/DeleteUserControlers";

const router = express.Router();


router.post("/user", CreatUserController.handle);
router.get("/", ListCustumerController.getAll);
router.delete("/", DeleteUserControlers.delete)

export {router};