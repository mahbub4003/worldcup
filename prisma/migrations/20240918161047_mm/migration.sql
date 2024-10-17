/*
  Warnings:

  - Added the required column `teamIdVs` to the `schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vsTeamId` to the `schedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `schedule` ADD COLUMN `teamIdVs` INTEGER NOT NULL,
    ADD COLUMN `vsTeamId` INTEGER NOT NULL;
