export type Locale = 'zh' | 'en'
export type Text = {zh: string; en: string}
export const t = (value: Text, locale: Locale) => value[locale]
export const copy = {
  hero: {zh:'先一步\n遇见未来',en:'Be first in line'},
  intro: {zh:'住在手机里的 AI 助手。自动整理你保存的点滴，在需要时为你找回。',en:'An AI agent that lives on your phone. It files what you save and brings it back when it matters.'},
  join: {zh:'加入候补名单',en:'Join waitlist'},
  count: {zh:'与 15,000 人一起期待',en:'Join 15.000 others'},
  email: {zh:'你的电子邮箱',en:'Your email address'},
  demo: {zh:'演示表单，仅在本地校验，不会发送或保存。',en:'Demo form. Validated locally; nothing is sent or saved.'},
  success: {zh:'邮箱格式有效。演示已完成，尚未发送或保存。',en:'Your email is valid. Demo complete; nothing was sent or saved.'},
  error: {zh:'请输入有效的电子邮箱地址。',en:'Please enter a valid email address.'},
  updates: {zh:'最近更新',en:'What’s new'},
  updatesIntro: {zh:'每隔几周，我们都会带来新的版本。在这里，见证产品走向正式发布。',en:'New builds ship every few weeks. Follow the progress toward launch here.'},
  allUpdates: {zh:'查看全部更新',en:'See full update history'},
  community: {zh:'与好伙伴\n一起出发',en:'You’re in good company'},
  communityIntro: {zh:'早期体验者已经用它安排日常。还有 15,000 人，和你一样期待它的到来。',en:'Early testers run their lives through it. 15.000 people are waiting for the same app you are.'},
  closing: {zh:'第一时间\n把它握在手中',en:'Be the first to hold it.'},
  closingIntro: {zh:'留下邮箱，正式上线时，我们会第一时间告诉你。',en:'Leave your email and we’ll tell you the moment it ships.'},
  apps: {zh:'一个入口\n连接每个应用',en:'One place, every app'},
  appsIntro: {zh:'从同一个地方，连接你的日历、笔记、文件和消息。',en:'The agent reaches your calendar, notes, files, and messages from one place.'},
}
export const navigation = [
  {hash:'features',label:{zh:'功能',en:'Features'}},
  {hash:'apps',label:{zh:'应用集成',en:'Integrations'}},
  {hash:'updates',label:{zh:'更新日志',en:'Changelog'}},
  {hash:'community',label:{zh:'社区',en:'Community'}},
]
export const features = [
  {title:{zh:'一切都有\n恰当的归处',en:'Everything lands where it belongs'},description:{zh:'笔记、日期和截图，一经保存就自动归档。省去整理文件夹和收件箱的时间。',en:'The agent files notes, dates, and screenshots the moment they arrive. You skip the folders and the inbox.'},image:'Q31rJ08WopkZLbs16friKHbTkTo.png'},
  {title:{zh:'锁屏也能\n随手记录',en:'Capture from the lock screen'},description:{zh:'轻按快捷指令，即刻保存。手机无需解锁。',en:'One shortcut and it’s saved. Your phone stays locked.'},image:'H0OXxSzNlTY3f90tpHZK8rVXI.png'},
  {title:{zh:'计划与提醒\n都安排妥当',en:'Plans and reminders, handled'},description:{zh:'把你保存的内容变成日程和提醒，在恰当的时间出现。',en:'The agent turns what you save into events and reminders that show up on time.'},image:'UCdjhFRVhcoA6Pck5rkRYCFVKNE.png'},
  {title:{zh:'按你的记忆\n找到它',en:'Find it the way you remember it'},description:{zh:'问一句“五月拍的那张天台照片”，它就已经在眼前。',en:'Ask for “the rooftop photo from May” and it’s already there.'},image:'yGT3O0d7ZuiADaNHAJU5dHeWk8.png'},
]
export const updates = [
  {slug:'dark-mode-is-here',version:'0.9',date:'2026-06-24',title:{zh:'深色模式来了',en:'Dark mode is here'},summary:{zh:'整个应用现已跟随系统主题。让眼睛更舒适，也让电池更持久。',en:'The whole app now follows your system theme. Easier on your eyes and your battery.'}},
  {slug:'sync-got-twice-as-fast',version:'0.8',date:'2026-06-10',title:{zh:'同步速度翻倍',en:'Sync got twice as fast'},summary:{zh:'即使网络不稳定，保存的内容也能在一秒内同步到所有设备。',en:'Captures now land on all your devices in under a second, even on spotty connections.'}},
  {slug:'second-beta-invite-wave',version:'0.7',date:'2026-05-28',title:{zh:'第二批内测邀请已发出',en:'Second beta invite wave'},summary:{zh:'又有两千位候补用户收到了邀请。快去看看你的收件箱。',en:'Two thousand more people from the waitlist just got invites. Check your inbox.'}},
  {slug:'first-testflight-build',version:'0.6',date:'2026-05-12',title:{zh:'首个 TestFlight 版本',en:'First TestFlight build'},summary:{zh:'第一个公开体验版本上线了，带着真实的探索与不断打磨的细节。',en:'The first public build is out, rough edges and all.'}},
]
export const article = {
  intro:{zh:'每个版本，都让我们离正式发布更近一步。这次，我们专注于你每天触碰的那些细节。',en:'Every build gets us closer to launch. This one focuses on the small things you touch every day.'},
  heading:{zh:'本次更新',en:'What’s new'},
  points:[{zh:'新的记录现在可在一秒内自动归档。',en:'The agent now files new captures in under a second.'},{zh:'更智能地推荐内容应该保存的位置。',en:'Smarter suggestions for where things belong.'},{zh:'修复了内测用户反馈的数十处小问题。',en:'Dozens of small fixes reported by beta testers.'}],
  why:{zh:'为什么重要',en:'Why it matters'},
  end:{zh:'我们希望你不必再为内容该放在哪里分心。这个版本，让我们离目标又近了一步。',en:'Newcomer exists so you stop thinking about where things go. This build gets us a step closer.'},
}
export const privacy = [
 {title:{zh:'我们收集的信息',en:'Information we collect'},body:{zh:'我们收集你主动提供的信息，例如加入候补名单时填写的邮箱，以及你选择保存在应用中的笔记、截图和计划。我们也会收集基本设备与使用数据，以保障产品稳定运行。本模板为演示，候补表单不会发送或保存数据。',en:'We collect what you give us directly, such as your email address when you join the waitlist, and the content you choose to save in the app: notes, screenshots, plans. We also collect basic device and usage data to keep the product working reliably. This template is a demo; the waitlist form does not send or save data.'}},
 {title:{zh:'我们如何使用信息',en:'How we use it'},body:{zh:'信息用于提供产品、回应咨询以及通知早期体验开放时间。我们不会出售你的数据，也不会在未经你同意时用你保存的内容训练模型。',en:'We use your information to run the product, respond when you reach out, and let you know when early access opens. We do not sell your data, and we do not use your saved content to train models without asking you first.'}},
 {title:{zh:'信息共享',en:'Sharing your information'},body:{zh:'我们仅向协助运营产品的服务提供方（如托管和邮件服务）共享其完成工作必需的信息。法律要求时，我们也可能披露相关信息。',en:'We only share information with the service providers who help us operate the product, such as hosting and email delivery, and only to the extent needed for them to do that job. We may also disclose information if required by law.'}},
 {title:{zh:'数据保留与安全',en:'Data retention and security'},body:{zh:'我们会在账户有效期间或提供服务所需的时间内保留信息，并采用行业标准保护措施。但任何存储或传输方式都无法保证绝对安全。',en:'We keep your information for as long as your account is active or as needed to provide the product. We use industry-standard safeguards to protect it, though no method of storage or transmission is ever completely secure.'}},
 {title:{zh:'你的权利',en:'Your rights'},body:{zh:'你可以随时请求访问、更正或删除个人信息，也可以通过邮件中的退订链接停止接收消息。',en:'You can ask us to access, correct, or delete your personal information at any time. You can also unsubscribe from any email using the link included in every message we send.'}},
 {title:{zh:'联系我们',en:'Contact us'},body:{zh:'如果你对本政策或信息处理方式有任何问题，请联系我们，我们会尽快回复。',en:'If you have questions about this policy or how your information is handled, reach out to us and we’ll get back to you as soon as we can.'}},
]
export const testimonials = [
 {name:'Alex Chen',handle:'@alexbuilds',image:'ehOrENUmJmUuet5r83o7hlI8BH8.webp',quote:{zh:'体验内测两周后，它已经替代了我主屏幕上的两个应用。团队的迭代速度很快。',en:'Been on the beta for two weeks and it has already replaced two apps on my home screen. The team ships fast.'},date:{zh:'2026 年 3 月 23 日 14:48',en:'2:48 PM · Mar 23, 2026'}},
 {name:'Maya Lindholm',handle:'@mayaships',image:'nnYDMI9DUmVLUgc1ljgCKdABQa0.webp',quote:{zh:'很少对一个候补名单如此期待。光是引导体验就值得好好研究。',en:'Rarely this excited about a waitlist. The onboarding alone is worth studying.'},date:{zh:'2026 年 4 月 2 日 09:12',en:'9:12 AM · Apr 2, 2026'}},
]
