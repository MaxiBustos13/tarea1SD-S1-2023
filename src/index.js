const express = require("express");
const axios = require("axios");
const { createClient } = require("redis");
const responseTime = require("response-time");

const app = express();

// Connecting to redis
const client = createClient({url: 'redis://127.0.0.1:6379'});

const client2 = createClient({url: 'redis://127.0.0.1:6380'});

const client3 = createClient({url: 'redis://127.0.0.1:6381'});

app.use(responseTime());

app.get("/character/:id", async (req, res, next) => {
    if (req.params.id < 275) {
        try {
            const reply = await client.get(req.params.id);

            if (reply) {
                console.log("using cached data");
                return res.send(JSON.parse(reply));
            }

            const response = await axios.get(
                "https://rickandmortyapi.com/api/character/" + req.params.id
            );
            const saveResult = await client.set(
                req.params.id,
                JSON.stringify(response.data),
                {
                    EX: 60,
                }
            );

            console.log("saved data:", saveResult);

            res.send(response.data);
        } catch (error) {
            console.log(error);
            res.send(error.message);
        }
    } else if (req.params.id >= 275 && req.params.id < 550 ) {
        try {
            const reply = await client2.get(req.params.id);

            if (reply) {
                console.log("using cached data");
                return res.send(JSON.parse(reply));
            }

            const response = await axios.get(
                "https://rickandmortyapi.com/api/character/" + req.params.id
            );
            const saveResult = await client2.set(
                req.params.id,
                JSON.stringify(response.data),
                {
                    EX: 60,
                }
            );

            console.log("saved data:", saveResult);

            res.send(response.data);
        } catch (error) {
            console.log(error);
            res.send(error.message);
        }
    } else {
        try {
            const reply = await client3.get(req.params.id);

            if (reply) {
                console.log("using cached data");
                return res.send(JSON.parse(reply));
            }

            const response = await axios.get(
                "https://rickandmortyapi.com/api/character/" + req.params.id
            );
            const saveResult = await client3.set(
                req.params.id,
                JSON.stringify(response.data),
                {
                    EX: 60,
                }
            );

            console.log("saved data:", saveResult);

            res.send(response.data);
        } catch (error) {
            console.log(error);
            res.send(error.message);
        }
    }
});


async function main() {
    await client.connect();
    await client2.connect();
    await client3.connect();
    app.listen(3000);
    console.log("server listen on port 3000");
}

main();