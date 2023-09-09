const prisma = require("../../prisma");


const getDriver = async () => {
  const driver = await prisma.driver.findFirst({});
  return driver;
}

const getDrivers = async () => {
  const drivers = await prisma.driver.findMany({});
  
  // driver exist
  
}

module.exports = { getDriver, getDrivers }