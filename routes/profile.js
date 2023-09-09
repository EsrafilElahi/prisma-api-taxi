const { Router } = require("express");
const profileController = require("../controller/profileController/index");

const router = Router();


router.get("/:profileId", profileController.getProfile);
router.post("/", profileController.createProfile);

module.exports = router;