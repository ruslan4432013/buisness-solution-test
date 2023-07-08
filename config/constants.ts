import path from 'node:path';

export const IS_DEV: boolean = String(process.env.NODE_ENV).trim() === 'development';

export const SRC_DIR: string = path.join(__dirname, '../src');
export const BUILD_DIR: string = path.join(__dirname, '../../dist');

export const ALIAS: Record<string, string> = {
  '@src': `${SRC_DIR}`,
  '@shared': `${SRC_DIR}/shared`,
  '@entities': `${SRC_DIR}/entities`,
  '@pages': `${SRC_DIR}/pages`,
  '@features': `${SRC_DIR}/features`,
  '@widgets': `${SRC_DIR}/widgets`,
  '@styles': `${SRC_DIR}/shared/styles/index.scss`,
};
