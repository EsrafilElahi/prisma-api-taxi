const prisma = require("../../prisma");


const createDriver = async (req, res, next) => {
  console.log(req);
  
  const driver = await prisma.driver.create({
    data: {},
  });
  return driver;
}

module.exports = createDriver