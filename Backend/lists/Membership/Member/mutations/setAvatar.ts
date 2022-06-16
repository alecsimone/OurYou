import { KeystoneContext } from '@keystone-6/core/types';
import isImage from '../../../../utils/isImage';
import uploadToCloudinary from '../../../../utils/uploadToCloudinary';

interface uploadedFile {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => {
    _writeStream: {
      _path: any;
    };
  };
}
export type { uploadedFile };

async function setAvatar(
  root: any,
  {
    newAvatarLink,
    uploadedAvatar,
  }: { newAvatarLink?: string; uploadedAvatar?: Promise<uploadedFile>[] },
  ctx: KeystoneContext
) {
  let updatedMember;
  console.log(newAvatarLink);
  if (newAvatarLink != null && newAvatarLink !== '') {
    if (!isImage(newAvatarLink)) {
      throw new Error(
        'Avatar must be an image. Valid file types are .jpg, .jpeg, .gif, .png, and .webp.'
      );
    }

    updatedMember = await ctx.query.Member.updateOne({
      where: {
        id: ctx.session.itemId,
      },
      data: {
        avatar: newAvatarLink,
      },
      query: '__typename id avatar',
    });
  } else if (uploadedAvatar != null) {
    const { url } = await uploadToCloudinary(uploadedAvatar[0], 'image');

    updatedMember = await ctx.query.Member.updateOne({
      where: {
        id: ctx.session.itemId,
      },
      data: {
        avatar: url,
      },
      query: '__typename id avatar',
    });
  }

  return updatedMember;
}

export default setAvatar;
