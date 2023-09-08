const prisma = require("./prisma");


const createPassenger = async () => {
  const article = await prisma.user.create({
    data: {}
  });
  return article;
}

module.exports = createPassenger