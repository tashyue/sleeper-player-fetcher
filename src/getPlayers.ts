const fs = require('fs').promises;
const path = require('path');

// API URL to fetch NFL players
const apiUrl = 'https://api.sleeper.app/v1/players/nfl';

// Function to fetch the data and save to JSON
const fetchPlayers = async () => {
  try {
    // Fetch the data from the API using the native `fetch` in Node.js
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Define the file path where the JSON will be saved
    const filePath = path.join(__dirname, 'players.json');

    // Save the fetched data into the JSON file
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    console.log('NFL player data saved to players.json');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Run the function immediately when the script is executed
fetchPlayers();
