const prisma = require("../../prisma");


const createPassenger = async () => {
  const passenger = await prisma.passenger.create({
    data: {}
  });
  return passenger;
}

module.exports = createPassenger