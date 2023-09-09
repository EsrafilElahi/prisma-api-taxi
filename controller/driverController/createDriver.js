const prisma = require("../../prisma");


const createDriver = async (req, res, next) => {
  try {
    console.log(req.body);

    // check driver exist
    const driver = await prisma.driver.findUnique({
      where: {
        email: req.body.email
      }
    })

    if (driver) {
      return res.json({ message: "driver already exists", status: 409 })
    }

    const newDriver = await prisma.driver.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        vehicle: req.body.vehicle,
      },
    });

    return res.json({ message: "user created successfully", status: 201, driver: newDriver })
  } catch (error) {
    return res.json({ error: 'server error', status: 500, error: error })
  }
}

module.exports = createDriver


// https://github.com/SeuRonao/realworld-express-prisma/blob/main/src/utils/db/article/articleListPrisma.ts
