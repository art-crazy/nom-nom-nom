import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './LayoutWrapper.module.scss';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const LayoutWrapper  = ({ children }: LayoutProps) => (
    <div className={styles.layout}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
    </div>
);

export default LayoutWrapper;
