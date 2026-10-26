'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import type {SiteTemplatePageProps} from '../../../types'
import {article,t,updates} from '../content/data'
import {Shell} from '../components/Shell'
import {Reveal} from '../components/Motion'
export default function ArticlePage({locale='zh',basePath}:SiteTemplatePageProps){const path=usePathname(),item=updates.find(item=>path.endsWith('/'+item.slug));if(!item)throw new Error('Unknown update article: '+path);return <Shell locale={locale} basePath={basePath}><Reveal className="nc-article"><article><Link className="nc-text-link" href={basePath+'/updates'}>{locale==='zh'?'全部更新':'All updates'}</Link><div className="nc-article-meta"><span className="nc-build"><i/>{locale==='zh'?'版本':'Build'} {item.version}</span><time dateTime={item.date}>{item.date}</time></div><h1>{t(item.title,locale)}</h1><p className="nc-lead">{t(item.summary,locale)}</p><p>{t(article.intro,locale)}</p><h2>{t(article.heading,locale)}</h2><ul>{article.points.map(point=><li key={point.en}>{t(point,locale)}</li>)}</ul><h2>{t(article.why,locale)}</h2><p>{t(article.end,locale)}</p></article></Reveal></Shell>}
