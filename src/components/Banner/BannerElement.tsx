import type {TextElement, RectangleElement } from "../../types/BannerTypes"
import styles from './Banner.module.css'

interface Elements {
    elementProps: TextElement | RectangleElement,
    onSelect: (id: number) => void
}

function BannerElement({elementProps, onSelect}: Elements) {

    function RederizeCorrectElement() {
        switch(elementProps.type) {
            case 'text':
                return <h1 className={styles.h1} key={elementProps.id} onClick={() => {onSelect(elementProps.id)}}
                style={elementProps.styles}>{elementProps.text}</h1>
            case 'rectangle':
                return <section className={styles.rectangle} key={elementProps.id} style={elementProps.styles}></section>
        }
    }
    
    return (
        <section>
            { RederizeCorrectElement() }
        </section>
    )
}

export default BannerElement