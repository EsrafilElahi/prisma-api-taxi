const createProfile = require("./createProfile");
const { getPassengerProfile, getDriverProfile } = require("./getProfile");
const { updateDriverProfile, updatePassengerProfile } = require("./updateProfile");

module.exports = { createProfile, getPassengerProfile, getDriverProfile, updatePassengerProfile, updateDriverProfile }