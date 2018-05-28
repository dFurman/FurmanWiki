// Define collection and schema for Items
var Article = {
  name: {
    type: String
  },
  price: {
    type: Number
  }
}

module.exports = mongoose.model('Coin', Coin);
