-- CreateTable
CREATE TABLE "_Member_friendsA" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Member_friendsA_AB_unique" ON "_Member_friendsA"("A", "B");

-- CreateIndex
CREATE INDEX "_Member_friendsA_B_index" ON "_Member_friendsA"("B");

-- AddForeignKey
ALTER TABLE "_Member_friendsA" ADD CONSTRAINT "_Member_friendsA_A_fkey" FOREIGN KEY ("A") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Member_friendsA" ADD CONSTRAINT "_Member_friendsA_B_fkey" FOREIGN KEY ("B") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;
