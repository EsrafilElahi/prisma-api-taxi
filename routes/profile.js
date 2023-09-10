const { Router } = require("express");
const profileController = require("../controller/profileController/index");

const router = Router();


router.get("/passenger/:passengerId", profileController.getPassengerProfile);
router.get("/driver/:driverId", profileController.getDriverProfile);
router.post("/", profileController.createProfile);
router.put("/passenger/:passengerId", profileController.updatePassengerProfile);
router.put("/driver/:driverId", profileController.updateDriverProfile);


module.exports = router;