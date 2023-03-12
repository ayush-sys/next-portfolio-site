import CertificationInfo from './CertficationInfo';

const certificationsInfo = [
  {
    name: 'Postman Student Expert',
    link: 'https://api.badgr.io/public/assertions/ICXZP7mUQLqTmfZnwoBgtQ?identity__email=ayushmp7%40gmail.com',
    duration: 'April 2022 - present'
  },
  {
    name: 'MySQL - Hackerrank',
    link: 'https://www.hackerrank.com/certificates/76ab7cba535c',
    duration: 'March 2022 - present'
  },
  {
    name: 'Web Development',
    link: 'https://www.udemy.com/certificate/UC-330fadda-adf6-4107-8617-a072106adafd/',
    duration: 'April 2021 - present'
  },
  {
    name: 'Hackerrank Java',
    link: 'https://www.hackerrank.com/certificates/11c8a539355e',
    duration: 'May 2021 - present'
  },
  {
    name: 'Hackerrank Python',
    link: 'https://www.hackerrank.com/certificates/962c3d33ba42',
    duration: 'May 2021 - present'
  },
  {
    name: 'AI Foundational course',
    link: 'https://drive.google.com/file/d/1vpcC8jGLsG9XgJudG0wQr7SP2Fg7c2rc/view?usp=sharing',
    duration: 'July 2021 - present'
  }
]



const Certifications = () => {
  return (

    <div className="font-body" id="certifications">
      <div className="container px-6 py-8 md:py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl tracking-wide font-head">My technical <br /> Certifications </h1>

        <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-blue-800 rounded-full"></span>
          <span className="inline-block w-2 h-1 ml-1 bg-blue-800 rounded-full"></span>
          <span className="inline-block w-1 h-1 ml-1 bg-blue-800 rounded-full"></span>
        </div>

        <div className="mt-8 xl:mt-6 lg:flex lg:items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 py-4 text-center font-body">

            {certificationsInfo.map((certification) => (
              <CertificationInfo name={certification.name} link={certification.link} duration={certification.duration} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


export default Certifications;