-- CreateTable
CREATE TABLE `team` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `teamName` VARCHAR(100) NOT NULL,
    `totalPlayed` INTEGER NOT NULL,
    `win` INTEGER NOT NULL,
    `loss` INTEGER NOT NULL,
    `achiveRun` INTEGER NOT NULL,
    `givingRun` INTEGER NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `team_teamName_key`(`teamName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `player` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `teamId` BIGINT UNSIGNED NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `battingStyle` VARCHAR(100) NOT NULL,
    `ballingStyle` VARCHAR(100) NOT NULL,
    `totalRun` INTEGER NOT NULL,
    `totalUseBall` INTEGER NOT NULL,
    `hRun` INTEGER NOT NULL,
    `totalBaliing` INTEGER NOT NULL,
    `totalWicket` INTEGER NOT NULL,
    `economy` INTEGER NOT NULL,
    `evarage` INTEGER NOT NULL,
    `bbi` VARCHAR(100) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `schedule` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `teamNameVs` VARCHAR(100) NOT NULL,
    `vsTeamName` VARCHAR(100) NOT NULL,
    `venue` VARCHAR(100) NOT NULL,
    `toss` BOOLEAN NOT NULL DEFAULT false,
    `tossWinTeam` VARCHAR(100) NOT NULL,
    `chooseTo` VARCHAR(100) NOT NULL,
    `matchNo` INTEGER NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `schedule_matchNo_key`(`matchNo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `indevisualPlayingRecords` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `scheduleId` BIGINT UNSIGNED NOT NULL,
    `playerId` BIGINT UNSIGNED NOT NULL,
    `onCrease` BOOLEAN NOT NULL DEFAULT false,
    `onStricke` BOOLEAN NOT NULL DEFAULT false,
    `playedBall` INTEGER NOT NULL,
    `totalRun` INTEGER NOT NULL,
    `onBalling` BOOLEAN NOT NULL DEFAULT false,
    `totalBall` INTEGER NOT NULL,
    `considRunToday` INTEGER NOT NULL,
    `playerRunToday` INTEGER NOT NULL,
    `playedBallToday` INTEGER NOT NULL,
    `wicketToday` INTEGER NOT NULL,
    `ballingToday` INTEGER NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `player` ADD CONSTRAINT `player_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `indevisualPlayingRecords` ADD CONSTRAINT `indevisualPlayingRecords_scheduleId_fkey` FOREIGN KEY (`scheduleId`) REFERENCES `schedule`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `indevisualPlayingRecords` ADD CONSTRAINT `indevisualPlayingRecords_playerId_fkey` FOREIGN KEY (`playerId`) REFERENCES `player`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
