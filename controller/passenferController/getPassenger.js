const prisma = require("./prisma");


const getPassenger = async () => {
  const passenger = await prisma.user.findMany();
  return passenger;
}

const getPassengers = async () => {
  const passengers = await prisma.user.findMany();
  return passengers;
}

module.exports = { getPassenger, getPassengers }