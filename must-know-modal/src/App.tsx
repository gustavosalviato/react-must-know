import { useState } from 'react'
import './App.css'
import { Modal } from './components/Modal'
import { X } from 'phosphor-react'
export function App() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  function handleOpenModal() {
    setIsOpenModal(true)
  }

  function handleCloseModal() {
    setIsOpenModal(false)
  }

  return (
    <>
      <div className='container'>
        <h1>Click to open Modal</h1>

        <button
          className='bt-open-modal'
          onClick={handleOpenModal}
        >
          Open Modal
        </button>
      </div>

      <Modal isOpenModal={isOpenModal}>
        <h1>Oww! Modal is Open</h1>
        <strong>Click 'X' to close modal!</strong>

        <button
          onClick={handleCloseModal}
          className='close'
        >
          <X fontWeight="bold"
            size={24}
          />
        </button>
      </Modal>
    </>
  )
}
