'use client'
import type {SiteTemplatePageProps} from '../../../types'
import {privacy,t} from '../content/data'
import {Shell} from '../components/Shell'
import {Reveal} from '../components/Motion'
export default function PrivacyPage({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><Reveal className="nc-article"><article><h1>{locale==='zh'?'隐私政策':'Privacy Policy'}</h1><p>{locale==='zh'?'最后更新：2026 年 7 月 7 日':'Last updated: 7 July 2026'}</p><p>{locale==='zh'?'我们打造这款产品，是为了帮助你记住重要的事，而不是收集超出必要范围的信息。本政策说明我们收集什么、为什么收集，以及你如何保持控制。':'We built this product to help you keep track of what matters, not to collect more of it than we need. This policy explains what information we gather, why we gather it, and how you stay in control.'}</p>{privacy.map(section=><section key={section.title.en}><h2>{t(section.title,locale)}</h2><p>{t(section.body,locale)}</p></section>)}</article></Reveal></Shell>}
