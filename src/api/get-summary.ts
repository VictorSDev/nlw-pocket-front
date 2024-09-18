import type { SummaryType } from '../types/summary'

export async function getSummary(): Promise<SummaryType> {
  const response = await fetch('http://localhost:8080/summary')
  const data = await response.json()

  return data.summary
}
