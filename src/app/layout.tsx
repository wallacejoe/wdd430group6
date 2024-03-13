import styles from '@/app/page.module.css'

export default function RootLayour({
    children,
} : {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={styles.global}>
            <body className={styles.globalBody}>
                {children}
            </body>
        </html>
    )
}