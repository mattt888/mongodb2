module.exports = {
    create: async( obj, collection ) => {
        const result = await collection.insertOne(obj)
        return result.insertedId
    },
    createMany: async( arrayOfObjects, collection ) => {
        const result = await collection.insertMany(arrayOfObjects) // [{...}, {...}, {...}]
        return result.insertedIds
    }
}