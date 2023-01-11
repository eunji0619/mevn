const Photo = require('./p346_CRUD_ori.js')
const main = async () => {
    const t = await Photo.updateMany({
        "title": { $in: ['마마무', '솔라', '문별', '휘인', '화사'] }
    }, {
        $push: { "something": { $each: [1, 2, 3] } }
    }, {
        upsert: true,
        multi: true,
        new: true
    }).lean()
    console.log(t)
}
main()