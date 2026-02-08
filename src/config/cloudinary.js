// config/cloudinary.js
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config(process.env.CLOUDINARY_URL);

async function upload(foto) {
    try {
        const resultadoUpload = await cloudinary.uploader.upload(foto, {
            folder: 'produtos'
        });

        return {
            url: resultadoUpload.secure_url,
            public_id: resultadoUpload.public_id,
            provider: 'cloudinary'
        };
    } catch (e) {
        throw e; // deixa o middleware tratar
    }
}

async function remover(public_id) {
    if (!public_id) return;
    await cloudinary.uploader.destroy(public_id);
}

export default {
    upload,
    remover
};
