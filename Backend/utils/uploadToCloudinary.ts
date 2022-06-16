import 'dotenv/config';
import { v2 as cloudinary } from 'cloudinary';
import { uploadedFile } from '../lists/Membership/Member/mutations/setAvatar';

const uploadToCloudinary = async (
  file: Promise<uploadedFile>,
  type: 'image' | 'video'
) => {
  const resolvedFile = await file;

  const readStream = resolvedFile.createReadStream();
  // eslint-disable-next-line no-underscore-dangle
  const upload = readStream._writeStream._path;

  let url;
  await cloudinary.uploader.upload(
    upload,
    {
      resource_type: type,
      folder: 'ouryou',
      use_filename: true,
    },
    (error, result) => {
      if (error) {
        console.log(error);
        throw new Error(error.message);
      } else if (result) {
        console.log(result);
        url = result.secure_url;
      }
    }
  );

  return { url };
};

export default uploadToCloudinary;
