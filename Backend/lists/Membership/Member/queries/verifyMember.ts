import { KeystoneContext } from '@keystone-6/core/types';

async function verifyMember(
  root: any,
  { id, code }: { id: string; code: string },
  ctx: KeystoneContext
) {
  // We need to use the prisma API so we can access the database directly, bypassing any access controls, as the user is probably not logged in yet at this point.
  const existingUser = await ctx.prisma.member.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      verificationToken: true,
      email: true,
    },
  });

  if (existingUser.verificationToken === code) {
    await ctx.prisma.member.update({
      where: { id },
      data: {
        role: 'Member',
      },
    });
  } else {
    throw new Error(
      'Something is wrong with your token. Please click the link in your email again.'
    );
  }

  return existingUser;
}

export default verifyMember;
