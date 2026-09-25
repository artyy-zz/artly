import {conceptProject,type Copy,type Project,type ServiceSlug,c} from './content';
import {concepts} from './showcase';
import {logoProjects,graphicProjects,menuProjects} from './curated';
type Row={title:Copy;projects:Project[]};
const websites=(ids:number[])=>ids.map(i=>({...conceptProject(concepts[i]),service:'websites' as const,artworkKind:'website'}));
export const collectionRows:Record<ServiceSlug,Row[]>={
websites:[{title:c('Biznes & shërbime','Business & services'),projects:websites([1,3,5,6])},{title:c('Mikpritje & mirëqenie','Hospitality & wellbeing'),projects:websites([0,4,8,11])},{title:c('Stil & hapësirë','Style & space'),projects:websites([2,7,9,10])}],
'logo-design':[{title:c('Tipografi & elegancë','Lettering & elegance'),projects:[0,4,9,11].map(i=>logoProjects[i])},{title:c('Gjeometri & precizion','Geometry & precision'),projects:[1,3,5,7].map(i=>logoProjects[i])},{title:c('Karakter & traditë','Character & tradition'),projects:[2,6,8,10].map(i=>logoProjects[i])}],
'social-management':[{title:c('Strategji në praktikë','Strategy in practice'),projects:graphicProjects.filter(p=>p.artworkKind==='campaign')}],
'graphic-design':[{title:c('Social media · produkte & shërbime','Social media · products & services'),projects:graphicProjects.filter(p=>p.artworkKind==='social')},{title:c('Postera · kulturë & përvoja','Posters · culture & experiences'),projects:graphicProjects.filter(p=>p.artworkKind==='poster')},{title:c('Menu · katër shije të ndryshme','Menus · four different flavours'),projects:menuProjects},{title:c('Materiale biznesi & promocione','Business materials & promotions'),projects:graphicProjects.filter(p=>p.artworkKind==='creative')}],
};
export function getCollection(service:ServiceSlug,row:number):Project[]{return collectionRows[service][row].projects;}
