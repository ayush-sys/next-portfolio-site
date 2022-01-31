
const callouts = [
    {
      name: 'Spotify Clone',
      description: 'A breif description of project done by me',
      imageSrc: 'https://images.unsplash.com/photo-1581315628079-f093bb040803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      imageAlt: '01-NextJS-spotify-clone',
      href: 'https://github.com/ayush-sys/next-spotify-clone',
    },
    {
      name: 'Covid-19 cases prediction',
      description: 'A breif description of project done by me',
      imageSrc: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
      imageAlt: '02-covid-analysis',
      href: 'https://github.com/ayush-sys/covid-19-cases-prediction',
    },
    {
      name: 'News Feed',
      description: 'A breif description of project done by me',
      imageSrc: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
      imageAlt: '03-news-feed',
      href: 'https://github.com/ayush-sys/news_feed_NLP',
    },
    {
        name: 'Spotify Clone',
        description: 'A breif description of project done by me',
        imageSrc: 'https://images.unsplash.com/photo-1581315628079-f093bb040803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        imageAlt: '01-NextJS-spotify-clone',
        href: 'https://github.com/ayush-sys/next-spotify-clone',
      },
      {
        name: 'Covid-19 cases prediction',
        description: 'A breif description of project done by me',
        imageSrc: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
        imageAlt: '02-covid-analysis',
        href: 'https://github.com/ayush-sys/covid-19-cases-prediction',
      },
      {
        name: 'News Feed',
        description: 'A breif description of project done by me',
        imageSrc: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
        imageAlt: '03-news-feed',
        href: 'https://github.com/ayush-sys/news_feed_NLP',
      },
  ]
  
  export default function Example() {
    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Projects
                </p>
            </div>

        <div className="mt-10">
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 md:grid-cols-2 md:gap-x-4 md:gap-y-4 md:grid md:space-y-0">
                {callouts.map((callout) => (
                    <div key={callout.name} className="group relative shadow-md">
                        <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
                            <a href="#" class="w-full block h-full">
                                <img alt={callout.imageAlt} src={callout.imageSrc} className="max-h-40 w-full object-cover"/>
                                <div class="bg-white dark:bg-gray-800 w-full p-4">
                                    <p class="text-xl font-medium mb-2 text-blue-500">
                                        {callout.name}
                                    </p>
                                    <p class="text-gray-600 font-medium text-md mb-2">
                                        {callout.description}
                                    </p>
                                    <div class="flex flex-wrap justify-starts items-center mt-4">
                                        <a className="text-xs mr-2 py-2 px-4 text-gray-500 bg-blue-200 rounded-2xl">
                                            #1
                                        </a>
                                        <a className="text-xs mr-2 py-2 px-4 text-gray-500 bg-blue-200 rounded-2xl">
                                            #2
                                        </a>
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
  


  