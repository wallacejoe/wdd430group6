'use client'

import Link from 'next/link';
import styles from '@/app/page.module.css'

export default function Nav() {
    return (
        <div className={styles.nav}>
            <Link key={'Home'} href={'/dashboard'} className={styles.navLink}>Home</Link>
            <Link key={'Other'} href={'#'} className={styles.navLink}>Other</Link>
            <Link key={'Site Plan'} href={'/dashboard/siteplan'} className={styles.navLink}>Site Plan</Link>
            <Link key={'Landing Page'} href={'/'} className={styles.navLink}>Landing</Link>
            <Link key={'Seller Profile'} href={'/seller-profile'} className={styles.navLink}>Seller Profile</Link>
        </div>
    );
}