'use client'
import React, { useRef, useState } from 'react'
import styles from './searchbar.module.scss';
import DownIcon from '@/shared/icons/downicon';
import classNames from 'classnames';
import useClickOutside from '@/lib/useClickOutside';
const AppleIcon = '/assets/icons/apple.png';
const fruitList = require('../../../shared/data/fruitlist.json');
export default function Searchbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedFruit, setSelectedFruit] = useState("");
    const [searchData, setSearchData] = useState("");
    const dropdownRef = useRef(null)

    useClickOutside(dropdownRef, () => {
      if (dropdownOpen) {
        setDropdownOpen(false)
        setSearchData("")
      }
    })
    const HandleSearchFruit=(e)=>{
        setDropdownOpen(true)
        setSearchData(e.target.value)
    }

    const HandleSelectFruit=(fruitname)=>{
        setSelectedFruit(fruitname)
        setDropdownOpen(false)
        setSearchData("")
    }
    return (
        <div className={styles.serchbarDesign}>
            <div className={styles.input} ref={dropdownRef}>
                <input type='text' value={dropdownOpen ?searchData :selectedFruit  } placeholder='Search and select a Fruit' onChange={(e)=>HandleSearchFruit(e)} />
                <div className={styles.icon} onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <div className={ classNames(styles.iconAnimation , dropdownOpen ? styles.toogle : '') }>
                        <DownIcon />
                    </div>
                </div>
                <div className={ classNames(styles.dropdown ,dropdownOpen ? styles.show : styles.hide ) }>
                    {fruitList?.filter((data)=> data?.fruitname.toLowerCase().includes(searchData)).length > 0 ?
                        fruitList?.filter((data)=> data?.fruitname.toLowerCase().includes(searchData))?.map((fruit,i) => {
                            return (
                                <div className={styles.items} key={i} onClick={()=>HandleSelectFruit(fruit?.fruitname)}>
                                    <img src={fruit?.fruitimage} alt="fruitimage" />
                                    <span>{fruit?.fruitname}</span>
                                </div>
                            )
                        })
                        : 
                        <div className={styles.noitems} >   
                             <span>No Match Found</span>
                         </div>
                    }
                </div>
            </div>
        </div>
    )
}
