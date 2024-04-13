import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
	mongoose.set("strictQuery", true);

	if (!process.env.MONGO_URL) {
		throw new Error("MONGO_URL is not defined");
	}

	if (isConnected) {
		console.log("=>database connection ✅");
	}

	try {
		await mongoose.connect(process.env.MONGO_URL);
		isConnected = true;
		console.log("=>mongoDB database connection ✅");
	} catch (error: any) {
		throw new Error(`fail to connect to database : ${error.message}`);
	}
};
