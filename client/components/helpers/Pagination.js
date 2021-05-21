import styles from '../../styles/anotherPages/pagination.module.css'

export function Pagination({list}) {
    return (
        <div className={styles.pagination}>
            {
                list.map((item, id) => {
                    return <span key={id}>{item}</span>
                })
            }
        </div>
    )
}