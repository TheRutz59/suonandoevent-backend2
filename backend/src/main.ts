import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
app.use(cors({ origin: true, credentials: true }))
app.use(express.json())
app.use(cookieParser())

let items = [{id:1,name:'Impianto Audio',quantity:2},{id:2,name:'Luci LED',quantity:10}]
let bookings = [{id:1,itemId:1,startDate:new Date().toISOString(),endDate:new Date().toISOString()}]

app.post('/auth/login',(req,res)=>{ return res.json({token:'stub-token'}); })
app.get('/inventory',(req,res)=> res.json(items))
app.get('/bookings',(req,res)=> res.json(bookings))

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=> console.log('Backend attivo su',PORT))
