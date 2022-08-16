/* eslint-disable no-restricted-syntax */
import { KeystoneContext } from '@keystone-6/core/types';
import oldFullThingFields from './oldFullThingFields';

export default async function transferPosts(
  root: any,
  { cursor }: { cursor: string },
  ctx: KeystoneContext
) {
  const requestURL = 'https://playground.ouryou.org';

  let things;
  let thingData;

  const alecsID = 'cl6gxosz10030isj46d4bn0c4';

  const mostRecentPost = await ctx.query.Thing.findMany({
    take: 1,
    orderBy: {
      createdAt: 'desc',
    },
    query: 'createdAt',
  });
  console.log(mostRecentPost[0].createdAt);

  await fetch(requestURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query TransferThings($cursor: String) {
          transferThings(cursor: $cursor) {
            ${oldFullThingFields}
          }
        }
      `,
      variables: {
        cursor: mostRecentPost[0].createdAt,
      },
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.errors) {
        console.log(res.errors);
      }
      things = res.data.transferThings;
      thingData = JSON.stringify(res.data.transferThings);
    });

  const dataObjs = [];
  if (things && Array.isArray(things)) {
    let count = 1;
    for (const thing of things) {
      const dataObj = {
        title: thing.title,
        featuredImage: thing.featuredImage,
        poster: thing.poster,
        privacy: thing.privacy,
        unsavedNewContent: thing.unsavedNewContent,
        addToStartUnsavedNewContent: thing.addToStartUnsavedNewContent,
        createdAt: thing.createdAt,
      };

      if (thing.color != null) {
        dataObj.color = thing.color;
      }

      // Author
      if (thing.author.displayName !== 'Alec') {
        continue;
      }

      dataObj.author = {
        connect: {
          id: alecsID,
        },
      };

      // Individual Viewers - If there are any (and they exist in new DB), need to connect them.
      // * Skipping this because there aren't any posts in the database worth keeping it for
      // if (
      //   thing.individualViewPermissions &&
      //   Array.isArray(thing.individualViewPermissions)
      // ) {
      //   for (const viewer of thing.individualViewPermissions) {
      //     // Check if the viewer's display name exists in the new database
      //     // If so, get their ID and add a connect to the dataObj
      //   }
      // }

      // Votes - If there are any (and the voter exists in new DB), need to connect them.
      if (thing.votes && Array.isArray(thing.votes)) {
        for (const voter of thing.votes) {
          if (voter.displayName === 'Alec') {
            dataObj.votes = {
              connect: {
                id: 'cl6gxosz10030isj46d4bn0c4',
              },
            };
          }
        }
      }

      // partOfTags - need to check if the tag has been created already. If it has, connect, if not, create
      if (thing.partOfTags && Array.isArray(thing.partOfTags)) {
        dataObj.partOfTags = {
          connect: [],
          create: [],
        };
        for (const tag of thing.partOfTags) {
          if (tag.title != null && tag.title !== '') {
            // Check if the tag's title exists in the new database
            const existingTag = await ctx.query.Tag.findMany({
              where: {
                title: {
                  equals: tag.title,
                },
              },
            });
            if (existingTag != null && existingTag.length > 0) {
              // If so, get its ID and add a connect to the dataObj
              dataObj.partOfTags.connect.push({ id: existingTag[0].id });
            } else {
              // If not, add a create to the dataObj
              dataObj.partOfTags.create.push({
                title: tag.title,
                author: {
                  connect: {
                    id: alecsID,
                  },
                },
              });
            }
          }
        }
      }

      // content - Map each content piece into an array of objects that can go in a create array: https://stackoverflow.com/a/55699538
      if (thing.content != null && thing.content.length > 0) {
        dataObj.content = {
          create: [],
        };
        thing.content.forEach((piece) => {
          const newPieceObj = {
            content: piece.content,
            unsavedNewContent: piece.unsavedNewContent,
            privacy: piece.privacy,
          };

          if (piece.privacy == null) {
            newPieceObj.privacy = thing.privacy;
          } else {
            newPieceObj.privacy = piece.privacy;
          }

          // Content Piece Comments
          if (piece.comments != null && piece.comments.length > 0) {
            newPieceObj.comments = {
              create: [],
            };
            piece.comments.forEach((pieceComment) => {
              if (pieceComment.author.displayName === 'Alec') {
                newPieceObj.comments.create.push({
                  comment: pieceComment.comment,
                  createdAt: pieceComment.createdAt,
                  author: {
                    connect: {
                      id: alecsID,
                    },
                  },
                });
              }
            });
          }
          dataObj.content.create.push(newPieceObj);
        });
      }

      // contentOrder - need to reduce from an array of strings to an array-like string
      if (thing.contentOrder != null && thing.contentOrder.length > 0) {
        let newOrder = '[';
        thing.contentOrder.forEach((id) => {
          newOrder += `'${id}'`;
        });
        newOrder += ']';
        dataObj.contentOrder = newOrder;
      }

      // copiedInContent
      if (thing.copiedInContent != null && thing.copiedInContent.length > 0) {
        dataObj.copiedInContent = {
          create: [],
        };
        thing.copiedInContent.forEach((piece) => {
          const newPieceObj = {
            content: piece.content,
            unsavedNewContent: piece.unsavedNewContent,
          };

          if (piece.privacy == null) {
            newPieceObj.privacy = thing.privacy;
          } else {
            newPieceObj.privacy = piece.privacy;
          }

          // Content Piece Comments
          if (piece.comments != null && piece.comments.length > 0) {
            newPieceObj.comments = {
              create: [],
            };
            piece.comments.forEach((pieceComment) => {
              if (pieceComment.author.displayName === 'Alec') {
                newPieceObj.comments.create.push({
                  comment: pieceComment.comment,
                  createdAt: pieceComment.createdAt,
                  author: {
                    connect: {
                      id: alecsID,
                    },
                  },
                });
              }
            });
          }
          dataObj.copiedInContent.create.push(newPieceObj);
        });
      }

      // comments - Map each comment into an array of objects that can go in a create array: https://stackoverflow.com/a/55699538
      if (thing.comments != null && thing.comments.length > 0) {
        dataObj.comments = {
          create: [],
        };
        thing.comments.forEach((thingComment) => {
          if (thingComment.author.displayName === 'Alec') {
            dataObj.comments.create.push({
              comment: thingComment.comment,
              createdAt: thingComment.createdAt,
              author: {
                connect: {
                  id: alecsID,
                },
              },
            });
          }
        });

        // subjectConnections
        // objectConnections
        // * Gonna skip these because there isn't really anything worth saving there
      }
      dataObjs.push({
        oldID: thing.id,
        dataObj,
      });

      console.log(`${count} / ${things.length}: Creating ${thing.title}...`);
      // await ctx.query.Thing.createOne({
      //   data: dataObj,
      // });
      // console.log('Success!');

      count += 1;
    }
  }
  return JSON.stringify(dataObjs);
  // return thingData;
}
