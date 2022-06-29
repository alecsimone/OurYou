import { KeystoneContext } from '@keystone-6/core/types';

async function getProfileSidebarData(
  root: any,
  { id }: { id: string },
  ctx: KeystoneContext
) {
  let computedID = id;
  if (id == null) {
    computedID = ctx.session.itemId;
  }
  console.log(computedID);

  const memberData = await ctx.query.Member.findOne({
    where: {
      id: computedID,
    },
    query: `
      __typename
      id
      avatar
      defaultPrivacy
      displayName
      role
      rep
      giveableRep
      email
      twitchName
      twitterUserName
    `,
  });

  return memberData;
}

export default getProfileSidebarData;
