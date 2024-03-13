import Nav from '@/app/ui/dashboard/nav';
import styles from '@/app/page.module.css'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        // applies to all pages in dashboard directory
        <div className={styles.dashboard}>
            <div className={styles.topNav}>
                <Nav />
            </div>
            <div className={styles.content}>{children}</div>
        </div>
    );
}