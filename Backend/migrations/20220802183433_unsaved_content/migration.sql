-- AlterTable
ALTER TABLE "Thing" ADD COLUMN     "addToStartUnsavedNewContent" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "unsavedNewContent" TEXT NOT NULL DEFAULT E'';
