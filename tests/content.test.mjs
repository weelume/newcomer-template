import test from 'node:test'
import assert from 'node:assert/strict'
import {readFile,readdir,access} from 'node:fs/promises'
const root=new URL('../',import.meta.url)
test('本地素材引用全部存在，不引入远端运行资源',async()=>{const sources=[];async function walk(path){for(const entry of await readdir(new URL(path,root),{withFileTypes:true})){const file=path+'/'+entry.name;if(entry.isDirectory())await walk(file);else if(/\.(tsx?|css)$/.test(file))sources.push(await readFile(new URL(file,root),'utf8'))}}await walk('src/features/site-templates/catalog/newcomer');for(const source of sources){assert.doesNotMatch(source,/<(?:img|video)[^>]+src="https?:/);for(const match of source.matchAll(/(?:image:|image=|asset\()["']([^"']+\.(?:png|webp))/g))await access(new URL('public/templates/newcomer/images/'+match[1],root))}})
test('候补表单不发送或保存数据',async()=>{const source=await readFile(new URL('src/features/site-templates/catalog/newcomer/components/WaitlistForm.tsx',root),'utf8');assert.doesNotMatch(source,/fetch\(|localStorage|sessionStorage|action=/);assert.match(source,/event.preventDefault\(\)/);assert.match(source,/role="status"/);assert.doesNotMatch(source,/console\.(?:debug|log).*input/);})
