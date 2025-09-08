<p align="center">
  <img src="assets/banner.png" alt="OpenCourse Banner" />
</p>
<p align="center">
  <a href="https://www.opencourse.in"><img src="https://img.shields.io/badge/Live-Demo-orange?logo=vercel" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg" /></a>
  <a href="#-contributing"><img src="https://img.shields.io/badge/Contributions-Welcome-blue.svg" /></a>
  <img src="https://img.shields.io/badge/Made%20with-Next.js-black?logo=next.js" />
  <img src="https://img.shields.io/github/stars/The-Karan/OpenCourse?style=social" />
  <img src="https://img.shields.io/github/forks/The-Karan/OpenCourse?style=social" />
</p>

name: Auto Commit
on:
  schedule:
    - cron: "0 0 * * *"
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Commit changes
        run: |
          date > update.txt
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add update.txt
          git commit -m "Daily auto update"
          git push

