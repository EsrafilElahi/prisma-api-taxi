const { Router } = require("express");
const tripController = require("../controller/tripController/index");

const router = Router();


router.get("/", tripController.getTrips);
router.get("/:tripId", tripController.getTrip);
router.post("/", tripController.createTrip);

module.exports = router;