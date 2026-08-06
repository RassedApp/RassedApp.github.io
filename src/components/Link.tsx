'use client'

import { motion } from 'framer-motion'

interface LinkProps {
  to: string
  children: React.ReactNode
  className?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export default function Link({ to, children, className = '', onClick }: LinkProps) {
  const isExternal = to.startsWith('http')
  const isAnchor = to.startsWith('#')

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isAnchor) {
      e.preventDefault()
      const element = document.querySelector(to)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    onClick?.(e)
  }

  if (isExternal) {
    return (
      <motion.a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.a
      href={to}
      className={className}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  )
}