import './styles.css'

export interface ModalProps {
    children: React.ReactNode
    isOpenModal: boolean
}

export function Modal({ children, isOpenModal }: ModalProps) {
    if (isOpenModal) {
        return (
            <div className='portal'>
                <div className='modal-content'>
                    {children}
                </div>
            </div>
        )
    }

    return null

}