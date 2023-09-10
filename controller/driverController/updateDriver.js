const prisma = require("../../prisma");


const updateDriver = async (req, res, next) => {
  try {
    const driverId = req.params.driverId

    // check driver exist
    const driver = await prisma.driver.findUnique({
      where: {
        id: Number(driverId)
      }
    })

    if (!driver) {
      return res.json({ message: "driver doesn't exist", status: 404 })
    }

    const updatedDriver = await prisma.driver.update({
      where: {
        id: Number(driverId)
      },
      data: {
        ...req.body
      },
    });

    return res.json({ message: "driver updated successfully", status: 201, updatedDriver: updatedDriver })
  } catch (error) {
    return res.json({ error: 'server error', status: 500, error: error })
  }
}

module.exports = updateDriver


// https://github.com/SeuRonao/realworld-express-prisma/blob/main/src/utils/db/article/articleListPrisma.ts
