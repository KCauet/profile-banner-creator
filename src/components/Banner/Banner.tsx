import { Children } from 'react'
import styles from './Banner.module.css'


interface properties {
    mainStyles: {
        backgroundColor: string,
        textFont: string,
        textFontSize: number,
        textContent: string,
        textColor: string,
        BoldText: boolean,
        ItalicText: boolean
    },
    textStyles: {
        fontFamily: string,
        color: string,
        fontSize: number,
        fontWeight: string,
        fontStyle: string,
    },
    children?: React.ReactNode
}

function Banner(props: properties) {
    return (
        <>
            <section
            className={styles.banner}
            style={{
                backgroundColor: props.mainStyles.backgroundColor
            }}
            >
            <h1 style={props.textStyles}>{props.mainStyles.textContent}</h1>
            <div>{props.children}</div>
          </section>
        </>
    )
}

export default Banner