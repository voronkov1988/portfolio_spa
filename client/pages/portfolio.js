import {Wrapper} from '../components/Wrapper'
import styles from '../styles/anotherPages/portfolio.module.css'
import {Slide} from '../components/helpers/Slide'
import { Pagination } from '../components/helpers/Pagination';

const settings = {
    dots: false,
    infinite: false,
    centerPadding: '100px',
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    draggable: true,
    initialSlide: 0,
    autoplaySpeed: 2000,
    autoplay: true,
    infinite: true
};

const pagination = [1,2,3,4,5,6,7,8]

const filters = [
    {id: 1, title: 'все'},
    {id: 2, title: 'Калькуляторы'},
    {id: 3, title: 'Магазины'},
    {id: 4, title: 'landing'}
]

export default function Portfolio () {
   
    return (
        <Wrapper 
            title='Портфолио | Фриланс услуги'
            description='Выполненные работы, занимаюсь любым видом фриланс услуг'
            keywords='скрипты, выполненные работы, заказать сайт дешево, сайты для компаний, создать интернет-магазин'
            >
            <div className={styles.wrapper}>
                <Slide props={filters} settings={settings} />
                <div className={styles.porttfolioWrapper}>
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
            </div>
        </Wrapper>
        
    )
}