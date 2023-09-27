const bodyParser = require('body-parser')
const express =require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const multer =require('multer')
const AuthRouter=require ('./Route/AuthentificationRoutes')
const AdminRouter=require ('./Route/AdminRoutes')
const routerUser=require ('./Route/UserRoutes')

const upload = multer({ dest: 'uploads/' })

const URL='mongodb+srv://imed:Ecommerce1234@cluster0.ra51mkv.mongodb.net/'
mongoose.connect(URL)
    .then(() => console.log( 'Database Connected' ))
    .catch (error => console.log(error));

const   app = express();

app.use(cors({ credentials: true, origin: '*' }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use((req,res,next)=>{
  console.log(req.path,req.method)
  next()
})
app.use('/uploads', express.static('uploads'));

app.use ('/api/Authentification',AuthRouter)
app.use ('/api/Admin',AdminRouter)
app.use ('/api/User',routerUser)

const PORT=4000
app.listen(PORT, ()=>{
    console.log(`Dopee Server running at ${PORT}`);
});
module.exports = app;