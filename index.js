'use strict'

const fastify = require('fastify')({logger: true});

function startServer() {
    fastify.listen(30000, function(error, address) {
        if(error) {
            fastify.log.error(error);
            process.exit(1);
        }
    })
}

async function start() {
    try {
        
        // await init();
        startServer();
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
}

start().catch(console.dir);

