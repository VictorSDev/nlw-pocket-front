import { CheckCircle2, Plus } from 'lucide-react'
import { Button } from '../ui/button'
import { InOrbitIcon } from '../icons/inorbit-icon'
import { Progress, ProgressIndicator } from '../ui/progress-bar'
import { DialogTrigger } from '../ui/dialog'
import { Separator } from '../ui/separator'
import type { SummaryType } from '../../types/summary'
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-BR'
import { PendingGoals } from './pending-goals'

dayjs.locale(ptBR)
export function Summary({ completed, goalsPerDay, total }: SummaryType) {
  const firstDayOfWeek = dayjs().startOf('week').format('DD[ de ]MMM')
  const lastDayOfWeek = dayjs().endOf('week').format('DD[ de ]MMM')

  const percentCompletedGoals = Math.round((completed / total) * 100)

  return (
    <div className="max-w-[480px] flex flex-col gap-6 py-10 px-5 mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold leading-tight tracking-tight capitalize">
            {firstDayOfWeek} - {lastDayOfWeek}
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
        <Progress value={completed} max={total}>
          <ProgressIndicator style={{ width: `${percentCompletedGoals}%` }} />
        </Progress>
        <div className="flex justify-between items-center text-xs text-zinc-400 ">
          <span>
            Você completou <span className="text-zinc-100">{completed}</span> de{' '}
            <span className="text-zinc-100">{total}</span> metas nessa semana.
          </span>
          <span>{`${percentCompletedGoals}%`}</span>
        </div>
      </div>

      <Separator />

      <PendingGoals />

      {completed <= 0 ? (
        <span className="text-sm text-zinc-400 leading-relaxed">
          Você ainda não completou nenhuma meta essa semana.
        </span>
      ) : (
        <div className="flex flex-col gap-6">
          <h2 className="text-xl text-zinc-100 font-medium">Sua Semana</h2>
          {Object.entries(goalsPerDay).map(([date, goals]) => {
            const weekDay = dayjs(date).format('dddd')
            const formattedDate = dayjs(date).format('D[ de ]MMMM')
            return (
              <div className="flex flex-col gap-4" key={date}>
                <h3 className="font-medium capitalize">
                  {weekDay}{' '}
                  <span className="text-xs text-zinc-400 normal-case">
                    ({formattedDate})
                  </span>
                </h3>
                <ul className="flex flex-col gap-3">
                  {goals.map(goal => {
                    const time = dayjs(goal.completedAt).format('HH:mm')
                    return (
                      <li className="flex items-center gap-2" key={goal.id}>
                        <CheckCircle2 className="size-4 text-pink-400" />
                        <span className="text-sm text-zinc-400">
                          Você completou “
                          <span className="text-zinc-100 font-medium">
                            {goal.title}
                          </span>
                          ” às{' '}
                          <span className="text-zinc-100 font-medium">
                            {time}h
                          </span>
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
