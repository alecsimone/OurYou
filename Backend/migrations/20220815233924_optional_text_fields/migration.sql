-- AlterTable
ALTER TABLE "Thing" ALTER COLUMN "poster" DROP NOT NULL,
ALTER COLUMN "poster" DROP DEFAULT,
ALTER COLUMN "addToStartUnsavedNewContent" DROP NOT NULL,
ALTER COLUMN "addToStartUnsavedNewContent" DROP DEFAULT,
ALTER COLUMN "unsavedNewContent" DROP NOT NULL,
ALTER COLUMN "unsavedNewContent" DROP DEFAULT;
