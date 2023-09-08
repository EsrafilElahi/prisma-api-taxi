import { prisma } from "@prisma";


const createDriver = async () => {
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

module.exports = createDriver