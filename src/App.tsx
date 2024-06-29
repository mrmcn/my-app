import { ThemeProvider } from '@mui/material'
import { QueryClientProvider } from '@tanstack/react-query'
import { ModalContextProvider } from './context/modal'
import { queryClient } from './query-client'
import Router from './router'
import { theme } from './theme'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ModalContextProvider>
          <Router />
        </ModalContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
