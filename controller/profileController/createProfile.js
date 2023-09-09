const prisma = require("../../prisma");


const createProfile = async (req, res, next) => {
  try {
    // check profile exists
    const profile = await prisma.profile.findUnique({
      where: {
        id: req.body.id
      }
    })

    if (profile) {
      return res.json({ message: "profile already exists", status: 409 })
    }

    let passengerProfile;
    let driverProfile;

    if (req.body.passengerId) {
      passengerProfile = await prisma.passenger.findUnique({
        where: {
          id: req.body.passengerId
        },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        }
      })
    }

    if (req.body.driverId) {
      driverProfile = await prisma.driver.findUnique({
        where: {
          id: req.body.passengerId
        },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        }
      })
    }


    console.log('passengerProfile :', passengerProfile)
    // console.log('driverProfile :', driverProfile)

    const newProfile = await prisma.profile.create({
      data: {
        location: req.body.location,
        bio: req.body.bio,
        passenger: {
          create: {
            name: "passengerProfile.name",
            email: "passengerProfile.email",
          }
        },
        passengerId: passengerProfile.id,
      }
    })

    console.log('newProfile :', newProfile)


    return res.json({ message: "user successfully created", status: 201, passenger: newProfile })

  } catch (error) {
    return res.json({ error: 'server error', status: 500, error: error })
  }
}

module.exports = createProfile