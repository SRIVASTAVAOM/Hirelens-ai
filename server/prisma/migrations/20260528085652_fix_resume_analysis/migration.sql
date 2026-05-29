/*
  Warnings:

  - You are about to drop the `ResumeAnalysis` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ResumeAnalysis";

-- CreateTable
CREATE TABLE "resume_analysis" (
    "id" TEXT NOT NULL,
    "atsScore" INTEGER NOT NULL,
    "skills" TEXT[],
    "strengths" TEXT[],
    "weaknesses" TEXT[],
    "suggestions" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,

    CONSTRAINT "resume_analysis_pkey" PRIMARY KEY ("id")
);
