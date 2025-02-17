const mongoose = require('mongoose');
mongoose.connect ("mongodb+srv://koushikreddys70:koushik1234@database1.ii6lf.mongodb.net/?retryWrites=true&w=majority&appName=Database1")
const RestaurentSchema = new mongoose.Schema ({

    Name:{
        type:String,
        required:true
    },
    ItemsArray: {
        type:Array,
        required:true
    },
    Location:{
        type:String,
        required:true
    }
    
})

module.export = mongoose.model('Restaurent', RestaurentSchema);
