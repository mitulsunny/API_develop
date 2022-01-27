import { Router} from "express";

//import {validateRegistrationFormSchema, validatePayload} from "../middleware/registrationFormValidator";

import basicAuth from "../middleware/basicAuth";
import registrationController from "../controllers/RegistrationController";
const router = Router();
router.use(basicAuth);

router.route("/registrations").get(registrationController.getUserInfo);
router.route("/registrations").post(
// validateRegistrationFormSchema(),
// validatePayload,
registrationController.registration);

export{router};