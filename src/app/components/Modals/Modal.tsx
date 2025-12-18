"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

const ModalContext = createContext<ModalAttributes> ({
    isModalStatusOpen: false,
    setModalStatusOpen: () => {}
})

interface ModalAttributes {
    isModalStatusOpen: boolean,
    setModalStatusOpen: (isOpen: boolean) => void
}

export const ModalProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [isModalStatusOpen, setModalStatusOpen] = useState(false)

    return (
        <ModalContext.Provider value={{ isModalStatusOpen, setModalStatusOpen }} >
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)