const mongoose = require ('mongoose');
const ProductSchema = new mongoose.Schema ({

   Name:{ name: String,
    price: Number,
   },

    Price:{ 
        type:Number,
        required:true,
    },

    Quantity:{
        type:Number,
        require:true,
    },

    Description: {
        type:String,
        require:true,
    },  
   



})

module.export = mongoose.model ('Product', ProductSchema);