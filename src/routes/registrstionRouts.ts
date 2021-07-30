import { Router} from "express";
import registrationController from "../controllers/RegistrationController";
const router = Router();

router.get("/:id",registrationController.getUserInfo);

export{router};