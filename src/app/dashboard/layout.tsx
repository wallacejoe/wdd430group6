import Nav from '@/app/ui/dashboard/nav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        // applies to all pages in dashboard directory
        <div>
            <div className="top-nav">
                <Nav />
            </div>
            <div className="content">{children}</div>
        </div>
    );
}