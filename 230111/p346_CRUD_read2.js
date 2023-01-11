// const { Photo } = require('./p346_CRUD_ori.js')
const Photo = require('./p346_CRUD_ori.js')

const main = async () => {
    const t = await Photo.findOne({
        $or: [
            // {
            //     "title": { $eq: '마마무' }
            // },
            {
                "id": { $eq: 12010 }
            },
            {
                "url": { $eq: "https://naver.com" }
                // , title: 1
            }]
    }).lean()
    console.log(t)
}
main()