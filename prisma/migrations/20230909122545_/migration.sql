/*
  Warnings:

  - You are about to drop the column `driverId` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `passengerId` on the `Trip` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Trip" DROP CONSTRAINT "Trip_driverId_fkey";

-- DropForeignKey
ALTER TABLE "Trip" DROP CONSTRAINT "Trip_passengerId_fkey";

-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "driverId",
DROP COLUMN "passengerId";
