import nitdLongLogo from '@/public/nitd-logo-labeled-blue.png'
import sscduLongLogo from '@/public/sscdu-logo-long.png'
import rtcsseLogo from '@/public/rtcsse-logo.png'
import nitdSquareLogo from "@/public/nitd-logo.png"
import sscduSquareLogo from "@/public/sscdu-logo.png"
import 'assets/css/footer.css'
import Link from "next/link";
import Image from "next/image"

export default function Footer() {
    return (<footer>
        <div className="bg-primary10" id="footer">
            <div className="container mx-auto px-6 py-8">
                <div className="footer_content">
                <div className="footerAdress">
                    <div className="footerAddress_icon">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0c-2.761 0-5 2.239-5 5 0 5 5 11 5 11s5-6 5-11c0-2.761-2.239-5-5-5zM8 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path></svg>
                    </div>
                    <div className="footer_address_content">
                    <h3 class="Footer_Address_heading">Address</h3>
                    <p class="Footer_Address_line__Tu0_Q undefined">National Institute of Technology Delhi</p>
                    <p class="Footer_Address_line__Tu0_Q undefined">Plot No. FA7, Zone P1, GT Karnal Rd</p>
                    <p class="Footer_Address_line__Tu0_Q undefined">Delhi - 110036</p>
                    </div>
                    
                </div>
                    <div className="footer_contact">
                        <div className="footer_contact_icon">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11 10c-1 1-1 2-2 2s-2-1-3-2-2-2-2-3 1-1 2-2-2-4-3-4-3 3-3 3c0 2 2.055 6.055 4 8s6 4 8 4c0 0 3-2 3-3s-3-4-4-3z"></path></svg>
                        </div>
                        <div className="footer_contact_content">
                        <h3 class="Footer_ContactUs_heading__F1Du9">Contact Us</h3>
                        <ul class="contact_list">
                        <li class="Footer_ContactUs_item__rFApu undefined">+91 941 924 0698</li>
                        <li class="Footer_ContactUs_item__rFApu undefined">+91 800 338 9258</li>
                        </ul>
                        </div>
                        
                    </div>
                    
                </div>
                <p className="text-sm text-center mt-12">All right reserved RTCSSE-2023. Powered by NIT Delhi</p>
            </div>
            <div className="bg-black text-white text-sm">
                <div className="container mx-auto px-6 py-2">
                    <p className="text-center">Designed and Developed by - <Link href="https://hardiksachan.com"
                                                                                 className="underline hover:text-primary20">Hardik
                        Sachan</Link>, <Link
                        href="https://github.com/ShivanshAsthana04" className="underline hover:text-primary20">Shivansh
                        Asthana</Link> & <Link
                        href="https://github.com/voltsyjr" className="underline hover:text-primary20">Vishal
                        Singh</Link></p>
                </div>
            </div>
        </div>
    </footer>)
}