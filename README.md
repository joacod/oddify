<div align="center">

# Oddify

[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/joacod/oddify/blob/main/LICENSE)

[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/oddify)
[![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)

</div>

## 👋 Introduction

An odd looking UI component library for [Astro](https://astro.build/) 🚀

## 📚 Documentation

<p align="center">
  <img width="80%" src="https://github.com/joacod/oddify/blob/main/docs/public/oddify.webp" alt="Oddify Documentation">
</p>

To run the documentation and see all available components, you can run the following commands.

```bash
cd docs
pnpm i
pnpm run dev
```

## 💻 Development

**Install library:**

```bash
npm i oddify
```

**Configure tsconfig.json in your project:**

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@oddify": ["../lib.astro"]
    }
  }
}
```

**Use component example:**

```bash
---
import {Button} from "@oddify";
---

<Button>Click Me</Button>
```

## ☕️ Did you like the project?

You can colaborate with me giving a star ⭐️ to the project or

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/joacod)

Thanks! 😃
