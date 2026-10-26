# Newcomer · 随身 AI 助手模板

Next.js、React、TypeScript 与 Framer Motion 构建的双语产品官网，包含首页、更新列表、4 篇更新详情及隐私政策。默认中文，英文路径为 `/en`。响应式支持桌面、平板、手机。

固定 Node 与 pnpm 版本见 `.nvmrc` 与 `package.json`。运行 `pnpm install --frozen-lockfile`，再运行 `pnpm dev`，访问 `http://127.0.0.1:43620`；Ctrl+C 停止。`PORT` 可调整端口。不需要业务服务或秘密环境变量。

验证：`pnpm typecheck`、`pnpm lint`、`pnpm test`、`pnpm build`。`pnpm bundle` 生成供宿主固定摘要引用的包。

首读 `.tpl/README.md`。演示表单只做本地校验，不发送或保存邮箱。参考站素材的商业和再分发许可尚未核实，不能由本仓库推断取得授权。验收状态以实际报告为准。
