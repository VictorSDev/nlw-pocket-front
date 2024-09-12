import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/screens/create-goal'
import { Summary } from './components/screens/summary'
// import { EmptyGoals } from './components/screens/empty-goals'

export function App() {
  return (
    <Dialog>
      {/* <EmptyGoals /> */}
      <Summary />
      <CreateGoal />
    </Dialog>
  )
}
