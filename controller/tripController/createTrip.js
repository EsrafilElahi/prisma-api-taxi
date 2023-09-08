const prisma = require("./prisma");


const createTrip = async () => {
  const article = await prisma.user.create({
    data: {}
  });
  return article;
}

module.exports = createTrip