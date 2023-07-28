let axios = require('axios');

async function randStat(AthleteUnseenConstructor) {
    let callRoute = `${AthleteUnseenConstructor.API_CALL_ROUTE}/random/stat`;
    try {
        const callResponse = await axios(callRoute);
        return callResponse.data; // Directly return the response data
    } catch (error) {
        throw error;
    }
}

module.exports = randStat;
