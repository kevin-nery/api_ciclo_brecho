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



// import { v2 as cloudinary } from 'cloudinary';

// async function upload(foto) {
//     cloudinary.config(process.env.CLOUDINARY_URL)
//     try {
//         const resultadoUpload = await cloudinary.uploader.upload(foto);
//         console.log(resultadoUpload);
        
//     } catch (e) {
//         console.log(e);
//     }
// }

// export default upload;


// (async function() {

//     // Configuration
//     cloudinary.config({ 
//         cloud_name: 'dydgevprg', 
//         api_key: '796463854728517', 
//         api_secret: `${process.env.SECRET_CLUDINARY}` // Click 'View API Keys' above to copy your API secret
//     });
    
//     // Upload an image
//      const uploadResult = await cloudinary.uploader
//        .upload(
//            'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
//            }
//        )
//        .catch((error) => {
//            console.log(error);
//        });
    
//     console.log(uploadResult);
    
//     // Optimize delivery by resizing and applying auto-format and auto-quality
//     const optimizeUrl = cloudinary.url('shoes', {
//         fetch_format: 'auto',
//         quality: 'auto'
//     });
    
//     console.log(optimizeUrl);
    
//     // Transform the image: auto-crop to square aspect_ratio
//     const autoCropUrl = cloudinary.url('shoes', {
//         crop: 'auto',
//         gravity: 'auto',
//         width: 500,
//         height: 500,
//     });
    
//     console.log(autoCropUrl);    
// })();