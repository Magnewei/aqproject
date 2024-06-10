'use client';
import './ItemList.css';
import styles from './ItemList.module.css';

import React, { useState } from 'react';

export default function ItemList({ items }) {
  const [displayChildren, setDisplayChildren] = useState({});

  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.name}>
            {item.materials && (
              <button
                style={{
                  color: 'yellow',
                  backgroundColor: 'black',
                  borderRadius: '20px',
                  padding: '20px',
                }}
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
            <span>
              {' '}
              <a href={item.link}>{item.name}</a>
            </span>
            {displayChildren[item.name] && item.materials && (
              <ItemList items={item.materials} />
            )}
          </li>
        );
      })}
    </ul>
  );
}
