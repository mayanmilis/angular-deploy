const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ItemSchema = new Schema({ 
    name:{  
        type: String,
    },
    id:{
        type: String
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);