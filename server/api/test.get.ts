
export default eventHandler(async (event) => {
    return await db.query.test.findMany()
})