/*
  Warnings:

  - You are about to drop the column `driverId` on the `Profile` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_driverId_fkey";

-- DropIndex
DROP INDEX "Profile_driverId_key";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "driverId";
