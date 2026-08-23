'use client'

import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'

interface LinkProps {
  to: string
  children: React.ReactNode
  className?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export default function Link({ to, children, className = '', onClick }: LinkProps) {
  const isExternal = to.startsWith('http')
  const isAnchor = to.startsWith('#')

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>) => {
    if (isAnchor) {
      e.preventDefault()
      const element = document.querySelector(to)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    onClick?.(e as React.MouseEvent<HTMLAnchorElement>)
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

  if (isAnchor) {
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

  return (
    <RouterLink to={to} className={className} onClick={handleClick}>
      {children}
    </RouterLink>
  )
}