const mongoose =require('mongoose')
const User =require('../Model/UserModel')


const SigninUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Recherchez l'utilisateur par son adresse e-mail
      const user = await User.findOne({ email: email });
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      console.log(user )
      // Vérifiez le mot de passe
      if (user.password !== password) {
        return res.status(401).json({ error: "Incorrect password" });
      }
  
      // Si vous voulez envoyer le champ 'typeuser' dans la réponse
      const typeuser = user.typeuser;
      console.log(typeuser);
  
      return res.status(200).json({ email, typeuser });
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
const SignupUser = async (req,res) =>{
    
    const {nom,prenom,datenaiss,email,tel,password,typeuser}= req.body;
      
     try{
        const exists =await User.findOne({email})
        if (exists){
           throw error ('Email used')
        }

         const user =await User.create({nom,prenom,datenaiss,email,tel,password,typeuser});
         console.log(user);

         return res.status(200).json({email})
        }catch(error){
            console.log(error)
            res.status(400).json({error:error.message})

     }


};

const ResetPassword= async (req,res) => {
 
    console.log(req.body)
    const email=req.body.email
    
   const user= await User.findOneAndUpdate({email: email},{...req.body});
   console.log(user)
   if (!user){
   return res.status(400).json({error: 'user introvable'})
 }
 res.status(200).json(user)
 }

 const GetProfile= async (req,res) => {
    const {email}=req.params
 
   


    const user= await User.find({email:email});
    
    if (!user){
    return res.status(400).json({error: 'user introvable'})
}
    res.json({status:200,data:user})

}

 module.exports ={
    ResetPassword,
    SigninUser,
    SignupUser,
    GetProfile
 }