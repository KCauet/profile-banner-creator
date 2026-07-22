import styles from './Banner.module.css'

import type { BannerElements } from '../../App'
import BannerElement from './BannerElement'

export interface properties {
    mainStyles: {
        backgroundColor: string,
        BoldText: boolean,
        ItalicText: boolean
    },
    textStyles: {
        fontFamily: string,
        color: string,
        textContent: string,
        fontSize: number,
        fontWeight: string,
        fontStyle: string,
    },
    elementsList: BannerElements[]
}

function Banner({mainStyles, textStyles, elementsList}: properties) {
    return (
        <>
            <section
            className={styles.banner}
            style={{backgroundColor: mainStyles.backgroundColor}}>
            <h1 style={textStyles}>{textStyles.textContent}</h1>
            {elementsList.map((element) => (
                <BannerElement
                key={element.id}
                elementProps={element}
                />
            ))}
          </section>
        </>
    )
}

export default Banner