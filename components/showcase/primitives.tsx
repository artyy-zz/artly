import Image from "next/image";
import { type Concept,photo,logo } from "@/lib/showcase";
export function Photo({name,alt="",className="",position}:{name:string;alt?:string;className?:string;position?:string}){return <div className={`demo-photo ${className}`}><Image src={photo(name)} alt={alt} fill sizes="(max-width:700px) 100vw, 1000px" loading="eager" style={{objectFit:"cover",objectPosition:position??"center"}}/></div>}
export function BrandLogo({b,light=false,mark=false}:{b:Concept;light?:boolean;mark?:boolean}){return <Image className="brand-logo" src={logo(b.id,mark?"mark":light?"light":"primary")} alt={b.name} width={mark?180:640} height={mark?180:240} loading="eager" unoptimized/>}
export function CTA({children="Na kontakto",href="#kontakt"}:{children?:React.ReactNode;href?:string}){return <a className="demo-cta" href={href}>{children}<span>↗</span></a>}
export function Label({children}:{children:React.ReactNode}){return <span className="demo-label">{children}</span>}
export function Nav({b,items,cta="Na kontakto",light=false}:{b:Concept;items:[string,string][];cta?:string;light?:boolean}){return <header className="demo-nav"><a href="#top" aria-label={b.name}><BrandLogo b={b} light={light}/></a><nav aria-label={`Navigimi ${b.name}`}>{items.map(([label,id])=><a key={id} href={'#'+id}>{label}</a>)}</nav><a className="demo-nav-cta" href="#kontakt">{cta} ↗</a></header>}
export function SectionTitle({label,title}:{label:string;title:string}){return <div className="section-title"><Label>{label}</Label><h2>{title}</h2></div>}
