import React from 'react'
import styles from './home.module.scss';
import Logo from '@/shared/common/logo';
import Searchbar from './searchbar';
export default function HomePage() {
    return (
        <div className={styles.homepageWrapper}>
            <div className='container'>
                <div className={styles.box}>
                <Logo />
                <Searchbar />
                </div>
            </div>
        </div>
    )
}
