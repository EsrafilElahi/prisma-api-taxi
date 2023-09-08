const prisma = require("./prisma");


const createPassenger = async () => {
  const article = await prisma.user.create({
    data: {
      ...info,
      slug,
      authorUsername,
      tagList: { connect: tagList },
    },
    include: {
      author: { include: { followedBy: true } },
      tagList: true,
      _count: { select: { favoritedBy: true } },
    },
  });
  return article;
}

module.exports = createPassenger