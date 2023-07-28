# AthleteUnseen Node.js API Wrapper

The AthleteUnseen Node.js API Wrapper is a library that allows you to access the AthleteUnseen API and fetch random sports statistics in a simple and straightforward way.

## Installation

You can install the AthleteUnseen Node.js API Wrapper using npm:

```
npm install @athlete-unseen/api-wrapper
```

## Getting Started

To use the AthleteUnseen API Wrapper, you need to sign up for an API key on the [AthleteUnseen website](https://athleteunseen.com) (replace "YOUR_API_KEY" with your actual API key).

```js
const AthleteUnseen = require('@athlete-unseen/api-wrapper');

const API_KEY = 'YOUR_API_KEY';
const AthleteUnseenAPI = new AthleteUnseen(API_KEY);

// Fetch random sports statistics and log the result
AthleteUnseenAPI.randStat((error, result) => {
    if (error) {
        console.error('Error fetching random sports statistics:', error);
    } else {
        console.log('Random Sports Statistics:', result);
    }
});
```

## Methods

### randStat(callback)

This method fetches random sports statistics from the AthleteUnseen API.

- Parameters:
  - ```callback``` (function): A callback function that receives two parameters - ```error``` and ```result```. If the request is successful, ```result``` will contain the random sports statistics as an object. If an error occurs, ```error``` will contain the error details.

## Example

```js
const AthleteUnseen = require('@athlete-unseen/api-wrapper');

const API_KEY = 'YOUR_API_KEY';
const AthleteUnseenAPI = new AthleteUnseen(API_KEY);

// Fetch random sports statistics and log the result
AthleteUnseenAPI.randStat((error, result) => {
    if (error) {
        console.error('Error fetching random sports statistics:', error);
    } else {
        console.log('Random Sports Statistics:', result);
    }
});
```

## Contributing

If you find any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request on [GitHub](https://github.com/athleteunseen/Node-API-Wrapper).

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
