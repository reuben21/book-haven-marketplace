const { MongoClient } = require('mongodb');

// Connection URI
const uri = "mongodb://root:secret@localhost:27017/admin?retryWrites=true&w=majority";

// Create a client instance, but don't connect yet
let client;

async function connectToDatabase() {
    if (!client) { // Avoid creating multiple connections
        client = new MongoClient(uri);
        await client.connect();
    }
    return client;
}

// Export functions to handle connection and interaction
module.exports = {
    connectToDatabase,
    closeDatabaseConnection: async () => {
        if (client) {
            await client.close();
            client = null; // Clear the client reference
        }
    }
};