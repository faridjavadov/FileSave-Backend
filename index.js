import express from "express"
import { uploadRoutes } from "./routes/uploadRoute.js";
import fileUpload from "express-fileupload";
import path, { dirname } from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({extended: true})); 
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/upload',uploadRoutes)

app.listen(8080, () => {
    console.log("Server is Running");
})