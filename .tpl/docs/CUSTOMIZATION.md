# 修改指南

- 换品牌：编辑 `config/brand.ts`；业务页面不重复写品牌。
- 改双语文案、功能、更新及评价：编辑 `content/data.ts`，同时维护 zh/en。
- 改颜色、字体、间距、圆角和断点：编辑 `theme.css` 的主题变量及响应式规则。
- 改动效：入口在 `components/Motion.tsx`、`Ticker.tsx`、`WaitlistForm.tsx` 及 HomePage.tsx；保留减少动态效果和键盘访问。
- 改页面：在 pages 中编辑对应页面，同时同步 meta.ts、市场资料和项目预览合同。
- 换素材：更新 public/templates/newcomer/images 与来源清单，保留真实许可。

每次改动运行类型检查及相关验证；轮播拖拽、菜单锁定和滚动视差需实际操作。
