const prisma = require("../../prisma");


const createTrip = async () => {
  const trip = await prisma.trip.create({
    data: {}
  });
  return trip;
}

module.exports = createTrip