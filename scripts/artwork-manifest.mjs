import fs from 'node:fs/promises';import {createHash} from 'node:crypto';
export async function writeArtworkManifest(){const manifest={};for(const dir of ['finished','identities']){for(const file of await fs.readdir('public/artwork/'+dir)){if(!/\.(webp|svg)$/.test(file))continue;manifest[dir+'/'+file]=createHash('sha256').update(await fs.readFile('public/artwork/'+dir+'/'+file)).digest('hex').slice(0,12);}}await fs.writeFile('lib/artwork-manifest.json',JSON.stringify(manifest,null,2)+'\n');}
if(process.argv[1]?.endsWith('artwork-manifest.mjs'))await writeArtworkManifest();
