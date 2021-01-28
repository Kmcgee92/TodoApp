/*
  Warnings:

  - You are about to drop the column `authorId` on the `Item` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_authorId_fkey";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "authorId",
ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "Item" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
