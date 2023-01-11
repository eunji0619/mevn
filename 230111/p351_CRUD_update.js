const Photo = require('./p346_CRUD_ori.js')
const main = async () => {
    const t = await Photo.updateMany({
        "title": { $eq: '마마무' }
    }, {
        $set: { "url": "http://daum.net" }
    }, {
        upsert: true,
        multi: true,
        new: true
    }).lean()
    console.log(t)
}
main()