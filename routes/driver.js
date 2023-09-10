const { Router } = require("express");
const driverController = require("../controller/driverController/index");

const router = Router();


router.get("/", driverController.getDrivers);
router.get("/:driverId", driverController.getDriver);
router.post("/", driverController.createDriver);
router.delete("/:driverId", driverController.deleteDriver);
router.put("/:driverId", driverController.updateDriver);

module.exports = router;