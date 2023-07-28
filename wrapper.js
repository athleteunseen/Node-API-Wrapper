const RandStatMod = require('./data/randomQuote')

class AthleteUnseen 
{
    constructor(KEY)
    {
        this.API_BASE_ROUTE_VERSION = 1
        this.API_BASE_API_PARAMATER_ROUTE = `/api/v${this.API_BASE_ROUTE_VERSION}`
        this.BASE_ROUTE = `https://athleteunseen.com`
        this.API_CALL_ROUTE = `${this.BASE_ROUTE}${this.API_BASE_API_PARAMATER_ROUTE}`
        this.API_KEY = KEY
    }

    randStat(callback)
    {
        RandStatMod(this)
            .then(response => {
                callback(null, response); 
            })
            .catch(error => {
                callback(error);
            });
    }
}

module.exports = AthleteUnseen

