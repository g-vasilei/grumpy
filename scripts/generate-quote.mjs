import { chromium } from 'playwright'
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

// --- Read queue ---
const queuePath = path.join(root, 'quotes-queue.json')
const queue = JSON.parse(readFileSync(queuePath, 'utf8'))
const pending = queue.filter((q) => !q.published)

if (pending.length === 0) {
  console.log('No pending quotes in queue. Exiting.')
  process.exit(0)
}

const quote = pending[0]
console.log(`Generating quote: "${quote.text}"`)

// --- Determine new ID ---
const projectsPath = path.join(root, 'src/data/projects.json')
const projects = JSON.parse(readFileSync(projectsPath, 'utf8'))
const newId = projects.length + 1

// --- Assets as base64 ---
const toBase64 = (filePath) =>
  `data:image/png;base64,${readFileSync(path.join(root, filePath)).toString('base64')}`

const quotationMark = toBase64('public/imgs/icons/quotation-mark.png')
const footerImg     = toBase64('public/imgs/icons/grumpy-footer.png')

// --- Shared CSS values ---
const fontLink = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@600&display=swap" rel="stylesheet">
`

const sharedStyles = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    background: linear-gradient(to top right, #103028, #3C786A);
    font-family: 'Lexend Deca', sans-serif;
    position: relative;
    overflow: hidden;
  }
  .content {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text-wrap {
    position: relative;
    text-align: center;
  }
  .quote-text {
    color: #ffffff;
    font-weight: 600;
    font-size: 48px;
    letter-spacing: -0.07em;
    line-height: 1.3;
  }
  .quote-mark {
    position: absolute;
    top: 0;
    object-fit: contain;
    opacity: 0.9;
  }
  .footer {
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    object-fit: contain;
  }
`

// --- HTML templates ---
function quoteHtml(text) {
  return `<!DOCTYPE html>
<html>
<head>
  ${fontLink}
  <style>
    html, body { width: 1080px; height: 1080px; }
    ${sharedStyles}
    .content { padding: 80px 110px 220px; }
    .quote-mark { right: -58px; width: 42px; height: 42px; }
    .footer { height: 60px; }
  </style>
</head>
<body>
  <div class="content">
    <div class="text-wrap">
      <p class="quote-text">${text}</p>
      <img class="quote-mark" src="${quotationMark}" alt="" />
    </div>
  </div>
  <img class="footer" src="${footerImg}" alt="Grumpy" />
</body>
</html>`
}

function storyHtml(text) {
  return `<!DOCTYPE html>
<html>
<head>
  ${fontLink}
  <style>
    html, body { width: 1088px; height: 1928px; }
    ${sharedStyles}
    .content { padding: 120px 140px 280px; }
    .quote-mark { right: -64px; width: 48px; height: 48px; }
    .footer { height: 70px; }
  </style>
</head>
<body>
  <div class="content">
    <div class="text-wrap">
      <p class="quote-text">${text}</p>
      <img class="quote-mark" src="${quotationMark}" alt="" />
    </div>
  </div>
  <img class="footer" src="${footerImg}" alt="Grumpy" />
</body>
</html>`
}

// --- Launch browser and generate both images ---
const browser = await chromium.launch()

async function screenshot(html, width, height, outputPath) {
  const page = await browser.newPage()
  await page.setViewportSize({ width, height })
  await page.setContent(html, { waitUntil: 'networkidle' })
  await page.waitForTimeout(500)
  await page.screenshot({ path: outputPath, clip: { x: 0, y: 0, width, height } })
  await page.close()
  console.log(`Saved: ${outputPath}`)
}

const quotePath = path.join(root, `public/imgs/quotes/quotes-${newId}.png`)
const storyPath = path.join(root, `public/imgs/story/i-${newId}.png`)

await screenshot(quoteHtml(quote.text), 1080, 1080, quotePath)
await screenshot(storyHtml(quote.text), 1088, 1928, storyPath)

await browser.close()

// --- Update projects.json ---
projects.push({
  id: newId,
  title: quote.title,
  description: quote.description,
  isPinned: false,
  slug: quote.slug,
  img: `/imgs/quotes/quotes-${newId}.png`,
  seoTitle: quote.seoTitle,
  seoDescription: quote.seoDescription,
})
writeFileSync(projectsPath, JSON.stringify(projects, null, 2))
console.log(`Updated projects.json — new entry: ${quote.slug}`)

// --- Mark as published in queue ---
const updated = queue.map((q) =>
  q.slug === quote.slug ? { ...q, published: true, publishedAt: new Date().toISOString() } : q
)
writeFileSync(queuePath, JSON.stringify(updated, null, 2))
console.log(`Marked as published: ${quote.slug}`)
