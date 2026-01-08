export default eventHandler(async (event) => {
    return await db.insert(schema.test).values({
        name: String(new Date().toISOString()),
    })
})