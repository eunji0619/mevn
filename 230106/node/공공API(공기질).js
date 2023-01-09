require('dotenv').config()
const request = require('request')

let key = process.env.key;

const url = 'http://apis.data.go.kr/6260000/AirQualityInfoService/getAirQualityInfoClassifiedByStation?serviceKey=' +
    key + '&pageNo=1&numOfRows=15&resultType=json'

request(url, (e, res, body) => {
    const rst = JSON.parse(body)
    console.log(rst)
    const _ = rst.getAirQualityInfoClassifiedByStation.body.items.item[3]
    console.log(`====${_}입니다.`)
    console.log(`${_.site}\n일산화탄소 : ${_.co}\n${_.o3}\n${_.pm25}`)
})

