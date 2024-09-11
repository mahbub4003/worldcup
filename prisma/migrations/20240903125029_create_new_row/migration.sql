/*
  Warnings:

  - You are about to drop the column `name` on the `indevisualplayingrecords` table. All the data in the column will be lost.
  - Added the required column `four` to the `indevisualPlayingRecords` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playerName` to the `indevisualPlayingRecords` table without a default value. This is not possible if the table is not empty.
  - Added the required column `six` to the `indevisualPlayingRecords` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamId` to the `indevisualPlayingRecords` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fiveWicket` to the `player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `four` to the `player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `six` to the `player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shirisName` to the `schedule` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `schedule_matchNo_key` ON `schedule`;

-- AlterTable
ALTER TABLE `indevisualplayingrecords` DROP COLUMN `name`,
    ADD COLUMN `four` INTEGER NOT NULL,
    ADD COLUMN `playerName` VARCHAR(100) NOT NULL,
    ADD COLUMN `six` INTEGER NOT NULL,
    ADD COLUMN `teamId` BIGINT UNSIGNED NOT NULL;

-- AlterTable
ALTER TABLE `player` ADD COLUMN `fiveWicket` INTEGER NOT NULL,
    ADD COLUMN `four` INTEGER NOT NULL,
    ADD COLUMN `six` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `schedule` ADD COLUMN `shirisName` VARCHAR(100) NOT NULL;

-- CreateTable
CREATE TABLE `series` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `indevisualPlayingRecords` ADD CONSTRAINT `indevisualPlayingRecords_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
