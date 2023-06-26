//kết nối tới MongoDB 
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/thanh', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema; // khai báo và định nghĩa cho một colection

const userSchema = new mongoose.Schema({
  username: String,
  password: String
}, {
    collection:'User'
}
);
//Mongoose tạo một class trong JavaScript mà sẽ đại diện cho collection trong database
const userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;
