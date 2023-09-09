const prisma = require("../../prisma");


const getPassengerProfile = async (req, res, next) => {
  try {
    const passengerId = req.params.passengerId;

    const profile = await prisma.profile.findUnique({
      where: {
        passengerId: Number(passengerId)
      }
    })

    // check profile exists
    if (!profile) {
      return res.json({ message: "profile not found", status: 404 })
    }

    return res.json({ message: "profile successfully found", status: 200, profile: profile })

  } catch (error) {
    return res.json({ message: "server error", status: 500, error: error })
  }
}

const getDriverProfile = async (req, res, next) => {
  try {
    const driverId = req.params.driverId;

    const profile = await prisma.profile.findUnique({
      where: {
        driverId: Number(driverId)
      }
    })

    // check profile exists
    if (!profile) {
      return res.json({ message: "profile not found", status: 404 })
    }

    return res.json({ message: "profile successfully found", status: 200, profile: profile })

  } catch (error) {
    return res.json({ message: "server error", status: 500, error: error })
  }
}


module.exports = { getPassengerProfile, getDriverProfile }