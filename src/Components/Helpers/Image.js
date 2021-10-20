import { useState } from 'react';
import styles from './Image.module.css'

export function Image({alt, ...props}) {
  const [isSkeletonActive, setIsSkeletonActive] = useState(true)

  function handleLoad({target}) {
    setIsSkeletonActive(false)
    target.style.opacity = 1;
  }

  return <div className={styles.wrapper}>
    {isSkeletonActive && <div className={styles.skeleton}></div>}
    <img onLoad={handleLoad} className={styles.img} alt={alt} {...props} />
  </div>
}