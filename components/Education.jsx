const EducationInfo = [
  {
    name: 'ITER, SOA University',
    garde: '7.22 (upto 4th sem)',
    duration: 'July 2019 - current',
  },
  {
    name: 'ODM Public School(12th CBSE - PCM)',
    garde: '74.6%',
    duration: 'June 2017 - April 2019',
  },
  {
    name: 'ST Teresas School(10th ICSE)',
    garde: '76.6%',
    duration: 'March 2007 - June 2017',
  },
]


export default function Education() {
  return (
    <div className="bg-white py-12" id="education">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="font-head lg:text-center">
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-wide text-gray-900 sm:text-4xl">
            Education
          </p>
        </div>

        <div className="mt-10 flex flex-row font-body md:items-center md:justify-center">
          <dl>
            {EducationInfo.map((Info) => (
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-semibold text-gray-700">{Info.name}</dt>
                <dd className="mt-2 text-sm font-medium text-gray-600 sm:col-span-2 sm:mt-0">{Info.garde}</dd>
                <dd className="mt-2 text-sm text-gray-500 sm:col-span-2 sm:mt-0">{Info.duration}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
