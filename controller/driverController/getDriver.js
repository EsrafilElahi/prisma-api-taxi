const prisma = require("../../prisma");


const getDriver = async () => {
  const driver = await prisma.driver.findFirst({});
  return driver;
}

const getDrivers = async () => {
  const drivers = await prisma.driver.findMany({});

  // driver exist
  if (!drivers) {
    return res.json({ message: "drivers not found", status: 404 })
  }

  return res.json({ message: "drivers", status: 200, drivers: drivers })

}

module.exports = { getDriver, getDrivers }