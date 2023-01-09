const axios = require('axios')  //리퀘스트 용도
const cheerio = require('cheerio')  //선택자로 필요한 정보만 뽑아냄 - 선택자용도

const url = 'https://lol.inven.co.kr/dataninfo/match/champTotal.php?iskin=lol&category=LCK2022&category2=&shipcode=&shipgroup=&teamName=&startDate=&endDate=';

axios.get(url).then((res) => {
    let $ = cheerio.load(res.data)
    let rank = [], champ = [], banpick = [];

    $('.rank').each(function () {
        rank.push($(this).text())
        // console.log($(this).text())
    })
    $('.left').each(function () {
        champ.push($(this).text())
        console.log(champ)
    })
    $('.header headerSortUp').each(function () {
        champ.push($(this).text())
        // console.log($(this).text())
    })
    for (i in champ) {
        console.log(`${rank[i]}(${champ[i]})\n`)
    }
});
