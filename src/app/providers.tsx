'use client'

import { useEffect, useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { ThemeProvider } from '../components/ThemeProvider'
import i18n from '../i18n/settings'
import { store } from './store/store'

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </I18nextProvider>
    </Provider>
  )
}
