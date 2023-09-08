const prisma = require("../../prisma");


const getPassenger = async () => {
  const passenger = await prisma.passenger.findMany({});
  return passenger;
}

const getPassengers = async () => {
  const passengers = await prisma.passenger.findMany({});
  return passengers;
}

module.exports = { getPassenger, getPassengers }