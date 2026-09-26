"use client";
import {conceptProject,type ServiceSlug,type Project} from '@/lib/content';
import {concepts} from '@/lib/showcase';
import {logoProjects,graphicProjects} from '@/lib/curated';
import {Mockup} from './mockup';
export const serviceVisuals:Record<ServiceSlug,{project:Project;variant:string}>={websites:{project:conceptProject(concepts[1]),variant:'website'},'logo-design':{project:logoProjects[8],variant:'logo'},'graphic-design':{project:graphicProjects[14],variant:'campaign'}};
export function ServiceVisual({service}:{service:ServiceSlug}){const {project,variant}=serviceVisuals[service];return <div className={`service-showcase visual-${service}`} aria-hidden="true"><div className="service-showcase-piece"><Mockup project={project} variant={variant} sizes="(max-width:700px) 92vw, 760px"/></div>{service==='graphic-design'&&<div className="service-showcase-secondary"><Mockup project={graphicProjects[6]} variant="poster" sizes="260px"/></div>}</div>}
