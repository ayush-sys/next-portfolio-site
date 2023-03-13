import CertificationInfo from './CertficationInfo';
import { certifications } from '../../constants/index';

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

            {certifications.map((certification) => (
              <CertificationInfo name={certification.name} link={certification.link} duration={certification.duration} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


export default Certifications;