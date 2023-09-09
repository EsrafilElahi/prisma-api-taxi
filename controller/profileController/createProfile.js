const prisma = require("../../prisma");


const createProfile = async (req, res, next) => {
  try {

    if (req.body.passengerId) {

      // check passenger has a profile or not
      const passengerHasProfile = await prisma.passenger.findUnique({
        where: {
          id: req.body.passengerId,
          profile: {
            passengerId: req.body.passengerId
          }
        }
      });

      if (passengerHasProfile) {
        return res.json({ message: "this passenger has a profile", profile: passengerHasProfile, status: 409 })
      }

      // check passenger exist or not
      const passengerExist = await prisma.passenger.findUnique({
        where: {
          id: req.body.passengerId
        }
      })

      if (!passengerExist) {
        return res.json({ message: "passenger doesn't exist", status: 404 })
      }

      const newProfile = await prisma.profile.create({
        data: {
          location: req.body.location,
          bio: req.body.bio,
          passengerId: req.body.passengerId,
        }
      })

      console.log('newProfile :', newProfile)

      return res.json({ message: "passenger profile successfully created", status: 201, passenger: newProfile })
    }

    if (req.body.driverId) {

      // check driver has a profile or not
      const driverHasProfile = await prisma.driver.findUnique({
        where: {
          id: req.body.driverId,
          profile: {
            driverId: req.body.driverId
          }
        }
      });

      if (driverHasProfile) {
        return res.json({ message: "this driver has a profile", profile: driverHasProfile, status: 409 })
      }

      // check driver exist or not
      const driverExist = await prisma.driver.findUnique({
        where: {
          id: req.body.driverId
        }
      })

      if (!driverExist) {
        return res.json({ message: "driver doesn't exist", status: 404 })
      }


      const newProfile = await prisma.profile.create({
        data: {
          location: req.body.location,
          bio: req.body.bio,
          driverId: req.body.driverId,
        }
      })

      console.log('newProfile :', newProfile)

      return res.json({ message: "driver profile successfully created", status: 201, driver: newProfile })
    }

  } catch (error) {
    return res.json({ error: 'server error', status: 500, error: error })
  }
}

module.exports = createProfile