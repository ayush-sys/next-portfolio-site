const certificationsInfo = [
  {
    name:'MySQL - Hackerrank',
    link:'https://www.hackerrank.com/certificates/76ab7cba535c',
    duration:'March 2022 - present'
  },
  {
    name:'MySQL (Basics) - Hackerrank',
    link:'https://www.hackerrank.com/certificates/4bd509c7ae74',
    duration:'March 2022 - present'
  },
  {
    name:'Web Development',
    link:'https://www.udemy.com/certificate/UC-330fadda-adf6-4107-8617-a072106adafd/',
    duration:'April 2021 - present'
  },
  {
    name:'Hackerrank Java',
    link:'https://www.hackerrank.com/certificates/11c8a539355e',
    duration:'May 2021 - present'
  },
  {
    name:'Hackerrank Python',
    link:'https://www.hackerrank.com/certificates/962c3d33ba42',
    duration:'May 2021 - present'
  },
  {
    name:'AI Foundational course',
    link:'https://drive.google.com/file/d/1vpcC8jGLsG9XgJudG0wQr7SP2Fg7c2rc/view?usp=sharing',
    duration:'July 2021 - present'
  }
]



export default function Certifications() {
  return (
  <div className="py-12 bg-white" id="certifications">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:text-center font-head">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-wide text-gray-900 sm:text-4xl">
          Certifications
        </p>
      </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 py-4 text-center font-body">

          {certificationsInfo.map((certification) => (
            <>
            <div className="flex flex-col md:items-center tracking-wide items-start">
              <h1 className="text-2xl font-semibold">{certification.name}</h1>
              <a className="text-sm font-light text-gray-600" href={certification.link}>Click here to view</a>
            </div>
            <div className="font-semibold text-gray-700 hidden md:inline">{certification.duration}</div>  
            </>
          ))}
        </div>
      </div>
    </div>
  )
}
