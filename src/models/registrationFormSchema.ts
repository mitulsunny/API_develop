import * as mongoose from "mongoose";

 const studentSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        required: true 
    },
    lastName: { 
        type: String,
        required: true 
    },
    email: { 
        type: String,
        required: true 
    },
    phone: { 
        type: String,
        required: true 
    }
})
export const Students = mongoose.model('Students', studentSchema)

  