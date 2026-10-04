import fs from 'fs';
import path from 'path';

const allowedMimeTypes = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'video/mp4',
  'video/webm',
  'application/zip',
  'text/plain',
]);

export function getUploadDir() {
  const dir = process.env.UPLOAD_DIR || './uploads';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return dir;
}

export function normalizeFileType(file: File) {
  const mime = file.type.toLowerCase();
  if (!allowedMimeTypes.has(mime)) {
    throw new Error('نوع الملف غير مسموح به.');
  }
  return mime;
}

export function safeFileName(originalName: string) {
  const safe = originalName.replace(/[^a-zA-Z0-9._-]/g, '-');
  return `${Date.now()}-${safe}`;
}

export function getStorageUrl(fileName: string) {
  return `/uploads/${fileName}`;
}

export async function saveUploadedFile(file: File) {
  const dir = getUploadDir();
  const mime = normalizeFileType(file);
  const name = safeFileName(file.name);
  const filePath = path.join(dir, name);
  const bytes = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(filePath, bytes);

  return {
    name,
    mime,
    size: file.size,
    url: getStorageUrl(name),
  };
}
