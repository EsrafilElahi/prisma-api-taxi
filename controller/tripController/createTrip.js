const prisma = require("./prisma");


const createTrip = async () => {
  const trip = await prisma.user.create({
    data: {}
  });
  return trip;
}

module.exports = createTrip