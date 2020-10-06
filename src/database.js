import mongoose from 'mongoose';

const dbConfig = async (connectionString) => {
    try{
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }catch (error){
        console.log(error);
    }

    const db = mongoose.connection;
    db.once("open", () => console.log("db connected"));
}

export default dbConfig