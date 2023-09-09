const prisma = require("../../prisma");


const getDriver = async (req, res, next) => {
  try {
    const driverId = req.params.driverId;

    const driver = await prisma.driver.findUnique({
      where: {
        id: Number(driverId)
      }
    });

    // check driver exist
    if (!driver) {
      return res.json({ message: "driver not found", status: 404 })
    }

    return res.json({ message: "driver found successfully", status: 200, driver: driver })
  } catch (error) {
    return res.json({ message: "server error", status: 500, error: error })
  }
}

const getDrivers = async (req, res, next) => {
  try {
    const drivers = await prisma.driver.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        profile: true,
        trips: true,
        vehicle: true,
      }
    });

    // check driver exist
    if (!drivers) {
      return res.json({ message: "drivers not found", status: 404 })
    }

    return res.json({ message: "drivers", status: 200, drivers: drivers })

  } catch (error) {
    return res.json({ message: "server error", status: 500, error: error })
  }

}

module.exports = { getDriver, getDrivers }