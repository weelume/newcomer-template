# 架构

应用采用 feature-based 结构。`src/features/site-templates/catalog/newcomer/config/brand.ts` 保存品牌；`content/data.ts` 保存双语业务文案和更新数据；`theme.css` 定义主题、响应式和局部滚动条；`components/` 实现菜单、表单、轮播、视差和手机预览；`pages/` 组合业务页面；`meta.ts` 定义页面懒加载。`src/app/[[...slug]]/page.tsx` 解析页面及语言，未知路由返回 404。

`host.tsx` 提供可选品牌、Logo、市场入口与页脚注入。模板默认使用自己的品牌，不依赖宿主专属数据。图片和字体位于 public/templates/newcomer。模板不包含后端、数据库、AI 调用或真实邮件发送。
