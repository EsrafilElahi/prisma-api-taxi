const prisma = require("./prisma");


const createDriver = async () => {
  const driver = await prisma.user.create({
    data: {},
  });
  return driver;
}

module.exports = createDriver