import styles from '../../styles/modal.module.css'

export function ModalButton({isOpen, setIsOpen}) {
    
    function openModal() {
        setIsOpen(true)
    }
    return (
        <span onClick={openModal} className={styles.button}>
            Заказать услугу
        </span>
    )
}