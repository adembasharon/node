const mongoose=require("mongoose")

const itemSchema=mongoose.Schema({
    itemImage:{type:String, required:true},
    itemName:{type:String, required:true},
    itemTitle:{type:String, required:true},
    itemDescription:{type:String, required:true},



})

module.exports=mongoose.model("Items",itemSchema)