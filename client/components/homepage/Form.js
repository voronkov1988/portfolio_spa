import {useState} from 'react'
import styles from '../../styles/form.module.css'
import {useForm} from 'react-hook-form'
import InputMask from 'react-input-mask'

export const Form = () => {
    const [phone, setPhone] = useState('')
    const {errors, register, handleSubmit} = useForm();
   
    const submit = (e) => {
        console.log(phone, e)
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.contacts}>
                <h4>Контакты</h4>
                <p>
                    <img src='/images/homepage/phoneform.png'/>
                    <span className={styles.contact}>+7(926)957-46-88</span>
                </p>
                <p>
                    <img src='/images/homepage/mailform.png'/>
                    <span className={styles.contact}>z.voronkov@mail.ru</span>
                </p>
            </div>
            <div className={styles.form}>
                <form onSubmit={handleSubmit(submit)}>
                    <h4>Хотите заказать <br></br> услугу?</h4>
                    <input name='name' className={styles.input} type='text' required placeholder='Ваше имя' ref={register({minLength: 3, maxLength: 20 })} />
                    {errors.name && <span className={styles.error}>* Не меньше 3 символов</span>}  
                    <InputMask onChange={(e)=>setPhone(e.target.value)} mask="+7(999) 999-99-99" required name='tel' className={styles.input} type='tel'  placeholder='Ваш номер телефона'/>
                    <textarea name='job' className={styles.area} type='text' required placeholder='Что нужно сделать?' ref={register({ required: true, minLength: 10 })}  />
                    {errors.job && <span className={styles.error}>* Не менее 10 символов</span>}
                    <input className={styles.submit} type='submit' value='Отправить'/>
                </form>
            </div>
        </div>
    )
}
