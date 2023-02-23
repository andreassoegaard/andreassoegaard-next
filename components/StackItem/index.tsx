import { useMemo } from 'react'
import Image from 'next/image'
import styles from '@/components/StackItem/StackItem.module.css'

interface Props {
  title: string,
  logo: string,
  lineHex: string,
  since: Date
}

export const StackItem = (props: Props) => {
  const age = useMemo(() => {
    return new Date(+new Date() - +new Date(props.since)).getFullYear() - 1970
  }, [props.since])

  return (
    <>
      <div className={styles.stackItem} style={{ borderColor: props.lineHex }}>
        <div className={styles['stackItem-title']}>
          <Image
            src={props.logo}
            alt={props.title}
            className="mr-3"
            width={20}
            height={25}
          />
          {props.title}
        </div>
        <div className="text-gray-400">
          {age}+ års erfaring
        </div>
      </div>
    </>
  )
}