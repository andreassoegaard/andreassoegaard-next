import styles from './Projects.module.scss'

export const Projects = () => {
  const projects = [
    {
      title: 'Komplet frontend til sagshåndteringssystem til bedemænd'
    },
    {
      title: 'Interaktiv drag-and-drop gravstensdesigner'
    },
    {
      title: 'Døds- og takkeannonce-generator med live-preview'
    },
    {
      title: 'Custom ES6-moduler der kan importeres på tværs af projekter'
    },
    {
      title: 'Ordresystem til vindmøllebranchen'
    }
  ]
  return (
    <>
      <h2>Projekter jeg har arbejdet på</h2>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.title} className={styles.projectItem}>{project.title}</li>
        ))}
      </ul>
    </>
  )
}