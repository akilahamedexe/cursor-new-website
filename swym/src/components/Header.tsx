import { Menu, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { agency, nav } from '../content/site'
import { ButtonLink } from './Button'
import Container from './Container'

function BrandMark() {
  return (
    <div className="relative grid size-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
      <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.35),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.25),transparent_55%)]" />
      <div className="relative text-sm font-semibold tracking-wide text-white">{agency.name}</div>
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  const links = useMemo(() => nav, [])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/60 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <BrandMark />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide text-white">{agency.name}</div>
              <div className="text-xs text-zinc-400">{agency.location}</div>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  [
                    'rounded-full px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition',
                    isActive ? 'bg-white/5 text-white ring-1 ring-white/10' : '',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ButtonLink to="/contact" variant="secondary">
              Start a project
            </ButtonLink>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-zinc-200 hover:bg-white/5 ring-1 ring-white/10 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-white/10 bg-zinc-950/70 backdrop-blur md:hidden">
          <Container>
            <div className="flex flex-col gap-1 py-4">
              {links.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    [
                      'rounded-2xl px-4 py-3 text-sm text-zinc-200 hover:text-white hover:bg-white/5 transition',
                      isActive ? 'bg-white/5 text-white ring-1 ring-white/10' : '',
                    ].join(' ')
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-2">
                <ButtonLink to="/contact" variant="primary" className="w-full">
                  Start a project
                </ButtonLink>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  )
}

