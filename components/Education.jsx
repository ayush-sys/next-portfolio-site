
export default function Education() {
  return (

    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Education
          </p>
        </div>

        <div className="mt-10 flex flex-row md:justify-center md:items-center">
            <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-semibold text-gray-700">ITER, SOA University</dt>
                    <dd className="mt-2 text-sm text-gray-600 sm:mt-0 sm:col-span-2 font-medium">7.22 CGPA (upto 4th sem)</dd>
                    <dd className="mt-2 text-sm text-gray-500 sm:mt-0 sm:col-span-2">2019-current</dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-semibold text-gray-700">ODM Public School(12th CBSE - PCM)</dt>
                    <dd className="mt-2 text-sm text-gray-600 sm:mt-0 sm:col-span-2 font-medium">76.5%</dd>
                    <dd className="mt-2 text-sm text-gray-500 sm:mt-0 sm:col-span-2">2017-2019</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-semibold text-gray-700">ST Teresa's School(10th ICSE)</dt>
                    <dd className="mt-2 text-sm text-gray-600 sm:mt-0 sm:col-span-2 font-medium">75.5%</dd>
                    <dd className="mt-2 text-sm text-gray-500 sm:mt-0 sm:col-span-2">2015-2017</dd>
                </div>
            </dl>
        </div>
      </div>
    </div>

  )
}
