const prisma = require("../../prisma");


const getDriver = async () => {
  const driver = await prisma.driver.findFirst({});
  return driver;
}

const getDrivers = async () => {
  const drivers = await prisma.driver.findFirst({});
  return drivers;
}

module.exports = { getDriver, getDrivers }