const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    albumId: Number,
    id: Number,
    title: String,
    url: String,
    thumbnailUrl: String
});

module.exports = mongoose.model('Photo', PhotoSchema);//Photo로 저장했을때 복수가 되면자동으로 Photos로 변환되어 저장
// module.exports = mongoose.model('Photo', PhotoSchema, 'Photo',);    //3번째 매개변수로 collections를 지정하면 이름 고정