import styles from '../../styles/myworks.module.css'
import { useState } from 'react'
import Link from 'next/link'

const works = [
    { id: 1, type:'calculator', title: 'delivery', description: 'Калькулятор расчета доставки из интернет магазина', img: '/images/homepage/portfolio1.jpg' },
    { id: 2, type:'calculator', title: 'калькулятор кирпичей', description: 'расчет количества кирпичей для строительства', img: '/images/homepage/portfolio1.jpg' },
    { id: 3, type:'calculator', title: 'калькулятор документов для авто', description: 'Изготовление докуметов для авто по VIN коду', img: '/images/homepage/portfolio1.jpg' },
    { id: 4, type:'calculator', title: 'Магазин игрушек', description: 'создание и наполнение магазина игрушек', img: '/images/homepage/portfolio1.jpg' },
    { id: 5, type:'calculator', title: 'Мастер на час', description: 'создание лэндинга для мастера на час', img: '/images/homepage/portfolio2.jpg' },
    { id: 6, type:'shop', title: 'Мастер на час', description: 'создание лэндинга для мастера на час', img: '/images/homepage/portfolio2.jpg' },
    { id: 7, type:'shop', title: 'Мастер на час', description: 'создание лэндинга для мастера на час', img: '/images/homepage/portfolio2.jpg' },

]

export function MyWorks() {

    const [workState, setWorkState] = useState(works.slice(0,3))
    const filters = {
        all: () => setWorkState(works.slice(0,3)),
        calculators: () => setWorkState(works.filter(item => item.type === 'calculator').slice(0,3)),
        shops: () => setWorkState(works.filter(item => item.type === 'shop').slice(0,3)),
        landings: () => setWorkState(works.filter(item => item.type === 'landing').slice(0,3))
    }

    return (
        <div className={styles.wrapper}>
            <h2>Портфолио</h2>
            <div className={styles.filter}>
                <span onClick={() => filters.all()}>Все</span>
                <span onClick={() => filters.calculators()}>Калькуляторы</span>
                <span onClick={() => filters.shops()}>Интернет-магазины</span>
                <span onClick={() => filters.landings()}>Landing page</span>
            </div>
            <div className={styles.items}>
                {
                    workState.map(item => {
                        return (
                            <div key={item.id} className={styles.one}>
                                <h3>{item.title}</h3>
                                <img src={item.img} alt='Магазин' />
                            </div>
                        )
                    })
                }
            </div>
            <span className={styles.button}><Link href='/portfolio'><a>Все портфолио</a></Link></span>
        </div>
    )
}
