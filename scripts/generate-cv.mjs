import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outputPath = join(__dirname, '../public/Sue-Ryu-CV-v2.pdf')

const ink = rgb(0.1, 0.14, 0.2)
const muted = rgb(0.36, 0.4, 0.47)
const accent = rgb(0.24, 0.36, 0.43)

const sections = [
  {
    title: 'Work Experience',
    items: [
      {
        heading: 'Project Manager — Air New Zealand',
        period: 'Apr 2025 – Jun 2026',
        bullets: [
          'Developed and maintained project plans, schedules and budgets to ensure successful delivery on time and within budget',
          'Engaged and aligned key stakeholders across business units to ensure clarity of project goals and deliverables',
          'Coordinated cross-functional teams to solve complex problems and remove blockers during project execution',
        ],
      },
      {
        heading: 'Finance Specialist — Air New Zealand',
        period: 'Apr 2023 – Apr 2025',
        bullets: [
          'Financial reporting and analysis — conducting in-depth financial analysis and reporting to support strategic decision-making and providing insights on cost management',
          'Budgeting and forecasting — comparing actual performance against targets to drive financial accountability and business performance',
          'Stakeholder collaboration — partnering with various squads to translate financial data into actionable insights, supporting business objectives',
        ],
      },
      {
        heading: 'Senior Assurance Associate — Ernst & Young',
        period: 'Mar 2020 – Apr 2023',
        bullets: [
          'Audit and compliance — conducting financial audits for clients across various industries, ensuring compliance with IFRS / NZ GAAP and regulatory requirements',
          'Risk assessment and internal controls — evaluated internal controls and identified risks, providing recommendations to improve financial reporting accuracy',
          'Stakeholder engagement — collaborated with clients and senior auditors to gather financial data, assess audit findings, and deliver key insights to support informed decision-making',
        ],
      },
    ],
  },
  {
    title: 'Education / Qualifications',
    items: [
      {
        heading: 'Provisional Member — CAANZ',
        period: '2020 – Present',
        lines: [
          'Completed modules: Tax, Financial Accounting, Management and Applied Finance, Audit, Capstone',
        ],
      },
      {
        heading: 'Bachelor of Commerce / Arts — University of Auckland',
        period: '2015 – 2019',
        lines: ['Accounting, Psychology, Criminology'],
      },
    ],
  },
  {
    title: 'Extracurricular Activities',
    items: [
      {
        heading: 'Yo Pro Network Lead — Air New Zealand',
        lines: [
          'Leading the planning and execution of events for the Yo Pro Network, creating opportunities for networking, professional growth, and community-building among early-career employees.',
        ],
      },
      {
        heading: 'Year Group Lead & Social Committee — Ernst & Young',
        lines: [
          'Ensuring voices of colleagues are heard at monthly meetings held with other year group leaders and Partners. Organising social functions for the assurance service line (monthly and quarterly).',
        ],
      },
    ],
  },
]

function wrapText(text, maxWidth, font, size) {
  const words = text.split(/\s+/)
  const lines = []
  let current = ''

  for (const word of words) {
    const next = current ? `${current} ${word}` : word
    if (font.widthOfTextAtSize(next, size) <= maxWidth) {
      current = next
    } else {
      if (current) lines.push(current)
      current = word
    }
  }

  if (current) lines.push(current)
  return lines
}

async function generateCv() {
  const pdf = await PDFDocument.create()
  const regular = await pdf.embedFont(StandardFonts.Helvetica)
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold)

  const pageWidth = 595
  const pageHeight = 842
  const margin = 48
  const contentWidth = pageWidth - margin * 2

  let page = pdf.addPage([pageWidth, pageHeight])
  let y = pageHeight - margin

  const ensureSpace = (needed) => {
    if (y - needed < margin) {
      page = pdf.addPage([pageWidth, pageHeight])
      y = pageHeight - margin
    }
  }

  const drawLine = (height = 14) => {
    y -= height
  }

  page.drawText('Sue Ryu', { x: margin, y, size: 22, font: bold, color: ink })
  drawLine(26)

  page.drawText('Project Manager | Finance Professional', {
    x: margin,
    y,
    size: 11,
    font: regular,
    color: accent,
  })
  drawLine(18)

  page.drawText('Auckland, New Zealand  |  021 075 9773  |  sue.ryu@hotmail.com', {
    x: margin,
    y,
    size: 9.5,
    font: regular,
    color: muted,
  })
  drawLine(24)

  for (const section of sections) {
    ensureSpace(40)
    page.drawText(section.title.toUpperCase(), {
      x: margin,
      y,
      size: 10,
      font: bold,
      color: accent,
    })
    drawLine(6)
    page.drawLine({
      start: { x: margin, y },
      end: { x: margin + 72, y },
      thickness: 1,
      color: accent,
    })
    drawLine(16)

    for (const item of section.items) {
      ensureSpace(60)
      page.drawText(item.heading, { x: margin, y, size: 10.5, font: bold, color: ink })
      drawLine(14)

      if (item.period) {
        page.drawText(item.period, { x: margin, y, size: 9, font: regular, color: muted })
        drawLine(14)
      }

      if (item.lines) {
        for (const line of item.lines) {
          const wrapped = wrapText(line, contentWidth, regular, 9)
          for (const textLine of wrapped) {
            ensureSpace(14)
            page.drawText(textLine, { x: margin, y, size: 9, font: regular, color: muted })
            drawLine(13)
          }
        }
      }

      if (item.bullets) {
        for (const bullet of item.bullets) {
          const wrapped = wrapText(bullet, contentWidth - 12, regular, 9)
          for (let i = 0; i < wrapped.length; i++) {
            ensureSpace(14)
            const prefix = i === 0 ? '- ' : '  '
            page.drawText(`${prefix}${wrapped[i]}`, {
              x: margin,
              y,
              size: 9,
              font: regular,
              color: muted,
            })
            drawLine(13)
          }
        }
      }

      drawLine(8)
    }

    drawLine(6)
  }

  const bytes = await pdf.save()
  writeFileSync(outputPath, bytes)
  console.log(`Generated ${outputPath}`)
}

generateCv().catch((error) => {
  console.error(error)
  process.exit(1)
})
