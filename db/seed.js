import db from "#db/client";
import { createFile } from "./queries/files.js";
import { createFolder } from "./queries/folders.js";

async function seed() {
  // TODO
  await db.connect();
  for (let folderCount = 0; folderCount < 3; folderCount++) {
    const folder = await createFolder(`Folder${folderCount}`);
    for (let fileCount = 0; fileCount < 5; fileCount++) {
      await createFile(`File${fileCount}`, fileCount, folder.id);
    }
  }

  await db.end();
  console.log("🌱 Database seeded.");
}
await seed();
