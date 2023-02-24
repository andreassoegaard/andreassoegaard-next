import styles from './OtherTechnologies.module.scss'

export const OtherTechnologies = () => {
  const technologies = [
    {
      title: 'VS Code'
    },
    {
      title: 'NPM/Yarn'
    },
    {
      title: 'React.js'
    },
    {
      title: 'Next.js'
    },
    {
      title: 'Node.js'
    },
    {
      title: 'Express.js'
    },
    {
      title: 'PostgreSQL'
    },
    {
      title: 'WebSocket'
    },
    {
      title: 'Git/GitHub'
    },
    {
      title: 'SASS/SCSS'
    },
    {
      title: 'Stripe SDK'
    },
    {
      title: 'Google Maps/Charts SDK'
    },
    {
      title: 'Mapbox SDK'
    },
    {
      title: 'i18n (multisprog-løsninger)'
    },
    {
      title: 'Figma'
    },
    {
      title: 'Sketch'
    },
    {
      title: 'Photoshop'
    }
  ]

  return (
    <>
      <h2>Andre teknologier</h2>
      <p className="max-w-xl">Andre teknologier, programmer og biblioteker jeg har stiftet bekendtskab med i løbet af årene.</p>
      <ul className="mt-4">
        {technologies.map((item) => (
          <li key={item.title} className={styles.otherTechItem}>
            {item.title}
          </li>
        ))}
      </ul>
    </>
  )
}