import logo from '../../assets/logo.svg'
import letsStart from '../../assets/lets-start.svg'
import { Plus } from 'lucide-react'
import { Button } from '../ui/button'
import { DialogTrigger } from '../ui/dialog'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col justify-center items-center p-5 gap-8">
      <img src={logo} alt="logo-inorbit-img" />
      <img src={letsStart} alt="lets-start-img" />
      <div className="flex flex-col justify-center items-center gap-5">
        <p className="max-w-80 text-center text-zinc-300 leading-relaxed">
          Você ainda não cadastrou nenhuma meta, que tal{' '}
          <span className="underline cursor-pointer">cadastrar um</span> agora
          mesmo?
        </p>
        <DialogTrigger asChild>
          <Button>
            <Plus className="size-4 text-white" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>
    </div>
  )
}
