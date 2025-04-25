/*
  Warnings:

  - You are about to drop the column `isbn` on the `book` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Book_isbn_key` ON `book`;

-- AlterTable
ALTER TABLE `book` DROP COLUMN `isbn`;
