/*
  Warnings:

  - Added the required column `profileImage` to the `player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `indevisualplayingrecords` ADD COLUMN `freeHitBall` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `player` ADD COLUMN `profileImage` VARCHAR(191) NOT NULL;
