-- AlterTable
ALTER TABLE "Connection" ADD COLUMN     "isBlocked" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "ContentPiece" ADD COLUMN     "unsavedNewContent" TEXT;

-- AlterTable
ALTER TABLE "Thing" ADD COLUMN     "contentOrder" TEXT NOT NULL DEFAULT E'[]',
ADD COLUMN     "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "_Member_individualThingViewPermissions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ContentPiece_individualViewers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Member_individualThingViewPermissions_AB_unique" ON "_Member_individualThingViewPermissions"("A", "B");

-- CreateIndex
CREATE INDEX "_Member_individualThingViewPermissions_B_index" ON "_Member_individualThingViewPermissions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ContentPiece_individualViewers_AB_unique" ON "_ContentPiece_individualViewers"("A", "B");

-- CreateIndex
CREATE INDEX "_ContentPiece_individualViewers_B_index" ON "_ContentPiece_individualViewers"("B");

-- AddForeignKey
ALTER TABLE "_Member_individualThingViewPermissions" ADD CONSTRAINT "_Member_individualThingViewPermissions_A_fkey" FOREIGN KEY ("A") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Member_individualThingViewPermissions" ADD CONSTRAINT "_Member_individualThingViewPermissions_B_fkey" FOREIGN KEY ("B") REFERENCES "Thing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContentPiece_individualViewers" ADD CONSTRAINT "_ContentPiece_individualViewers_A_fkey" FOREIGN KEY ("A") REFERENCES "ContentPiece"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContentPiece_individualViewers" ADD CONSTRAINT "_ContentPiece_individualViewers_B_fkey" FOREIGN KEY ("B") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;
