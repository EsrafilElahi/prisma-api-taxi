const prisma = require("./prisma");


const createPassenger = async () => {
  const passenger = await prisma.user.create({
    data: {}
  });
  return passenger;
}

module.exports = createPassenger