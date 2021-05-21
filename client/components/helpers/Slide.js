import Slider from 'react-slick'
import styles from '../../styles/anotherPages/slider.module.css'

export function Slide ({props, settings}) {
    return (
        <Slider className={styles.slider} props={props} {...settings}>
                {
                    props.map(item => {
                        return (
                            <div key={item.id}>
                                <h3>{item.title}</h3>
                            </div>
                        )
                    })
                }
                </Slider>
    )
}