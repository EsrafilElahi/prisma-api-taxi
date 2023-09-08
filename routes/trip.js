const { Router } = require("express");
const tripController = require("../controller/tripController/index");

const router = Router();


router.get("/", tripController.getTrip);
router.get("/:tripId", tripController.getTrips);
router.post("/", tripController.createTrip);

module.exports = router;