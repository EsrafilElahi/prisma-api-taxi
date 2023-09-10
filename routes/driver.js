const { Router } = require("express");
const driverController = require("../controller/driverController/index");

const router = Router();


router.get("/", driverController.getDrivers);
router.get("/:driverId", driverController.getDriver);
router.post("/", driverController.createDriver);
router.delete("/:driverId", driverController.deleteDriver);

module.exports = router;