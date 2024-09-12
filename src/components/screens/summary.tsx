import { CircleCheck, Plus } from 'lucide-react'
import { Button } from '../ui/button'
import { InOrbitIcon } from '../icons/inorbit-icon'
import { Progress, ProgressIndicator } from '../ui/progress-bar'
import { DialogTrigger } from '../ui/dialog'
import { Separator } from '../ui/separator'
import { OutlineButton } from '../ui/outline-button'

const Goals = [
  { title: 'Meditar' },
  { title: 'Nadar' },
  { title: 'Ir à academia' },
  { title: 'Correr' },
  { title: 'Aula de inglês' },
]

const GoalsCompletedDate = [
  {
    date: '12-09',
    goalsCompleted: [
      {
        title: 'Acordar cedo',
        time: '5:02h',
      },
      {
        title: 'Ir à academia',
        time: '6:14h',
      },
      {
        title: 'Meditar',
        time: '5:22h',
      },
    ],
  },
  {
    date: '11-09',
    goalsCompleted: [
      {
        title: 'Acordar cedo',
        time: '5:06h',
      },
      {
        title: 'Ir à academia',
        time: '6:07h',
      },
    ],
  },
  {
    date: '10-09',
    goalsCompleted: [
      {
        title: 'Acordar cedo',
        time: '5:22h',
      },
      {
        title: 'Ir à academia',
        time: '6:16h',
      },
      {
        title: 'Ir à aula',
        time: '18:22h',
      },
    ],
  },
]

export function Summary() {
  return (
    <div className="max-w-[480px] flex flex-col gap-6 py-10 px-5 mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold leading-tight tracking-tight">
            05 a 12 de Agosto
          </span>
        </div>
        <DialogTrigger asChild>
          <Button type="button" size="sm">
            <Plus className="size-4 text-violet-50" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress>
          <ProgressIndicator />
        </Progress>
        <div className="flex justify-between items-center">
          <p className="text-xs text-zinc-400 leading-relaxed">
            Você completou <span className="text-zinc-100">8</span> de{' '}
            <span className="text-zinc-100">15</span> metas nessa semana.
          </p>
          <p className="text-xs text-zinc-400 leading-relaxed">58%</p>
        </div>
      </div>

      <Separator />

      <div className="flex flex-wrap items-center gap-2">
        {Goals.map(goal => (
          <OutlineButton key={goal.title}>
            <Plus className="size-4 text-zinc-600" />
            <span className="text-sm text-zinc-300">{goal.title}</span>
          </OutlineButton>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        <span className="text-xl text-zinc-100 font-medium leading-snug tracking-tight">
          Sua Semana
        </span>

        {/* <span className="text-sm text-zinc-400 leading-relaxed">
          Você ainda não completou nenhuma meta essa semana.
        </span> */}
        {GoalsCompletedDate.map(goalCompletedDate => (
          <div className="flex flex-col gap-4" key={goalCompletedDate.date}>
            <span className="text-zinc-50 font-medium leading-snug">
              {goalCompletedDate.date === '12-09'
                ? 'Hoje '
                : goalCompletedDate.date === '11-09'
                  ? 'Ontem'
                  : goalCompletedDate.date}{' '}
              <span className="text-xs text-zinc-400 leading-snug">
                {goalCompletedDate.date === '12-09'
                  ? '(12 de Setembro)'
                  : goalCompletedDate.date === '11-09'
                    ? '(11 de Setembro)'
                    : null}
              </span>
            </span>
            <div className="flex flex-col gap-3">
              {goalCompletedDate.goalsCompleted.map(goalCompleted => (
                <div
                  className="flex items-center gap-2"
                  key={goalCompleted.title}
                >
                  <CircleCheck className="size-4 text-pink-400" />
                  <span className="text-sm text-zinc-400 leading-snug">
                    Você completou “
                    <span className="text-zinc-100 font-medium">
                      {goalCompleted.title}
                    </span>
                    ” às{' '}
                    <span className="text-zinc-100 font-medium">
                      {goalCompleted.time}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
