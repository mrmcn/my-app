import { createContext, useContext, useState } from 'react'

const ModalContext = createContext<ValueProps | null>(null)
export default function useModalContext() {
  const modalContext = useContext(ModalContext)

  if (!modalContext) {
    throw new Error(
      'useCurrentUser has to be used within <CurrentUserContext.Provider>',
    )
  }
  return useContext(ModalContext)
}

export function ModalContextProvider({ children }: ChildrenProps) {
  const [openCategoriesMenu, setOpenCategoriesMenu] = useState(false)
  const [openNavBar, setOpenNavBar] = useState(false)
  const [openCart, setOpenCart] = useState(false)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [isClosingFilters, setIsClosingFilters] = useState(false)
  const value = {
    openCategoriesMenu,
    setOpenCategoriesMenu,
    openNavBar,
    setOpenNavBar,
    openCart,
    setOpenCart,
    filtersOpen,
    setFiltersOpen,
    isClosingFilters,
    setIsClosingFilters,
  }

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

interface ValueProps {
  openCategoriesMenu: boolean
  setOpenCategoriesMenu: React.Dispatch<React.SetStateAction<boolean>>
  openNavBar: boolean
  setOpenNavBar: React.Dispatch<React.SetStateAction<boolean>>
  openCart: boolean
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>
  filtersOpen: boolean
  setFiltersOpen: React.Dispatch<React.SetStateAction<boolean>>
  isClosingFilters: boolean
  setIsClosingFilters: React.Dispatch<React.SetStateAction<boolean>>
}

interface ChildrenProps {
  children: React.ReactNode
}
