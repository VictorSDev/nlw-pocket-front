import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '../ui/dialog'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from '../ui/radio-group'
import { X } from 'lucide-react'
import { Button } from '../ui/button'

const RadioItems = [
  { value: '1', text: '1x na semana', emoji: '🥱' },
  { value: '2', text: '2x na semana', emoji: '🙂' },
  { value: '3', text: '3x na semana', emoji: '😎' },
  { value: '4', text: '4x na semana', emoji: '😜' },
  { value: '5', text: '5x na semana', emoji: '🤨' },
  { value: '6', text: '6x na semana', emoji: '🤯' },
  { value: '7', text: 'Todos dias da semana', emoji: '🔥' },
]

export function CreateGoal() {
  return (
    <DialogContent>
      <div className="h-full flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <DialogTitle>Cadastrar meta</DialogTitle>
            <DialogClose>
              <X className="size-5 text-zinc-600" />
            </DialogClose>
          </div>
          <DialogDescription>
            Adicione atividades que{' '}
            <span className="underline">te fazem bem</span> e que você quer
            continuar praticando toda semana.
          </DialogDescription>
        </div>
        <form action="" className="flex flex-col flex-1 justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Qual a atividade?</Label>
              <Input
                id="title"
                autoFocus
                placeholder="Praticar exercícios, meditar, etc..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="">Quantas vezes na semana?</Label>
              <RadioGroup>
                {RadioItems.map(item => (
                  <RadioGroupItem key={item.value} value={item.value}>
                    <div className="flex flex-row flex-1 justify-between items-center gap-2">
                      <RadioGroupIndicator />
                      <span className="text-sm text-zinc-300 font-medium leading-none">
                        {item.text}
                      </span>
                      <span className="text-lg leading-none">{item.emoji}</span>
                    </div>
                  </RadioGroupItem>
                ))}
              </RadioGroup>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <DialogClose asChild>
              <Button variant="secondary" className="flex flex-1">
                Fechar
              </Button>
            </DialogClose>
            <Button className="flex flex-1">Salvar</Button>
          </div>
        </form>
      </div>
    </DialogContent>
  )
}
