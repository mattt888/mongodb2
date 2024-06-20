const {MongoClient} = require('mongodb')
const express = require('express')
const app = express()
const crud = require('./db/crud.js')
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

const client = new MongoClient('mongodb://127.0.0.1:27017')

async function Main() {
    
    await client.connect()
    const db = client.db('mongodb7_2')

    app.get('/register', (req, res) => {
        res.render('register')
    })
    .post('/register', (req,res) => {
 
        /* 222

        */
        const sentData = req.body

        let tomb = []
       
        for( i = 0; i < sentData.name.length; i++) {
            let obj = {}
            obj.name = sentData.name[i]
            obj.email = sentData.email[i]
            tomb.push(obj)
        }

        //return res.json(tomb)
        const collection = db.collection('users')
        console.log('req.body:', req.body)
        // createMany  || tomb
        crud.createMany(tomb, collection).then( function(result) {
            res.json(result)
        })
    })
    .listen(3000)
}

Main().catch(err => console.log(err.stack))
