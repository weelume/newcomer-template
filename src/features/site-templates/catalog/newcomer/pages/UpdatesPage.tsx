'use client'
import type {SiteTemplatePageProps} from '../../../types'
import {copy,t,updates} from '../content/data'
import {Shell} from '../components/Shell'
import {Reveal} from '../components/Motion'
import {UpdateCard} from '../components/UpdateCard'
export default function UpdatesPage({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><section className="nc-section nc-update-index nc-container"><Reveal className="nc-section-heading"><h1>{locale==='zh'?'更新日志':'Updates'}</h1><p>{t(copy.updatesIntro,locale)}</p></Reveal><div className="nc-update-grid">{updates.map((item,index)=><Reveal key={item.slug} delay={index*.08}><UpdateCard item={item} basePath={basePath} locale={locale}/></Reveal>)}</div></section></Shell>}
