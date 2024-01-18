'use client'
import React, { useState } from 'react'
import styles from './searchbar.module.scss';
import DownIcon from '@/shared/icons/downicon';
import classNames from 'classnames';
const AppleIcon = '/assets/icons/apple.png';
const fruitList = require('../../../shared/data/fruitlist.json');
export default function Searchbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
   
    
    return (
        <div className={styles.serchbarDesign}>
            <div className={styles.input}>
                <input type='text' placeholder='Choose a Fruit:' />
                <div className={styles.icon} onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <div className={ classNames(styles.iconAnimation , dropdownOpen ? styles.toogle : '') }>
                        <DownIcon />
                    </div>
                </div>
                <div className={ classNames(styles.dropdown ,dropdownOpen ? styles.show : styles.hide ) }>
                    {
                        fruitList?.map((fruit,i) => {
                            return (
                                <div className={styles.items} key={i}>
                                    <img src={fruit?.fruitimage} alt="fruitimage" />
                                    <span>{fruit?.fruitname}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
