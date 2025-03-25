---
layout: home
title: vitepress-demo
---

# 欢迎来到商汤秒画

商汤科技推出的 **秒画（SenseMirage）** 是一款强大的 **AI 绘画平台**，用户可以通过输入文本提示词或上传图片，快速生成高质量的图像作品。

<div class="hero-section">
  <h1>探索未来的创意绘画</h1>
  <p>无论是文本提示生成图像，还是上传图片获取创意修改，秒画都能为你提供无与伦比的艺术创作体验。</p>

  <!-- 跳转按钮 -->
  <a href="/docs/miaohua" class="cta-button">查看秒画文档</a>
</div>

<script setup lang="ts">
// 无需使用 <Home /> 组件，去掉它
</script>

<style scoped>
/* 页面主容器 */
.hero-section {
  background: url('https://example.com/your-image.jpg') no-repeat center center;
  background-size: cover;
  color: white;
  padding: 100px 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  margin-top: 40px;
  animation: fadeIn 2s ease-out;
}

/* 为背景区域添加渐变效果 */
.hero-section:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
}

/* 文字特效 */
.hero-section h1 {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
  animation: slideInFromLeft 1.5s ease-out;
}

/* 副标题特效 */
.hero-section p {
  font-size: 1.5rem;
  margin-bottom: 30px;
  opacity: 0.9;
  animation: fadeIn 1s ease-out;
}

/* 按钮样式 */
.cta-button {
  display: inline-block;
  padding: 14px 30px;
  font-size: 1.2rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0 4px 20px rgba(0, 123, 255, 0.4);
  transition: all 0.3s ease;
  transform: scale(1);
}

.cta-button:hover {
  background-color: #0056b3;
  box-shadow: 0 4px 30px rgba(0, 123, 255, 0.6);
  transform: scale(1.05);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-section {
    padding: 60px 20px;
  }

  .hero-section h1 {
    font-size: 2.5rem;
  }

  .hero-section p {
    font-size: 1.2rem;
  }

  .cta-button {
    padding: 12px 25px;
    font-size: 1rem;
  }
}

/* 动画效果：渐变、滑入和淡入 */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
