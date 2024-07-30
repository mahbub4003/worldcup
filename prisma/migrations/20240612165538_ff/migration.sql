/*
  Warnings:

  - Added the required column `roll` to the `player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `player` ADD COLUMN `roll` VARCHAR(100) NOT NULL;
