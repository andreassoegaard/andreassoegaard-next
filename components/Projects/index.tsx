import styles from './Projects.module.scss'

export const Projects = () => {
  const projects = [
    {
      title: "Headless hjemmeside til Jyskebank.dk med Next.js og Umbraco"
    },
    {
      title: 'Komplet frontend til sagshåndteringssystem til bedemænd'
    },
    {
      title: 'Interaktiv drag-and-drop gravstensdesigner'
    },
    {
      title: 'Headless hjemmesidesystem til bedemænd med Nuxt.js og WordPress REST API'
    },
    {
      title: 'Døds- og takkeannonce-generator med live-preview i Vue.js'
    },
    {
      title: 'Custom web components der kan importeres på tværs af projekter og frameworks'
    },
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