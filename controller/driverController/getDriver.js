const prisma = require("./prisma");


const getDriver = async () => {
  const driver = await prisma.user.findMany();
  return driver;
}

const getDrivers = async () => {
  const drivers = await prisma.user.findMany();
  return drivers;
}

module.exports = { getDriver, getDrivers }