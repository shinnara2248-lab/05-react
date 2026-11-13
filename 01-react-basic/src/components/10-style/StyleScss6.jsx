import React from 'react'
import styles from "./scss/StyleScss6.module.scss"

export const StyleScss6 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardWrap}>
                <h2>여기는 module.scss</h2>
                <p>module로 만든 scss는 여기 컴포넌트에만 적용된다</p>
            </div>
        </div>
    )
}
