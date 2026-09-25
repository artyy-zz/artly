import {notFound} from 'next/navigation';
import data from '@/lib/graphic-collection.json';
import {GraphicWork} from '@/components/showcase/graphic-work';
import '@/app/showcase.css';
import '@/app/curated-art.css';
export const dynamicParams=false;
export const metadata={title:'Dizajn grafik — Artly concept',robots:{index:false,follow:false}};
export function generateStaticParams(){return data.map(b=>({id:b.id}));}
export default async function Page({params}:{params:Promise<{id:string}>}){const {id}=await params;const b=data.find(x=>x.id===id);if(!b)notFound();return <GraphicWork b={b}/>;}
