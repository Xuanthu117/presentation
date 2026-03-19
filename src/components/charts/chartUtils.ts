import type { TooltipItem } from 'chart.js';

export function wrapLabel(label: string): string | string[] {
  if (label.length <= 16) return label

  const words = label.split(' ')
  const lines: string[] = []
  let currentLine = words[0] ?? ''

  for (let index = 1; index < words.length; index += 1) {
    const word = words[index]
    if (currentLine.length + word.length + 1 <= 16) {
      currentLine += ` ${word}`
    } else {
      lines.push(currentLine)
      currentLine = word
    }
  }

  lines.push(currentLine)
  return lines
}

export const tooltipConfig = {
  callbacks: {
    title(tooltipItems: TooltipItem<'doughnut' | 'radar' | 'bar'>[]) {
      const item = tooltipItems[0]
      const label = item.chart.data.labels?.[item.dataIndex] as string | string[] | undefined
      return Array.isArray(label) ? label.join(' ') : (label ?? '')
    }
  }
}