import styles from './Banner.module.css'

import type { BannerElements } from '../../types/BannerTypes'
import BannerElement from './BannerElement'

export interface properties {
    mainStyles: {
        backgroundColor: string
    },
    /*
    textStyles: {
        fontFamily: string,
        color: string,
        textContent: string,
        fontSize: number,
        fontWeight: string,
        fontStyle: string,
    },
    */
    elementsList: BannerElements[],
    onSelect: (id: number) => void;
}

function Banner({mainStyles, elementsList, onSelect}: properties) {
    return (
        <>
            <section
            className={styles.banner}
            style={{backgroundColor: mainStyles.backgroundColor}}>
            {elementsList.map((element) => (
                <BannerElement
                key={element.id}
                elementProps={element}
                onSelect={onSelect}
                />
            ))}
          </section>
        </>
    )
}

export default Banner