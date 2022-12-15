import mongoose from "mongoose";
import {mongodb} from './keys'
mongoose.connect(mongodb.URI)
.then(_db => console.log('DB is connect'))
.catch(err => console.log(err))