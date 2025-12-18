"use client"

import { ReactNode } from "react"
import { ModalProvider } from "./Modals/Modal"

interface ResultWrapperAttributes {
    children: ReactNode
}

const ResultModalWrapper: React.FC<ResultWrapperAttributes> = ({ children }) => {
    return (
        <ModalProvider>
            {children}
        </ModalProvider>
    )
}

export default ResultModalWrapper