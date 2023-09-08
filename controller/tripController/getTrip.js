const prisma = require("./prisma");


const getTrip = async () => {
  const trip = await prisma.user.findMany();
  return trip;
}

const getTrips = async () => {
  const trips = await prisma.user.findMany();
  return trips;
}

module.exports = { getTrip, getTrips }