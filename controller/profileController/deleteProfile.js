const prisma = require("../../prisma");


const deleteProfile = async (req, res, next) => {
  try {
    const profileId = req.params.profileId;

    const profile = await prisma.profile.findUnique({
      where: {
        id: Number(profileId)
      }
    });

    // check profile exist
    if (!profile) {
      return res.json({ message: "profile not found", status: 404 })
    }

    const deletedProfile = await prisma.profile.delete({
      where: {
        id: Number(profileId)
      }
    })

    return res.json({ message: "profile deleted successfully", status: 200, deletedProfile: deleteProfile })
  } catch (error) {
    return res.json({ message: "server error", status: 500, error: error })
  }
}


module.exports = deleteProfile