import styles from './OptionBox.module.css' // Feito assim pra garantir exclusividade do css do componente

interface properties {
    name: string;
    children: React.ReactNode;
}

function OptionBox(props: properties) {

    return (
        <>
            <div className={styles.mainBox}>
                <div>
                    <h2 className={styles.text}>{props.name}</h2>
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default OptionBox