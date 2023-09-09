const prisma = require("../../prisma");


const getProfile = async (req, res, next) => {
  try {
    const profileId = req.params.profileId;

    const profile = await prisma.profile.findUnique({
      where: {
        id: Number(profileId)
      }
    })

    // check profile exists
    if (!profile) {
      return res.json({ message: "profile not found", status: 404 })
    }

    return res.json({ message: "profile successfully found", status: 200, profile: profile })

  } catch (error) {
    return res.json({ message: "server error", status: 500, error: error })
  }
}


module.exports = { getProfile }