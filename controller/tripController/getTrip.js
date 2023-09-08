const prisma = require("../../prisma");


const getTrip = async () => {
  const trip = await prisma.trip.findMany({});
  return trip;
}

const getTrips = async () => {
  const trips = await prisma.trip.findMany({});
  return trips;
}

module.exports = { getTrip, getTrips }