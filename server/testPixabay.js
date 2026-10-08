require('dotenv').config();
const { searchVideos } = require('./src/services/pixabay/pixabayService');

async function runTest() {
    console.log("Testing Pixabay Search...");
    try {
        const query = "Tokyo night";
        console.log(`Query: "${query}"`);
        
        const results = await searchVideos(query);
        
        if (results.length > 0) {
            console.log(`Found ${results.length} results. First result:`);
            console.log(JSON.stringify(results[0], null, 2));
        } else {
            console.log("No results found.");
        }
    } catch (error) {
        console.error("Test failed:");
        if (error.message.includes('PIXABAY_API_KEY')) {
            console.error("-> Ensure you have a PIXABAY_API_KEY set in server/.env");
        } else {
            console.error(error);
        }
    }
}

runTest();
