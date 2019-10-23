import { Router } from "express";
import SessionController from "./app/controllers/SessionController";
import StudentController from "./app/controllers/StudentController";
import Auth from "./app/middlewares/auth";

const routes = new Router();

routes.post("/sessions", SessionController.store);
routes.post("/students", Auth, StudentController.store);

export default routes;
