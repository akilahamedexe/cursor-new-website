import { ArrowLeft } from 'lucide-react'
import Container from '../components/Container'
import { ButtonLink } from '../components/Button'

export default function NotFound() {
  return (
    <div className="py-20">
      <Container>
        <div className="rounded-[2.5rem] bg-white/5 p-10 ring-1 ring-white/10 sm:p-14">
          <div className="text-sm font-semibold text-white">404</div>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-3 max-w-xl text-pretty text-sm leading-relaxed text-zinc-300">
            This route doesn’t exist yet. Use the navigation to get back on track.
          </p>
          <div className="mt-8">
            <ButtonLink to="/" variant="secondary">
              <ArrowLeft className="size-4" /> Back home
            </ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  )
}

