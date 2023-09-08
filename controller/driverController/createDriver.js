const prisma = require("../../prisma");


const createDriver = async (req, res, next) => {
  const driver = await prisma.driver.create({
    data: {},
  });
  return driver;
}

module.exports = createDriver