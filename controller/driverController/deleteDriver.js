const prisma = require("../../prisma");


const deleteDriver = async (req, res, next) => {
  try {
    const driverId = req.params.driverId;

    const driver = await prisma.driver.findUnique({
      where: {
        id: Number(driverId)
      }
    });

    // check driver exist
    if (!driver) {
      return res.json({ message: "driver not found", status: 404 })
    }

    const deletedDriver = await prisma.driver.delete({
      where: {
        id: Number(driverId)
      }
    })

    return res.json({ message: "driver deleted successfully", status: 200, deletedDriver: deletedDriver })
  } catch (error) {
    return res.json({ message: "server error", status: 500, error: error })
  }
}


module.exports = deleteDriver