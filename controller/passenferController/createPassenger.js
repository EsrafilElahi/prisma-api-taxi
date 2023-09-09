const prisma = require("../../prisma");


const createPassenger = async (res, req, next) => {
  try {
    const passenger = await prisma.passenger.findUnique({
      where: {
        email: req.body.email
      }
    })

    // passenger exists
    if (passenger) {
      return res.json({ message: "user already exists", status: 409 })
    }

    const newPassenger = await prisma.passenger.create({
      data: {
        name: req.body.name,
        email: req.body.email
      }
    })

    return res.json({ message: "user successfully created", status: 201, passenger: newPassenger })

  } catch (error) {
    return res.json({ message: "server error", status: 500, error: error })
  }
}

module.exports = createPassenger