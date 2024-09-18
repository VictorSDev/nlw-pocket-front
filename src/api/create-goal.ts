import type { CreateGoalType } from '../types/create-goal'

export async function createGoal({
  title,
  desiredWeeklyFrequency,
}: CreateGoalType) {
  await fetch('http://localhost:8080/goals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      desiredWeeklyFrequency,
    }),
  })
}
