const mongoose =require("mongoose")
const Produit =require('../Model/ProduitModel')


const AjouterProduit = async (req, res) => {
    const nomproduit = req.body.nomproduit;
    const descriptionproduit = req.body.descriptionproduit;
    const prix = req.body.prix;
    const imageproduit = req.file ? req.file.path : '';
    const sexe=req.body.sexe
    const typeproduit=req.body.typeproduit
    const tailleproduit=req.body.tailleproduit
    const nombre=req.body.nombre
    const natureproduit=req.body.natureproduit

    try {
      const produit = await Produit.create({
         nomproduit:nomproduit, 
         descriptionproduit:descriptionproduit,
         natureproduit:natureproduit,
         imageproduit:imageproduit,
         nombre:nombre,
         prix: prix, 
         sexe:sexe,
         typeproduit:typeproduit,
         tailleproduit:tailleproduit,
         
        });
      res.status(200).json(produit);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: 'Evenement invalide' });
    }
  };

  //Get All Product
const AllProduct =async (req,res)=>{

  const product =await Produit.find({})
  if(!product){
    return res.status(400).json("erreur du produit")

  }
  console.log(product);
  return res.status(200).json(product)
}
const singleProduct =async (req,res)=>{
  const {id}=req.params

  const product =await Produit.find({_id:id})
  if(!product){
    return res.status(400).json("erreur du produit")

  }
  console.log(product)
  return res.status(200).json(product)
}

// const UpdateProduct=async (req,res)=>{
//   const {id}=req.params
//   const imageproduit= req.file ? req.file.path : '';
//   console.log(id)
//   try{
//     const product=await Produit.findByIdAndUpdate({_id:id},{
//       nomproduit:req.body.nomproduit,
//       descriptionproduit:req.body.descriptionproduit,
//       prix:req.body.prix,
//       imageproduit:imageproduit,
//       sexe:req.body.sexe,
//       typeproduit:req.body.typeproduit,
//       tailleproduit:req.body.tailleproduit
//     })
//     if(product){
//       return res.status(200).json(product)
//     }else{
//       return res.status(400).json(error)
//     }
//   }catch{
//     return res.status(500).json(error)
//   }
// }
// const UpdateProduct = async (req, res) => {
//   console.log(req.body)
//   const { id } = req.params;
//   const imageproduit =  req.file.path;

//   try {
//     const updatedProduct = await Produit.findByIdAndUpdate(
//       { _id: id },
//       {
//         nomproduit: req.body.nomproduit,
//         descriptionproduit: req.body.descriptionproduit,
//         prix: req.body.prix,
//         imageproduit: imageproduit,
//         sexe: req.body.sexe,
//         typeproduit: req.body.typeproduit,
//         tailleproduit: req.body.tailleproduit,
//       },
//       { new: true } // To return the updated product
//     );

//     if (updatedProduct) {
//       return res.status(200).json(updatedProduct);
//     } else {
//       return res.status(400).json({ error: 'Product not found' });
//     }
//   } catch (error) {
//     return res.status(500).json({ error: 'Server error' });
//   }
// };
const UpdateProduct = async (req, res) => {
  console.log(req.body)
  const { id } = req.params;
  
  try {
    let imageproduit = '';
    
    if (req.file && req.file.path) {
      imageproduit = req.file.path;
    }

    const updatedProduct = await Produit.findByIdAndUpdate(
      { _id: id },
      {
        nomproduit: req.body.nomproduit,
        descriptionproduit: req.body.descriptionproduit,
        prix: req.body.prix,
        imageproduit: imageproduit,
        natureproduit:req.body.natureproduit,
        nombre:req.body.nombre,
        sexe: req.body.sexe,
        typeproduit: req.body.typeproduit,
        tailleproduit: req.body.tailleproduit,
      },
      { new: true } // Pour retourner le produit mis à jour
    );

    if (updatedProduct) {
      return res.status(200).json(updatedProduct);
    } else {
      return res.status(400).json({ error: 'Produit non trouvé' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Erreur du serveur' });
  }
};

const DeleteProduct =async (req,res)=>{
  const {id}=req.params
  try{
    const product=await Produit.findByIdAndDelete({_id:id})
    if(product){
      
      return res.status(200).json(product)
    }else{
      return res.status(400).json(error)
    }
  }catch{
    return res.status(500).json({message:"error"})
  }
}
const ProductChoisie= async (req,res)=>{
const {natureproduit}=req.params
const product =await Produit.find({natureproduit:natureproduit})
if(!product){
  return res.status(400).json("erreur du produit")

}
console.log(product)
return res.status(200).json(product)
}


const SearchProduct = async (req, res) => {
  console.log(req.body)
  try {
    const { searchTerm } = req.body; 
    const produitsTrouves = await Produit.find({
      $or: [
        { nomproduit: { $regex: searchTerm, $options: 'i' } }, // Recherche insensible à la casse
        { descriptionproduit: { $regex: searchTerm, $options: 'i' } },
        { typeproduit: { $regex: searchTerm, $options: 'i' } },
        { tailleproduit: { $regex: searchTerm, $options: 'i' } },
        { natureproduit: { $regex: searchTerm, $options: 'i' } },
        ],
    });
console.log(produitsTrouves)
    res.status(200).json(produitsTrouves);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la recherche de produits' });
  }
};
  module.exports={
    AjouterProduit,
    SearchProduct,
    AllProduct,
    singleProduct,
    UpdateProduct,
    DeleteProduct,
    ProductChoisie,
  }