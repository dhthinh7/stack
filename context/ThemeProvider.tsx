"use client"
import { TTheme } from "@/types";
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";

type TThemProvider = {
  children: ReactNode
}

interface IThemeContext {
  mode: TTheme,
  // eslint-disable-next-line no-unused-vars
  setMode: (theme: TTheme) => void
}

const ThemContext = createContext<IThemeContext | undefined>(undefined)

export const ThemProvider = ({ children }: TThemProvider) => {
  const [mode, setMode] = useState<TTheme>(() => {
    return (typeof window !== 'undefined') ? window.localStorage.theme || 'light' : 'light'
  })

  const handleThemChange = useCallback(() => {
    if (mode === 'dark') {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }, [mode])

  useEffect(() => {
    handleThemChange()
  }, [handleThemChange])

  return (
    <ThemContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemContext)

  if (!context) {
    throw new Error('useThem must be used in ThemProvider')
  }

  return context
}