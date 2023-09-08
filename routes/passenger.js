const { Router } = require("express");
const passengerController = require("../controller/passenferController/index");

const router = Router();


router.get("/", passengerController.getPassenger);
router.get("/:passengerId", passengerController.getPassengers);
router.post("/", passengerController.createPassenger);

module.exports = router;