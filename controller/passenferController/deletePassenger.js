const prisma = require("../../prisma");


const deletePassenger = async (req, res, next) => {
  try {
    const passengerId = req.params.passengerId;

    const passenger = await prisma.passenger.findUnique({
      where: {
        id: Number(passengerId)
      }
    });

    // check passenger exist
    if (!passenger) {
      return res.json({ message: "passenger not found", status: 404 })
    }

    const deletedPassenger = await prisma.passenger.delete({
      where: {
        id: Number(passengerId)
      }
    })

    return res.json({ message: "passenger deleted successfully", status: 200, deletedPassenger: deletedPassenger })
  } catch (error) {
    return res.json({ message: "server error", status: 500, error: error })
  }
}


module.exports = deletePassenger