-- CreateTable
CREATE TABLE "Films" (
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "scenario" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "production" TEXT NOT NULL,
    "premiere" TEXT NOT NULL,
    "miniature" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "like" INTEGER NOT NULL,
    "dislike" INTEGER NOT NULL,
    "platforms" TEXT[],
    "type" TEXT[],
    "poster" TEXT NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "Films_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Series" (
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "scenario" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "production" TEXT NOT NULL,
    "premiere" TEXT NOT NULL,
    "miniature" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "like" INTEGER NOT NULL,
    "dislike" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,
    "platforms" TEXT[],
    "type" TEXT[],
    "poster" TEXT NOT NULL,

    CONSTRAINT "Series_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Season" (
    "title" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "seriesId" INTEGER NOT NULL,

    CONSTRAINT "Season_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Epizode" (
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "seasonId" INTEGER NOT NULL,

    CONSTRAINT "Epizode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Responses" (
    "id" SERIAL NOT NULL,
    "nick" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "commentId" INTEGER NOT NULL,

    CONSTRAINT "Responses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "filmId" INTEGER,
    "seriesId" INTEGER,
    "createdAt" TEXT NOT NULL,
    "dislike" INTEGER NOT NULL DEFAULT 0,
    "like" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Season" ADD CONSTRAINT "Season_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "Series"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Epizode" ADD CONSTRAINT "Epizode_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Responses" ADD CONSTRAINT "Responses_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Films"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "Series"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
