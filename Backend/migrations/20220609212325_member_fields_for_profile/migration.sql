-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "giveableRep" INTEGER DEFAULT 0,
ADD COLUMN     "twitchName" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "twitterUserName" TEXT NOT NULL DEFAULT E'';
