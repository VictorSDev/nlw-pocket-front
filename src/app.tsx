import { Dialog } from './components/ui/dialog'

import { CreateGoal } from './components/screens/create-goal'
import { Summary } from './components/screens/summary'
import { EmptyGoals } from './components/screens/empty-goals'

import { useQuery } from '@tanstack/react-query'
import { getSummary } from './api/get-summary'

export function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
  })

  return (
    <Dialog>
      {data && data.total > 0 ? (
        <Summary
          completed={data.completed}
          total={data.total}
          goalsPerDay={data.goalsPerDay}
        />
      ) : (
        <EmptyGoals />
      )}{' '}
      <CreateGoal />
    </Dialog>
  )
}
