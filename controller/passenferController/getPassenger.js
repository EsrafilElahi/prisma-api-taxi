const prisma = require("../../prisma");


const getPassenger = async (req, res, next) => {
  try {
    const passengerId = req.params.passengerId;

    const passenger = await prisma.passenger.findUnique({
      where: {
        id: Number(passengerId)
      }
    })

    // check passenger exists
    if (!passenger) {
      return res.json({ message: "Passenger not found", status: 404 })
    }

    return res.json({ message: "passenger successfully found", status: 200, passenger: passenger })

  } catch (error) {
    return res.json({ message: "server error", status: 500, error: error })
  }
}

const getPassengers = async (req, res, next) => {
  try {
    const passengers = await prisma.passenger.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        profile: true,
        trips: true,
      }
    })

    // check passengers exist
    if (!passengers) {
      return res.json({ message: "passengers not found", status: 404 })
    }

    return res.json({ message: "passengers successfully found", status: 200, passengers, passengers })

  } catch (error) {
    return res.json({ message: "server error", status: 500, error: error })
  }
}

module.exports = { getPassenger, getPassengers }