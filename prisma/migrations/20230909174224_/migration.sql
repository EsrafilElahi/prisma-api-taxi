/*
  Warnings:

  - A unique constraint covering the columns `[driverId]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "driverId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Profile_driverId_key" ON "Profile"("driverId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE SET NULL ON UPDATE CASCADE;
