const { Router } = require("express");
const passengerController = require("../controller/passenferController/index");

const router = Router();


router.get("/", passengerController.getPassengers);
router.get("/:passengerId", passengerController.getPassenger);
router.post("/", passengerController.createPassenger);
router.delete("/:passengerId", passengerController.deletePassenger);

module.exports = router;