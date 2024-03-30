-- CreateTable
CREATE TABLE `memailuser` (
    `nEmailUserID` INTEGER UNSIGNED NOT NULL,
    `sEmail` VARCHAR(255) NOT NULL,
    `sPassword` VARCHAR(255) NOT NULL,
    `sFullName` VARCHAR(200) NOT NULL,
    `dtExpiry` VARCHAR(11) NOT NULL,
    `bSentReminder1` TINYINT UNSIGNED NOT NULL,
    `bSentReminder2` TINYINT UNSIGNED NOT NULL,
    `bSentReminder3` TINYINT UNSIGNED NOT NULL,
    `sComanyName` VARCHAR(100) NOT NULL,
    `sContactNo` VARCHAR(50) NOT NULL,
    `sPythaDongalNo` VARCHAR(50) NOT NULL,
    `bApproved` TINYINT NOT NULL,
    `bActive` TINYINT UNSIGNED NOT NULL DEFAULT 0,
    `bEmailVerified` TINYINT NOT NULL DEFAULT 0,
    `trial` TINYINT NOT NULL DEFAULT 0,
    `bFixed` TINYINT NULL DEFAULT 0,
    `dtCreated` DATETIME(0) NULL,
    `dtModified` DATETIME(0) NULL,

    UNIQUE INDEX `memailuser_sEmail_key`(`sEmail`),
    PRIMARY KEY (`nEmailUserID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
