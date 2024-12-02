'use server';

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "..";
import Property from "../property.model";

export const getAllProperties = async (
  { limit, page, propertyName }: { limit: number; page: number; propertyName?: string }
) => {
  try {
    await connectToDatabase();

    const skipAmount = (Number(page) - 1) * limit; // Calculate the number of documents to skip

    // Create the base query object for searching properties
    let query = {};
    if (propertyName && propertyName.trim()) {
      query = { name: { $regex: new RegExp(propertyName, "i") } }; // Case-insensitive match for the property name
    }

    // Fetch properties with pagination and optional propertyName filtering
    const properties = await Property.find(query)
      .populate({
        path: 'owner', // The field in Property that references the User model
        select: 'firstname lastname email', // Specify the fields you want to retrieve from the User model
      })
      .skip(skipAmount) // Skip the documents based on the page
      .limit(limit) // Limit the number of documents returned
      .exec();

    // Count total properties based on the query for pagination
    const totalProperties = await Property.countDocuments(query).exec();
    const totalPages = Math.ceil(totalProperties / limit); // Calculate total pages

    return JSON.parse(
      JSON.stringify({
        properties,
        totalProperties, // Total number of properties available
        totalPages, // Total pages available
        status: 200
      })
    );
  } catch (error) {
    console.error("Error getting all properties", error);
    return { status: 400, message: "Error getting all properties" };
  }
};


export const deletePropertyById = async (id:string) => {

  try {
    await connectToDatabase();
    await Property.findByIdAndDelete(id);
    revalidatePath('/grounds')
    return {
      message: "Property Deleted Successfully",
      status: 200
    }
  } catch (error) {
    console.log(error);
    return {
      message:'error deleting property',
      status: 500
    }
  }
}