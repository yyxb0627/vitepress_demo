---
layout: home
title: vitepress-demo
---

<div class="hero-container">
  <h1>欢迎来到 <span class="highlight">商汤秒画</span></h1>
  <p class="description">
    商汤科技推出的 <strong>秒画（SenseMirage）</strong> 是一款强大的 <br />
    AI 绘画平台，用户可以通过输入文本提示词或上传图片，<br />
    快速生成高质量的图像作品。
  </p>

  <a href="./docs/miaohua" class="cta-button">查看秒画文档</a>
</div>

<style scoped>
/* 页面整体样式 */
.hero-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh; /* 保持内容居中 */
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1.5s ease-in-out;
}

/* 主要标题 */
.hero-container h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  animation: slideIn 1.2s ease-out;
}

/* 标题中的高亮部分 */
.highlight {
  background: linear-gradient(90deg, #ff9a9e, #fad0c4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* 描述文字 */
.description {
  font-size: 1.4rem;
  line-height: 1.6;
  max-width: 700px;
  opacity: 0.9;
  animation: fadeIn 2s ease-in-out;
}

/* CTA 按钮 */
.cta-button {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 28px;
  font-size: 1.2rem;
  font-weight: bold;
  background: #ff8c00;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0 4px 20px rgba(255, 140, 0, 0.4);
  transition: all 0.3s ease;
  animation: fadeIn 2.5s ease-in-out;
}

.cta-button:hover {
  background: #ff6a00;
  box-shadow: 0 4px 30px rgba(255, 140, 0, 0.6);
  transform: scale(1.05);
}

/* 响应式优化 */
@media (max-width: 768px) {
  .hero-container h1 {
    font-size: 2.5rem;
  }

  .description {
    font-size: 1.2rem;
  }

  .cta-button {
    padding: 10px 20px;
    font-size: 1rem;
  }
}

/* 淡入动画 */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* 标题滑入 */
@keyframes slideIn {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
