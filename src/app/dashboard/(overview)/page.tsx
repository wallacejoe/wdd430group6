// imports
import styles from '@/app/page.module.css';
import Highlights from '@/app/ui/dashboard/highlights';

// metadata

// Home page data
export default async function Page() {
    // variables/SQL data

    // compiles and returns the html for the page
    // Color palette: https://coolors.co/3a405a-aec5eb-f5dfbb-96ce8c-685044
    return (
        <main className={styles.homePage}>
            <h1>
                Home Page
            </h1>
            <div>
                <Highlights />
            </div>
            <div className={styles.hover_box}>
                colors!
            </div>
        </main>
    );
}