/*
  Warnings:

  - You are about to drop the column `TotalConsidRunToday` on the `player` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `player` DROP COLUMN `TotalConsidRunToday`,
    ADD COLUMN `TotalConsidRun` INTEGER NOT NULL DEFAULT 0;
