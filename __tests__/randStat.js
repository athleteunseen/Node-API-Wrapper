const AthleteUnseen = require('@athlete-unseen/api-wrapper');

const API_KEY = 'YOUR_API_KEY';
const AthleteUnseenAPI = new AthleteUnseen(API_KEY);

// Fetch random sports statistics and log the result
AthleteUnseenAPI.randStat((error, result) => {
    if (error) {
        console.error('Error fetching random sports statistics:', error);
    } else {
        console.log('Random Sports Statistics:', result['result']);
    }
});