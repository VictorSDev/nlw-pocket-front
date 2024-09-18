import type { PendingGoalsType } from '../types/pending-goals'

export async function getPendingGoals(): Promise<PendingGoalsType> {
  const response = await fetch('http://localhost:8080/pending-goals')
  const data = await response.json()

  return data.pendingGoals
}
