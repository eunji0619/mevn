// const { Photo } = require('./p346_CRUD_ori.js')
const Photo = require('./p346_CRUD_ori.js')

const main = async () => {
    const t = await Photo.findOne({
        "title": { $eq: '마마무' }
    },
        {
            _id: 0
            // , title: 1
        }).lean()
    console.log(t)
}
main()