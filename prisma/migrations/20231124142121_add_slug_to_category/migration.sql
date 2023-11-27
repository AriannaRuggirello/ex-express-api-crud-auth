/*
  Warnings:

  - You are about to drop the column `slug` on the `Tag` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Tag_slug_key` ON `Tag`;

-- AlterTable
ALTER TABLE `Category` ADD COLUMN `slug` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `Tag` DROP COLUMN `slug`;

-- CreateIndex
CREATE UNIQUE INDEX `Category_slug_key` ON `Category`(`slug`);
