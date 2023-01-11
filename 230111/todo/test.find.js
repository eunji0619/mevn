const t2 = require('./test_ori.js')

const main = async () => {
    const t = await t2.find(
        {
            $and: [
                { completed: { $eq: true } },
                { id: { $lte: 40 } }
            ]
        }).lean()
    // const t = await t2.find({
    //     "completed": { $eq: false }
    // }).lean()
    console.log(t)
}
main()