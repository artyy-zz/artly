"use client";
import {conceptProject,type ServiceSlug,type Project} from '@/lib/content';
import {concepts} from '@/lib/showcase';
import {logoProjects,graphicProjects} from '@/lib/curated';
import {Mockup} from './mockup';
export const serviceVisuals:Record<ServiceSlug,{project:Project;variant:string}>={websites:{project:conceptProject(concepts[1]),variant:'website'},'logo-design':{project:logoProjects[8],variant:'logo'},'social-management':{project:graphicProjects[14],variant:'campaign'},'graphic-design':{project:graphicProjects[6],variant:'poster'}};
export function ServiceVisual({service}:{service:ServiceSlug}){const {project,variant}=serviceVisuals[service];return <div className={`service-visual visual-${service}`} aria-hidden="true"><div className="service-visual-piece"><Mockup project={project} variant={variant} sizes="(max-width:700px) 85vw, 500px"/></div></div>}
