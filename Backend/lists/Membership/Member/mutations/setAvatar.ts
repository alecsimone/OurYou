import { KeystoneContext } from '@keystone-6/core/types';
import isImage from '../../../../utils/isImage';

async function setAvatar(
  root: any,
  {
    newAvatarLink,
    uploadedAvatar,
  }: { newAvatarLink?: string; uploadedAvatar?: File },
  ctx: KeystoneContext
) {
  let updatedMember;
  if (newAvatarLink != null) {
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
    console.log(uploadedAvatar);
  }

  return updatedMember;
}

export default setAvatar;
