import { existsSync, mkdirSync } from "fs";
import path from "path";
import multer from "multer";

import { v4 as uuid } from "uuid";

const appRoot = process.env.PWD;

const upLoadPath = path.join(appRoot, "public", "upload_file");

const storageOption = {
  destination: async (req, file, callback) => {
    if (!existsSync(upLoadPath)) {
      mkdirSync(upLoadPath, { recursive: true });
    }
    callback(null, upLoadPath);
  },
  filename: (req, file, callback) => {
    const upFileName = `${uuid()}-${file.originalname}`;
    callback(null, upFileName);
  },
};

const storage = multer.diskStorage(storageOption);
const upLoad = multer({ storage });

export { upLoad };
