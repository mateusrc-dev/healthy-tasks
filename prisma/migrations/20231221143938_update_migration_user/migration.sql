-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "typeUser" TEXT NOT NULL,
    "photoUrl" TEXT,
    "specializacion" TEXT,
    "description" TEXT,
    "complaint" TEXT,
    "profilePublic" BOOLEAN,
    "statisticPublic" BOOLEAN,
    "profileForce" INTEGER,
    "password" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_users" ("complaint", "created_at", "description", "email", "id", "password", "photoUrl", "profileForce", "profilePublic", "specializacion", "statisticPublic", "typeUser", "updatedAt", "username") SELECT "complaint", "created_at", "description", "email", "id", "password", "photoUrl", "profileForce", "profilePublic", "specializacion", "statisticPublic", "typeUser", "updatedAt", "username" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
