"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./searchbar.module.scss";
import DownIcon from "@/shared/icons/downicon";
import classNames from "classnames";
import useClickOutside from "@/lib/useClickOutside";
const AppleIcon = "/assets/icons/apple.png";
const fruitList = require("../../../shared/data/fruitlist.json");
export default function Searchbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState("");
  const [searchData, setSearchData] = useState("");
  const dropdownRef = useRef(null);
  const dataRef = useRef(null);

  useClickOutside(dropdownRef, () => {
    if (dropdownOpen) {
      setDropdownOpen(false);
      setSearchData("");
    }
  });

  useEffect(() => {
    if (dropdownOpen) {
      dataRef.current.scrollTop = 0;
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [dropdownOpen]);
  const HandleSearchFruit = (e) => {
    setDropdownOpen(true);
    setSearchData(e.target.value);
  };

  const HandleSelectFruit = (fruitname) => {
    setSelectedFruit(fruitname);
    setDropdownOpen(false);
    setSearchData("");
  };
  return (
    <div className={styles.serchbarDesign}>
      <div className={styles.input} ref={dropdownRef} onClick={() => setDropdownOpen(!dropdownOpen)}>
        <input
          className={dropdownOpen ? styles.inputStyleChange : ""}
          type="text"
          value={dropdownOpen ? searchData : selectedFruit}
          placeholder="Choose a Fruit:"
          onChange={(e) => HandleSearchFruit(e)}
        />
        <div className={styles.icon}>
          <div className={classNames(styles.iconAnimation, dropdownOpen ? styles.toogle : "")}>
            <DownIcon />
          </div>
        </div>
        <div className={classNames(styles.dropdown, dropdownOpen ? styles.show : styles.hide)} ref={dataRef}>
          {fruitList?.filter((data) => data?.fruitname.toLowerCase().includes(searchData.toLowerCase())).length > 0 ? (
            fruitList
              ?.filter((data) => data?.fruitname.toLowerCase().includes(searchData.toLowerCase()))
              ?.map((fruit, i) => {
                return (
                  <div className={styles.items} key={i} onClick={() => HandleSelectFruit(fruit?.fruitname)}>
                    <img src={fruit?.fruitimage} alt="fruitimage" />
                    <span>{fruit?.fruitname}</span>
                  </div>
                );
              })
          ) : (
            <div className={styles.noitems}>
              <span>No Match Found</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
