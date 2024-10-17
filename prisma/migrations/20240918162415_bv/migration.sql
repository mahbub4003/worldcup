/*
  Warnings:

  - You are about to drop the column `teamIdVs` on the `schedule` table. All the data in the column will be lost.
  - You are about to drop the column `vsTeamId` on the `schedule` table. All the data in the column will be lost.
  - Added the required column `batFirstTeamId` to the `schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `batSecondTeamId` to the `schedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `schedule` DROP COLUMN `teamIdVs`,
    DROP COLUMN `vsTeamId`,
    ADD COLUMN `batFirstTeamId` INTEGER NOT NULL,
    ADD COLUMN `batSecondTeamId` INTEGER NOT NULL;
