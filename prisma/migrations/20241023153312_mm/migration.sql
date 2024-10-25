/*
  Warnings:

  - You are about to drop the column `totalRunTeamVs` on the `schedule` table. All the data in the column will be lost.
  - You are about to drop the column `vsTeamTotalRun` on the `schedule` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `schedule` DROP COLUMN `totalRunTeamVs`,
    DROP COLUMN `vsTeamTotalRun`,
    ADD COLUMN `totalRunBatFistTeam` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `totalRunBatSecondTeam` INTEGER NOT NULL DEFAULT 0;
