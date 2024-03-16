import styles from '@/app/page.module.css'

export default function Highlights() {
    return (
        <div className={styles.highlightParent}>
            <div className={styles.highlight}>
                <div className={styles.highlightImg}>Image</div>
                <h2>Name</h2>
                <p>Description</p>
            </div>
            <div className={styles.highlight}>
                <div className={styles.highlightImg}>Image</div>
                <h2>Name</h2>
                <p>Description</p>
            </div>
            <div className={styles.highlight}>
                <div className={styles.highlightImg}>Image</div>
                <h2>Name</h2>
                <p>Description</p>
            </div>
        </div>
    );
}