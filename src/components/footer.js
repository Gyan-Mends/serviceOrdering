import React from "react";
import { Link } from "react-router-dom";

export default function Foter(){
  return(
    <div>
          {/* <!--footer -->
    <!--footer --> */}
    <footer class="bg-[#007EE5] text-gray-300 py-8 mt-20 -mr-6 -ml-6 ">
        <div class="container mx-auto px-10 lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 gap-20">
            <div class="">
                <h2 class="text-lg mb-4">Contact Us</h2>
                <p class="mb-2  text-[12px]"><i class="fas fa-map-marker-alt mr-2"></i>123 Main St, Anytown USA</p>
                <p class="mb-2 text-[12px]"><i class="fas fa-phone mr-2"></i>555-555-5555</p>
                <p class="mb-2 text-[12px]"><i class="fas fa-envelope mr-2"></i>info@serviceorder.com</p>
            </div>
            <div class="mt-8 md:mt-0 lg:mt-0">
                <h2 class="text-lg  mb-4">Services</h2>
                <ul class="list-disc pl-4">
                    <li class="mb-2 text-[12px]"><Link>Oil Changes</Link></li>
                    <li class="mb-2 text-[12px]"><Link>Tire Rotation</Link></li>
                    <li class="mb-2 text-[12px]"><Link>Brake Repair</Link></li>
                    <li class="mb-2 text-[12px]"><Link>Engine Diagnostics</Link></li>
                </ul>
            </div>
            <div class="mt-8  md:mt-0 lg:mt-0">
                <h3 class="text-lg mb-4">Follow Us</h3>
                <div class="flex items-center mb-2">
                    <i class="fab fa-facebook-square mr-2"></i>
                    <Link class="text-[12px]">Facebook</Link>
                </div>
                <div class="flex items-center mb-2">
                    <i class="fab fa-twitter-square mr-2"></i>
                    <Link class="text-[12px]" >Twitter</Link>
                </div>
                <div class="flex items-center mb-2">
                    <i class="fab fa-instagram-square mr-2"></i>
                    <Link class="text-[12px]" >Instagram</Link>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}