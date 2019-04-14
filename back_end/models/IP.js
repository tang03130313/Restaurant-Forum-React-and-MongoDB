var mongoose = require('mongoose');

var IPSchema = new mongoose.Schema({
  ip: String,
  count: {type: Number, default: 0}
}, {timestamps: true});

// Requires population of author
IPSchema.methods.toJSONFor = function(user){
  return {
    id: this._id,
    ip: this.ip,
    count: this.count,
    time: this.time
  };
};

mongoose.model('IP', IPSchema);
