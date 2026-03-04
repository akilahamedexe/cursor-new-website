import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost'

const variants: Record<Variant, string> = {
  primary:
    'bg-white text-zinc-950 hover:bg-zinc-100 focus-visible:outline-zinc-100',
  secondary:
    'bg-zinc-900/60 text-zinc-50 ring-1 ring-white/10 hover:bg-zinc-900 focus-visible:outline-white/20',
  ghost:
    'bg-transparent text-zinc-50 hover:bg-white/5 ring-1 ring-white/10 focus-visible:outline-white/20',
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; className?: string }
>) {
  return (
    <button
      className={[
        'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium',
        'transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

export function ButtonLink({
  children,
  to,
  variant = 'primary',
  className = '',
}: PropsWithChildren<{ to: string; variant?: Variant; className?: string }>) {
  return (
    <Link
      to={to}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium',
        'transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        variants[variant],
        className,
      ].join(' ')}
    >
      {children}
    </Link>
  )
}

