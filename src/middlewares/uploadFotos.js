// middlewares/uploadFotos.js
import cloudinary from '../config/cloudinary.js';

export async function uploadFotos(req, res, next) {
    try {
        if (!req.files || req.files.length === 0) {
            req.uploadedImages = [];
            return next();
        }

        const uploads = await Promise.all(
            req.files.map(file => cloudinary.upload(file.path))
        );

        req.uploadedImages = uploads;
        next();
    } catch (erro) {
        next(erro);
    }
}



