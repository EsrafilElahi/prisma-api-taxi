/*
  Warnings:

  - A unique constraint covering the columns `[passengerId]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "passengerId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Profile_passengerId_key" ON "Profile"("passengerId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_passengerId_fkey" FOREIGN KEY ("passengerId") REFERENCES "Passenger"("id") ON DELETE SET NULL ON UPDATE CASCADE;
