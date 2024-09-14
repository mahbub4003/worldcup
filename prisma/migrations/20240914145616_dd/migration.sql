-- AlterTable
ALTER TABLE `schedule` ADD COLUMN `overFirstBallTeam` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `overSecondBallTeam` INTEGER NOT NULL DEFAULT 0;
