/*
  Warnings:

  - You are about to drop the column `driverId` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `passengerId` on the `Profile` table. All the data in the column will be lost.
  - Added the required column `driverId` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passengerId` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `startTime` on the `Trip` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `endTime` on the `Trip` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_driverId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_passengerId_fkey";

-- DropIndex
DROP INDEX "Profile_driverId_key";

-- DropIndex
DROP INDEX "Profile_passengerId_key";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "driverId",
DROP COLUMN "passengerId";

-- AlterTable
ALTER TABLE "Trip" ADD COLUMN     "driverId" INTEGER NOT NULL,
ADD COLUMN     "passengerId" INTEGER NOT NULL,
DROP COLUMN "startTime",
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL,
DROP COLUMN "endTime",
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_passengerId_fkey" FOREIGN KEY ("passengerId") REFERENCES "Passenger"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
