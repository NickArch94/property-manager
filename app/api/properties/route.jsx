import connectDB from "@/config/database"
import Property from "@/app/models/Property"
import sampleProperties from "@/properties.json"

// get api/properties
export const GET = async () => {
    try {
        await connectDB()
        const properties = await Property.find({})

        if (properties.length === 0) {
            const seededProperties = await Property.insertMany(sampleProperties)
            return Response.json(seededProperties)
        }

        return Response.json(properties)
    } catch (error) {
        console.error("Error fetching properties:", error)
        return Response.json(sampleProperties)
    }
}