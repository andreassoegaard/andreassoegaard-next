import Image from 'next/image'
import styles from '@/styles/Home.module.scss'

export const HomeHeader = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:mb-12 mb-8">
        <Image
          src="/AndreasSoegaardRound.png"
          alt="Andreas Søgaard Pedersen"
          width={100}
          height={100}
          priority
        />
        <div className="mt-4 md:ml-8 md:mt-0 text-gray-400">
          <a href="tel:+4528403602" className="flex items-center">
            <Image
              src="/phone-solid.svg"
              alt="Telefon"
              width={13}
              height={13}
              priority
            />
            <span className="ml-2">
              +45 28 40 36 02
            </span>
          </a>
          <a href="mailto:mail@andreassoegaard.dk" className="flex items-center">
            <Image
              src="/envelope-solid.svg"
              alt="E-mail"
              width={13}
              height={13}
              priority
            />
            <span className="ml-2">
              mail@andreassoegaard.dk
            </span>
          </a>
          <a href="https://www.linkedin.com/in/andreassoegaard/" className="flex items-center">
            <Image
              src="/linkedin-in.svg"
              alt="LinkedIn"
              width={13}
              height={13}
              priority
            />
            <span className="ml-2">
              linkedin.com/in/andreassoegaard/
            </span>
          </a>
        </div>
      </div>
      <h1>
        Andreas Søgaard Pedersen.<br />
        <span className={styles.javaScriptStyle}>JavaScript</span> udvikler.
      </h1>
    </>
  )
}