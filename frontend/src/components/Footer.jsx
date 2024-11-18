import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-3xl font-bold font-serif">BIBI ASMA</h2>
          <p className="mt-2 text-gray-400">
            SEO Expert and Influencer Digital Marketer 
          </p>
        </div>

        <div>
          <div className="flex mt-4 space-x-4 w-20">
            <a href="https://www.facebook.com/bibiasma371" className="hover:text-gray-300"><FaFacebook /></a>
            <a href="https://twitter.com/bibiAsma1492314" className="hover:text-gray-300"><FaTwitter/></a>
            <a href="https://www.linkedin.com/in/bibi-asma-b17b39270" className="hover:text-gray-300"><FaLinkedin/></a>
            <a href="https://youtube.com/@bibiasma371" className="hover:text-gray-300"><FaYoutube/></a>
            
            
          </div>
        </div>


        <div>
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <p className="text-gray-400"></p>
          <p className="text-gray-400"></p>
        </div>
        </div>
        
    </footer>
  )
}

export default Footer
