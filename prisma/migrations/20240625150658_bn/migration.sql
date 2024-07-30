/*
  Warnings:

  - Added the required column `name` to the `indevisualPlayingRecords` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `indevisualplayingrecords` ADD COLUMN `name` VARCHAR(100) NOT NULL;
