
const callouts = [
    {
      name: 'Spotify Clone',
      description: 'A Spotify developed using Spotify API & styled using Tailwind CSS.',
      imageSrc: 'https://images.unsplash.com/photo-1581315628079-f093bb040803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      imageAlt: '01-NextJS-spotify-clone',
      href: 'https://github.com/ayush-sys/next-spotify-clone',
      tags: ['Next JS', 'NodeJS', 'TailwindCSS']
    },
    {
      name: 'Covid-19 cases prediction',
      description: 'Predicted the growth of Covid-19 virus using ML.',
      imageSrc: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
      imageAlt: '02-covid-analysis',
      href: 'https://github.com/ayush-sys/covid-19-cases-prediction',
      tags: ['Python', 'Machine learning']
    },
    {
      name: 'News Feed',
      description: 'A NLP application to analyse news data.',
      imageSrc: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
      imageAlt: '03-news-feed',
      href: 'https://github.com/ayush-sys/news_feed_NLP',
      tags: ['machine learning-nlp', 'spacy', 'streamlit']
    },
    {
        name: 'Portfolio Website',
        description: 'A Next JS portfolio website styled using Tailwind CSS.',
        imageSrc: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        imageAlt: '04-react-messenger-clone',
        href: 'https://github.com/ayush-sys/next-portfolio-site',
        tags: ['Next JS', 'TailwindCSS']
    },
    {
        name: 'React Messenger Clone',
        description: 'A React chat application.',
        imageSrc: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        imageAlt: '05-react-messenger-clone',
        href: 'https://github.com/ayush-sys/react-messenger-clone',
        tags: ['React JS', 'TailwindCSS', 'Chat Engine']
    },
    {
        name: 'Stock Trend prediction',
        description: 'Predicted Stock market value of stocks.',
        imageSrc: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        imageAlt: '06-stock-trend-prediction',
        href: 'https://github.com/ayush-sys/stock-trend-prediction',
        tags: ['Python','Deep learning']
    },
  ]
  
  export default function Projects() {
    return (
        <div className="py-12 bg-white" id="projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:text-center font-head">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-wide text-gray-900 sm:text-4xl">
                    Projects
                </p>
            </div>

        <div className="mt-10">
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 md:grid-cols-2 md:gap-x-4 md:gap-y-4 md:grid md:space-y-0 font-body">
                {callouts.map((callout) => (
                    <div key={callout.name} className="group relative shadow-md hover:shadow-lg">
                        <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
                            <a href={callout.href} className="w-full block h-full">
                                <img alt={callout.imageAlt} src={callout.imageSrc} className="max-h-40 w-full object-cover"/>
                                <div className="bg-white dark:bg-gray-800 w-full p-4">
                                    <p className="text-xl font-medium mb-2 text-blue-700">
                                        {callout.name}
                                    </p>
                                    <p className="text-gray-600 font-medium text-md mb-2">
                                        {callout.description}
                                    </p>
                                    <div className="flex flex-wrap justify-starts items-center mt-4">
                                        {callout.tags.map(tag => (
                                            <a className="px-4 py-2 flex items-center text-xs font-semibold rounded-full text-blue-500 border border-blue-600 mr-2">
                                            {tag}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
      </div>
    )
  }
  


  