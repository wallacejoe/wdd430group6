// imports
import styles from '@/app/page.module.css';
// metadata

// Home page data
export default async function Page() {
    // variables/SQL data

    // compiles and returns the html for the page
    // Color palette: https://coolors.co/3a405a-aec5eb-f5dfbb-96ce8c-685044
    return (
        <main>
            <h1>
                Home Page
            </h1>
            <div className={styles.hover_box}>
                colors!
            </div>
        </main>
    );
}