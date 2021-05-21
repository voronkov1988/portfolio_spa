import styles from '../../styles/modal.module.css'

export function ModalContent({ isOpen }) {
    return (
        <>
            {
                isOpen
                    ? <div className={styles.modalWrap}>
                        <p className={styles.descr}>Для того чтобы получить оценку стоимости работ, пожалуйста, введите ваше имя, номер телефона для связи и опишите кратко суть того что нужно сделать</p>
                        <div className={styles.placeholderForm}>
                            <div className={styles.placeholderContainer}>
                                <input type="text" placeholder=" " />
                                <label><img className={styles.img} src='/images/homepage/me.png' /> <span>Имя</span></label>
                            </div>
                            <div className={styles.placeholderContainer}>
                                <input type="tel" placeholder=" " />
                                <label><img className={styles.img} src='/images/homepage/contact.png' /> <span>Телефон</span></label>
                            </div>
                            <div className={styles.placeholderContainer}>
                                <textarea type="text" placeholder=" " />
                                <label><img className={styles.img} src='/images/homepage/strelka.png' /> <span>Коротко о том что нужно сделать</span></label>
                            </div>
                            <span className={styles.formButton}>Отправить форму</span>
                        </div>
                    </div>
                    : null

            }
        </>


    )
}