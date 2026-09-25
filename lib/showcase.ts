import manifest from "./artwork-manifest.json";
import data from "./showcase-data.json";
export interface Concept {id:string;name:string;type:string;color:string;ink:string;accent:string;photo:string;sq:string;line:string;category:string;categorySq:string;font:string;city:string;approach:string;approachSq:string;web:boolean;brand:boolean;menu:boolean;poster:boolean;social:boolean;creative:string;}
export const concepts:Concept[]=data;
export const findConcept=(id:string)=>concepts.find(b=>b.id===id);
export const photo=(name:string)=>`/artwork/photos/${name}.webp`;
const asset=(path:string)=>`/artwork/${path}?v=${(manifest as Record<string,string>)[path]??"1"}`;
export const preview=(id:string,kind:string)=>asset(`finished/${id}-${kind}.webp`);
export const logo=(id:string,variant="primary")=>asset(`identities/${id}-${variant}.svg`);
