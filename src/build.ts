import { Builder } from './utils/buildUtils';

const watchFlag = process.argv.includes('--watch');
const devFlag = process.argv.includes('--dev');
const chromeFlag = process.argv.includes('--chrome');
const firefoxFlag = process.argv.includes('--firefox');

const builder = new Builder({ watchFlag, devFlag, chromeFlag, firefoxFlag });
builder.addBuildFile('src/popup/index.tsx');
builder.addStaticFile('src/popup/popup.html');
builder.addStaticDir('icons');

builder.build();
