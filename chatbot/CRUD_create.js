const chatBot = require('./CRUD_ori.js')
const main = async () => {
    const _data = {
        "key": 1,    //아이유
        "text": "아이유 이쁘다",   //아이유 이쁘다
        "url": "https://cafe.daum.net/IU",    //링크
        "albumId": Image  //이미지
    }
    const new_photo = new Photo(_data);
    const t = await new_photo.save();
    console.log(t)
}

main()