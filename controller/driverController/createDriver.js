const prisma = require("../../prisma");


const createDriver = async (req, res, next) => {

  try {
    console.log(req.body);

    // check user exist
    const user = await prisma.driver.findUnique({
      where: {
        email: req.body.email
      }
    })

    console.log('user exists :', user)

    if (user) {
      return res.json({ message: "user already exists", status: 409 })
    }

    const driver = await prisma.driver.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        vehicle: req.body.vehicle,
      },
    });

    return res.json({ message: "user created successfully", status: 201, data: driver })
  } catch (error) {
    return res.json({ error: 'server error', status: 500 })
  }
}

module.exports = createDriver


// https://github.com/SeuRonao/realworld-express-prisma/blob/main/src/utils/db/article/articleListPrisma.ts
