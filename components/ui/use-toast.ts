// Placeholder for use-toast.ts
// This file should contain the logic for managing toasts
// For now, we'll create a simple placeholder

import { useState } from 'react'

type Toast = {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
}

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (toast: Omit<Toast, 'id'>) => {
    setToasts((prevToasts) => [
      ...prevToasts,
      { ...toast, id: Date.now().toString() },
    ])
  }

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }

  return { toasts, addToast, removeToast }
}