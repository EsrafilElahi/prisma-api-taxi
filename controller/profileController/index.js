const createProfile = require("./createProfile");
const { getPassengerProfile, getDriverProfile } = require("./getProfile");
const { updateDriverProfile, updatePassengerProfile } = require("./updateProfile");
const deleteProfile = require("./deleteProfile");

module.exports = { createProfile, getPassengerProfile, getDriverProfile, updatePassengerProfile, updateDriverProfile, deleteProfile }