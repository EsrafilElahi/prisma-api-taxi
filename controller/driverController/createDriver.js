const prisma = require("./prisma");


const createDriver = async () => {
  const article = await prisma.user.create({
    data: {},
  });
  return article;
}

module.exports = createDriver