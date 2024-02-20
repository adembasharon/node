const router=require("express").Router()
const Items=require("../model/items")

router.post("/items", async(req,res)=>{
const newItem=new Items({
itemImage:req.body.itemImage,
itemName:req.body.itemName,
itemTitle:req.body.itemTitle,
itemDescription:req.body.itemDescription,
})
console.log(newItem)

try {
    const addedPost=await newItem.save()
    console.log(newItem)
    res.status(201).json(addedPost)
    
} catch (error) {
    res.status(404).json(error)

}



})
module.exports=router;
