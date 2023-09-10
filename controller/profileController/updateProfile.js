const prisma = require("../../prisma");


const updatePassengerProfile = async (req, res, next) => {
  try {

    const passengerId = req.params.passengerId;

    // check passenger has a profile or not
    const passengerHasProfile = await prisma.passenger.findUnique({
      where: {
        id: Number(passengerId),
        profile: {
          passengerId: Number(passengerId)
        }
      }
    });

    if (!passengerHasProfile) {
      return res.json({ message: "this passenger has not profile", profile: passengerHasProfile, status: 404 })
    }

    // check passenger exist or not
    const passengerExist = await prisma.passenger.findUnique({
      where: {
        id: Number(passengerId)
      }
    })

    if (!passengerExist) {
      return res.json({ message: "passenger doesn't exist", status: 404 })
    }

    const newProfile = await prisma.profile.update({
      data: {
        ...req.body
      }
    })

    console.log('newProfile :', newProfile)

    return res.json({ message: "passenger profile successfully created", status: 201, passenger: newProfile })

  } catch (error) {
    return res.json({ error: 'server error', status: 500, error: error })
  }
}

const updateDriverProfile = async (req, res, next) => {
  try {
    const driverId = req.params.driverId;

    // check driver has a profile or not
    const driverHasProfile = await prisma.driver.findUnique({
      where: {
        id: Number(driverId),
        profile: {
          driverId: Number(driverId)
        }
      }
    });

    if (!driverHasProfile) {
      return res.json({ message: "this driver has not profile", profile: driverHasProfile, status: 404 })
    }

    // check driver exist or not
    const driverExist = await prisma.driver.findUnique({
      where: {
        id: Number(driverId)
      }
    })

    if (!driverExist) {
      return res.json({ message: "driver doesn't exist", status: 404 })
    }


    const newProfile = await prisma.profile.update({
      data: {
        ...req.body
      }
    })

    console.log('newProfile :', newProfile)

    return res.json({ message: "driver profile successfully created", status: 201, driver: newProfile })

  } catch (error) {
    return res.json({ error: 'server error', status: 500, error: error })
  }
}


module.exports = { updatePassengerProfile, updateDriverProfile }