import {useEffect} from  'react'
import { Wrapper } from "../components/Wrapper";
import styles from '../styles/anotherPages/fullShop.module.css'
import { Slide } from '../components/helpers/Slide'
import { Pagination } from "../components/helpers/Pagination"
import {getArticles} from '../http/ArticlesAPI'
import {$api} from '../http/index'
const pagination = [1, 2, 3, 4, 5, 6, 7, 8]

const menu = [
    { id: 1, title: 'Главная' },
    { id: 2, title: 'Шаблоны' },
    { id: 3, title: 'Парсеры' },
    { id: 4, title: 'Скрипты' },
    { id: 5, title: 'Макеты' },
    { id: 6, title: 'Боты' },
]


export default function Shop() {
    useEffect(()=>{
        getArticles().then(data => console.log(data))
    }, [])

    
    const settings = {
        dots: false,
        centerPadding: '100px',
        slidesToShow: 2.5,
        slidesToScroll: 2.5,
        arrows: false,
        draggable: true,
        initialSlide: 0.5,
        autoplaySpeed: 4000,
        autoplay: true,
        infinite: true
    };
    
    return (

        <Wrapper>
            <div className={styles.wrapper}>
                <Slide props={menu} settings={settings}></Slide>

                <div className={styles.goods}>
                    <div className={styles.one}>1</div>
                    <div className={styles.one}>2</div>
                    <div className={styles.one}>3</div>
                    <div className={styles.one}>4</div>
                    <div className={styles.one}>5</div>
                    <div className={styles.one}>6</div>
                    <div className={styles.one}>7</div>
                    <div className={styles.one}>8</div>
                    <div className={styles.one}>9</div>
                </div>
                <Pagination list={pagination} />
                <div className={styles.description}>

                </div>
            </div>
        </Wrapper>
    )
}