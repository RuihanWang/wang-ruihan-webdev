module.exports = function() {
    var mongoose = require("mongoose");
    var widgetSchema = mongoose.Schema({

        _page: {type: mongoose.Schema.Types.ObjectId, ref: 'Page'},
        type: {type:String, enum: ['IMAGE','HEADING','HTML','INPUT']},
        name: String,
        text: String,
        placeholder: String,
        description: String,
        url: String,
        width: String,
        height: String,
        rows: Number,
        size: Number,
        class: String,
        icon: String,
        deletable: Boolean,
        formatted: Boolean,
        dateCreated: {type: Date, default: Date.now()},

     
    }, {collection: "widget"});

    return widgetSchema;
};




// _page
// Reference to Page
// Refers to parent page
// type
// String, enum
// ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'INPUT']
// name
// String
//
//
// text
// String
//
//
// placeholder
// String
//
//
// description
// String
//
//
// url
// String
//
//
// width
// String
//
//
// height
// String
//
//
// rows
// Number
//
//
// size
// Number
//
//
// class
// String
//
//
// icon
// String
//
//
// deletable
// Boolean
//
//
// formatted
// Boolean
//
//
// dateCreated
// Date
// Current date
