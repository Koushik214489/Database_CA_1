const mongoose = require ('mongoose');
mongoose.connect ("mongodb+srv://koushikreddys70:koushik1234@database1.ii6lf.mongodb.net/?retryWrites=true&w=majority&appName=Database1")
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