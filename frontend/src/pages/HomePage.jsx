

const HomePage = () => {
  return (
    <div className="max-h-400px max-w-300px m-8 rounded-md p-4">
       <div className="card">
        <h1 className="heading text-center font-extrabold m-10">Importance Of SEO</h1>
        <div className="card-head">
            <h2 className="text-justify font-extrabold m-8 p-6 bg-blue-200 rounded-md shadow-lg shadow-blue-200/50">What is SEO? <br /> Search Engine Optimization (SEO) is the process of enhancing your website to rank higher in search engine results, increasing visibility and attracting more organic traffic.</h2>
            <div>
                <img src="https://brandlume.com/wp-content/uploads/2019/10/960X540.png" className="max-100 max-h-80 m-auto rounded-md shadow-xl shadow-zinc-900"/>
            </div>
            <div className="card-body m-12 p-6 font-mono bg-blue-200 rounded-md shadow-xl shadow-blue-200/50">
               <ol className="p-2">
                <h3 className="font-extrabold text-lg"><i>Key Service List</i></h3>
                <li className="p-2"><b>Keyword Research:</b> Finding high-traffic, relevant keywords to target</li>
                <li className="p-2"><b>On-Page Optimization:</b> Optimizing titles, meta descriptions, headers, and content for search engines</li>
                <li className="p-2"><b>Technical SEO:</b> Ensuring the website is crawlable and indexable by search engines, fixing issues with site speed, mobile optimization, and URL structure</li>
                <li className="p-2"><b>Content Creation:</b> Developing quality content that engages users and aligns with SEO goals</li>
                <li className="p-2"><b>Backlink Building:</b> Building credible backlinks to increase authority</li>
               </ol>
            </div>
            <div>
                <img src="https://www.pagetraffic.in/wp-content/uploads/2023/03/affordable-seo-services.png" className="max-100 max-h-80 m-auto rounded-md shadow-xl shadow-zinc-900"/>
            </div>

        </div>

       </div>

    </div>
  )
}

export default HomePage
