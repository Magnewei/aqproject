'use client';
import './css/ItemList.css';
import styles from './css/ItemList.module.css';

import React, {useState} from 'react';

function DisplayText({linkExists, text}) {
    if (linkExists != undefined) {
        return (
            <span className={styles.linker}>
        <a href={linkExists}> {text} </a>
      </span>
        );
    } else {
        return <span className={styles.text}> {text}</span>;
    }
}

export default function ItemList({items}) {
    const [displayChildren, setDisplayChildren] = useState({});

    return (
        <div className={styles.ItemList}>
            <ul>
                {items.map((item) => {
                    return (
                        <li key={item.name}>
                            {item.materials && (
                                <button
                                    className={styles.button}
                                    onClick={() => {
                                        setDisplayChildren({
                                            ...displayChildren,
                                            [item.name]: !displayChildren[item.name],
                                        });
                                    }}
                                >
                                    {displayChildren[item.name] ? '-' : '+'}
                                </button>
                            )}
                            <DisplayText linkExists={item.link} text={item.name}/>
                            {displayChildren[item.name] && item.materials && (
                                <ItemList items={item.materials}/>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
