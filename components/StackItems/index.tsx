import { StackItem } from '@/components/StackItem'

export const StackItems = () => {
  const stackItems = [
    {
      id: 1,
      logo: '/JSLogo.svg',
      title: 'JavaScript',
      lineHex: '#F7DF1E',
      since: new Date('01/01/2017')
    },
    {
      id: 2,
      logo: '/TSLogo.svg',
      title: 'TypeScript',
      lineHex: '#007ACC',
      since: new Date('01/01/2022')
    },
    {
      id: 5,
      logo: '/next-js.svg',
      title: 'Next.js',
      lineHex: '#5d5d5d',
      since: new Date('01/01/2022')
    },
    {
      id: 6,
      logo: '/React.svg',
      title: 'React.js',
      lineHex: '#00d8fe',
      since: new Date('01/01/2022')
    },
    {
      id: 3,
      logo: '/NuxtLogo.svg',
      title: 'Nuxt (2 & 3)',
      lineHex: '#00DC82',
      since: new Date('01/01/2019')
    },
    {
      id: 4,
      logo: '/VueLogo.svg',
      title: 'Vue (2 & 3)',
      lineHex: '#42B883',
      since: new Date('01/01/2019')
    },
    
    {
      id: 7,
      logo: '/PiniaLogo.svg',
      title: 'Pinia',
      lineHex: '#ecb732',
      since: new Date('01/01/2022')
    },
    {
      id: 8,
      logo: '/VueLogo.svg',
      title: 'Vuex',
      lineHex: '#42B883',
      since: new Date('01/01/2019')
    },
    {
      id: 9,
      logo: '/TailwindLogo.svg',
      title: 'TailwindCSS',
      lineHex: '#07B6D5',
      since: new Date('01/01/2021')
    },
    {
      id: 10,
      logo: '/BootstrapLogo.svg',
      title: 'Bootstrap',
      lineHex: '#7A12F5',
      since: new Date('01/01/2017')
    },
    {
      id: 11,
      logo: '/wordpress-icon.svg',
      title: 'WordPress',
      lineHex: '#21759B',
      since: new Date('01/01/2012')
    },
    {
      id: 12,
      logo: '/UmbracoLogo.svg',
      title: 'Umbraco',
      lineHex: '#3948ad',
      since: new Date('01/01/2023')
    }
  ]

  return (
    <>
      <h2>Min primære stack</h2>
      <div className="flex flex-wrap -mx-3">
        {stackItems.map((item) => (
          <div key={item.id} className="w-full lg:w-6/12 px-3 mb-3">
            <StackItem
              title={item.title}
              logo={item.logo}
              lineHex={item.lineHex}
              since={item.since}
            />
          </div>
        ))}
      </div>
      
    </>
  )
}