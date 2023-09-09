const prisma = require("../../prisma");


const createTrip = async (req, res, next) => {
  try {
    console.log(req.body)
    // check trip exists
    const trip = await prisma.trip.findUnique({
      where: {
        id: req.body.id
      }
    })

    
    if (trip) {
      return res.json({ message: "trip already exists", status: 409 })
    }
    
    const newTrip = await prisma.trip.create({
      data: {
        id: req.body.id,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        price: req.body.price
      }
    })
    
    console.log('newTrip :', newTrip)
    return res.json({ message: "trip successfully created", status: 201, trip: newTrip })

  } catch (error) {
    return res.json({ error: 'server error', status: 500, error: error })
  }
}

module.exports = createTrip