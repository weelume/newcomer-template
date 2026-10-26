'use client'
import {createContext,useContext,type ReactNode} from 'react'
import {brand} from './config/brand'
import type {Text} from './content/data'
export interface NewcomerHostConfig {brandName:Text;logo?:string;lightLogo?:string;marketplaceHref?:string;marketplaceLabel?:Text;marketplaceAriaLabel?:Text;filing?:ReactNode}
const Context=createContext<NewcomerHostConfig>({brandName:brand.name})
export function NewcomerHostProvider({children,...config}:NewcomerHostConfig&{children:ReactNode}){return <Context.Provider value={config}>{children}</Context.Provider>}
export const useNewcomerHost=()=>useContext(Context)
