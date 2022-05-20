-- CreateTable
CREATE TABLE "Member" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL DEFAULT E'',
    "displayName" TEXT NOT NULL DEFAULT E'',
    "avatar" TEXT NOT NULL DEFAULT E'',
    "password" TEXT,
    "role" TEXT NOT NULL DEFAULT E'Unverified',
    "rep" INTEGER DEFAULT 0,
    "defaultPrivacy" TEXT NOT NULL DEFAULT E'Friends',
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Thing" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'Untitled Thing',
    "author" TEXT,
    "featuredImage" TEXT NOT NULL DEFAULT E'',
    "poster" TEXT NOT NULL DEFAULT E'',
    "color" TEXT NOT NULL DEFAULT E'hsl(210, 10%, 30%)',
    "privacy" TEXT NOT NULL DEFAULT E'Friends',
    "score" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Thing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContentPiece" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL DEFAULT E'',
    "onThing" TEXT,
    "onTag" TEXT,
    "score" INTEGER NOT NULL DEFAULT 0,
    "privacy" TEXT NOT NULL DEFAULT E'Friends',
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContentPiece_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',
    "author" TEXT,
    "featuredImage" TEXT NOT NULL DEFAULT E'',
    "poster" TEXT NOT NULL DEFAULT E'',
    "color" TEXT NOT NULL DEFAULT E'',
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vote" (
    "id" TEXT NOT NULL,
    "voter" TEXT,
    "onThing" TEXT,
    "onComment" TEXT,
    "onContentPiece" TEXT,
    "value" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Connection" (
    "id" TEXT NOT NULL,
    "creator" TEXT,
    "subject" TEXT,
    "object" TEXT,
    "relationship" TEXT NOT NULL DEFAULT E'',
    "strength" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Connection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "author" TEXT,
    "comment" TEXT NOT NULL DEFAULT E'',
    "onThing" TEXT,
    "onContentPiece" TEXT,
    "onTag" TEXT,
    "replyTo" TEXT,
    "score" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ContentPiece_copiedToThings" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Tag_connectedThings" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Member_email_key" ON "Member"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Member_displayName_key" ON "Member"("displayName");

-- CreateIndex
CREATE INDEX "Thing_title_idx" ON "Thing"("title");

-- CreateIndex
CREATE INDEX "Thing_author_idx" ON "Thing"("author");

-- CreateIndex
CREATE INDEX "ContentPiece_content_idx" ON "ContentPiece"("content");

-- CreateIndex
CREATE INDEX "ContentPiece_onThing_idx" ON "ContentPiece"("onThing");

-- CreateIndex
CREATE INDEX "ContentPiece_onTag_idx" ON "ContentPiece"("onTag");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_title_key" ON "Tag"("title");

-- CreateIndex
CREATE INDEX "Tag_author_idx" ON "Tag"("author");

-- CreateIndex
CREATE INDEX "Vote_voter_idx" ON "Vote"("voter");

-- CreateIndex
CREATE INDEX "Vote_onThing_idx" ON "Vote"("onThing");

-- CreateIndex
CREATE INDEX "Vote_onComment_idx" ON "Vote"("onComment");

-- CreateIndex
CREATE INDEX "Vote_onContentPiece_idx" ON "Vote"("onContentPiece");

-- CreateIndex
CREATE INDEX "Connection_creator_idx" ON "Connection"("creator");

-- CreateIndex
CREATE INDEX "Connection_subject_idx" ON "Connection"("subject");

-- CreateIndex
CREATE INDEX "Connection_object_idx" ON "Connection"("object");

-- CreateIndex
CREATE INDEX "Comment_author_idx" ON "Comment"("author");

-- CreateIndex
CREATE INDEX "Comment_onThing_idx" ON "Comment"("onThing");

-- CreateIndex
CREATE INDEX "Comment_onContentPiece_idx" ON "Comment"("onContentPiece");

-- CreateIndex
CREATE INDEX "Comment_onTag_idx" ON "Comment"("onTag");

-- CreateIndex
CREATE INDEX "Comment_replyTo_idx" ON "Comment"("replyTo");

-- CreateIndex
CREATE UNIQUE INDEX "_ContentPiece_copiedToThings_AB_unique" ON "_ContentPiece_copiedToThings"("A", "B");

-- CreateIndex
CREATE INDEX "_ContentPiece_copiedToThings_B_index" ON "_ContentPiece_copiedToThings"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Tag_connectedThings_AB_unique" ON "_Tag_connectedThings"("A", "B");

-- CreateIndex
CREATE INDEX "_Tag_connectedThings_B_index" ON "_Tag_connectedThings"("B");

-- AddForeignKey
ALTER TABLE "Thing" ADD CONSTRAINT "Thing_author_fkey" FOREIGN KEY ("author") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentPiece" ADD CONSTRAINT "ContentPiece_onThing_fkey" FOREIGN KEY ("onThing") REFERENCES "Thing"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentPiece" ADD CONSTRAINT "ContentPiece_onTag_fkey" FOREIGN KEY ("onTag") REFERENCES "Tag"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_author_fkey" FOREIGN KEY ("author") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_voter_fkey" FOREIGN KEY ("voter") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_onThing_fkey" FOREIGN KEY ("onThing") REFERENCES "Thing"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_onContentPiece_fkey" FOREIGN KEY ("onContentPiece") REFERENCES "ContentPiece"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_onComment_fkey" FOREIGN KEY ("onComment") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_creator_fkey" FOREIGN KEY ("creator") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_subject_fkey" FOREIGN KEY ("subject") REFERENCES "Thing"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_object_fkey" FOREIGN KEY ("object") REFERENCES "Thing"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_author_fkey" FOREIGN KEY ("author") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_onThing_fkey" FOREIGN KEY ("onThing") REFERENCES "Thing"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_onContentPiece_fkey" FOREIGN KEY ("onContentPiece") REFERENCES "ContentPiece"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_onTag_fkey" FOREIGN KEY ("onTag") REFERENCES "Tag"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_replyTo_fkey" FOREIGN KEY ("replyTo") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContentPiece_copiedToThings" ADD FOREIGN KEY ("A") REFERENCES "ContentPiece"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContentPiece_copiedToThings" ADD FOREIGN KEY ("B") REFERENCES "Thing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Tag_connectedThings" ADD FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Tag_connectedThings" ADD FOREIGN KEY ("B") REFERENCES "Thing"("id") ON DELETE CASCADE ON UPDATE CASCADE;
