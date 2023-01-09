require('dotenv').config()
const request = require('request')
const convert = require('xml-js')

let bus_key = process.env.bus_key;

const url = 'http://apis.data.go.kr/6260000/BusanBIMS/stopArrByBstopid?serviceKey=' +
    bus_key

request(url, (e, res, body) => {
    const rst = body;
    // console.log(body);
    var xmltoJson = convert.xml2json(rst, { compact: true, spaces: 2 })
    console.log(xmltoJson)
    // const _ = rst.getstopArrByBstopid.body.items.item[3]
    // console.log(`남은도착시간 : ${_.min1}\n 남은정류소 수${_.station1}`)
})

