const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ub1fi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


// middleware
app.use(express.json());
app.use(cors());


async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const CampaignCollection = client.db('campaignDB').collection('campaigns');
        const DonateCampaignCollection = client.db('campaignDB').collection('DonateCampaigns');

        // add new campaign on the database
        app.post('/addCampaign', async (req, res) => {
            const newCampaign = req.body;
            console.log(newCampaign);
            const result = await CampaignCollection.insertOne(newCampaign);
            res.send(result);
        })

        // get all the campaign on the database
        app.get('/addCampaign', async (req, res) => {
            const cursor = CampaignCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        // delete campaign on the database
        app.delete('/addCampaign/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await CampaignCollection.deleteOne(query);
            res.send(result);
        })

        // get the single campaign for the update on the database
        app.get('/addCampaign/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await CampaignCollection.findOne(query);
            res.send(result);
        })

        // campaign update on the database
        app.put('/addCampaign/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedCampaign = req.body;
            const campaign = {
                $set: {
                    thumbnail: updatedCampaign.thumbnail,
                    title: updatedCampaign.title,
                    option: updatedCampaign.option,
                    description: updatedCampaign.description,
                    amount: updatedCampaign.amount,
                    deadline: updatedCampaign.deadline,
                }
            }
            const result = await CampaignCollection.updateOne(query, campaign, options);
            res.send(result);
        })

        // view single campaign information
        app.get("/campaignInfo/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const campaign = await CampaignCollection.findOne(query);
            res.send(campaign);
        });

        // add donate campaign
        app.post('/campaignInfo', async (req, res) => {
            const newDonateCampaign = req.body;
            console.log(newDonateCampaign);
            const result = await DonateCampaignCollection.insertOne(newDonateCampaign);
            res.send(result);
        })

        // get all the donate campaign on the database
        app.get('/donateCampaign', async (req, res) => {
            const cursor = DonateCampaignCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        // get all the running Campaign on the database
        app.get("/runningCampaigns", async (req, res) => {
            const today = new Date(); // Get the current date
            const campaigns = await CampaignCollection.aggregate([
                {
                    $addFields: {
                        deadlineDate: { $toDate: "$deadline" }, // Convert string to date
                    },
                },
                {
                    $match: {
                        deadlineDate: { $gt: today }, // Compare deadlines greater than today
                    },
                },
                { $limit: 6 }, // Limit to 6 documents
            ]).toArray();
            res.send(campaigns);
        });

        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch {
        // Ensures that the client will close when you finish/error
        console.log("error");
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send("CrownCube server is running");
})

app.listen(port, () => {
    console.log(`CrownCube server is running on port: ${port}`);
})