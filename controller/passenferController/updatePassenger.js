const prisma = require("../../prisma");


const updatePassenger = async (req, res, next) => {
  try {
    const passengerId = req.params.passengerId

    // check passenger exist
    const passenger = await prisma.passenger.findUnique({
      where: {
        id: Number(passengerId)
      }
    })

    if (!passenger) {
      return res.json({ message: "passenger doesn't exist", status: 404 })
    }

    const updatedPassenger = await prisma.passenger.update({
      where: {
        id: Number(passengerId)
      },
      data: {
        ...req.body
      },
    });

    return res.json({ message: "passenger updated successfully", status: 201, updatedPassenger: updatedPassenger })
  } catch (error) {
    return res.json({ error: 'server error', status: 500, error: error })
  }
}

module.exports = updatePassenger


// https://github.com/SeuRonao/realworld-express-prisma/blob/main/src/utils/db/article/articleListPrisma.ts
