/*
  Warnings:

  - A unique constraint covering the columns `[playerId]` on the table `indevisualPlayingRecords` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `indevisualPlayingRecords_playerId_key` ON `indevisualPlayingRecords`(`playerId`);
