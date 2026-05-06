import React from "react";

export default function WhitepaceSection() {
  return (
    <div className="bg-[#0e3a6d] text-white font-sans">

      {/* Top Section */}
      <div className="max-w-3xl mx-auto text-center pt-28 pb-24 px-4">

        <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
          Try Whitepace <br /> today
        </h1>

        <p className="text-gray-300 mt-5 text-sm leading-relaxed">
          Get started for free. <br />
          Add your whole team as your needs grow.
        </p>

        <button className="mt-6 bg-[#4f9cf9] hover:bg-[#3b82f6] text-white px-6 py-2.5 rounded-md text-sm font-medium flex items-center gap-2 mx-auto cursor-pointer">
          Try Taskey free

          {/* Arrow SVG */}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeWidth="2" d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>

        <p className="mt-5 text-gray-300 text-sm">
          On a big team? Contact sales
        </p>

        {/* Platform Icons */}
        <div className="flex justify-center gap-8 mt-6 opacity-90">

          {/* Apple */}
          <svg fill="#f2e9e9" width="40px" height="40px" viewBox="-52.01 0 560.035 560.035" xmlns="http://www.w3.org/2000/svg"><path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"/></svg>

          {/* Windows */}
         <svg fill="#ffffff" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 497.886 497.886" xml:space="preserve">
<g>
	<g>
		<g>
			<polygon points="227.959,39.869 227.959,242.386 496.549,242.386 496.549,0 			"/>
			<polygon points="1.336,244.746 211.172,244.746 211.172,41.818 1.336,72.798 			"/>
			<polygon points="227.959,458.017 496.549,497.886 496.549,261.535 227.959,261.535 			"/>
			<polygon points="1.336,425.086 211.172,456.066 211.172,261.531 1.336,261.531 			"/>
		</g>
	</g>
</g>
</svg>

          {/* Android */}
        <svg fill="#ffffff" height="40px" width="40px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 57.001 57.001" xml:space="preserve">
<g>
	<g>
		<path d="M35.361,5.677l2.497-4.162c0.284-0.474,0.131-1.088-0.343-1.372c-0.475-0.285-1.088-0.132-1.372,0.343l-2.635,4.392
			c-1.569-0.558-3.249-0.878-5.007-0.878s-3.438,0.32-5.007,0.878l-2.635-4.392c-0.284-0.475-0.898-0.627-1.372-0.343
			s-0.627,0.898-0.343,1.372l2.497,4.162c-4.827,2.495-8.14,7.525-8.14,13.324c0,0.553,0.448,1,1,1h28c0.552,0,1-0.447,1-1
			C43.5,13.203,40.188,8.173,35.361,5.677z M15.539,18.001c0.512-6.703,6.13-12,12.962-12s12.45,5.297,12.962,12H15.539z"/>
		<path d="M35.478,11.364H34.16c-0.364,0-0.659,0.295-0.659,0.659v1.318c0,0.364,0.295,0.659,0.659,0.659h1.319
			c0.364,0,0.659-0.295,0.659-0.659v-1.318C36.138,11.659,35.842,11.364,35.478,11.364z"/>
		<path d="M22.841,11.364h-1.319c-0.364,0-0.659,0.295-0.659,0.659v1.318c0,0.364,0.295,0.659,0.659,0.659h1.319
			c0.364,0,0.659-0.295,0.659-0.659v-1.318C23.5,11.659,23.205,11.364,22.841,11.364z"/>
		<path d="M42.5,21.001h-28c-0.552,0-1,0.447-1,1v20.171c0,2.663,2.169,4.829,4.834,4.829H19.5v6.006c0,2.202,1.794,3.994,4,3.994
			s4-1.792,4-3.994v-6.006h2v6.006c0,2.202,1.794,3.994,4,3.994s4-1.792,4-3.994v-6.006h1.166c2.666,0,4.834-2.166,4.834-4.829
			V22.001C43.5,21.448,43.053,21.001,42.5,21.001z M41.5,42.172c0,1.56-1.271,2.829-2.834,2.829H36.5c-0.552,0-1,0.447-1,1v7.006
			c0,1.1-0.897,1.994-2,1.994s-2-0.895-2-1.994v-7.006c0-0.553-0.448-1-1-1h-4c-0.552,0-1,0.447-1,1v7.006
			c0,1.1-0.897,1.994-2,1.994s-2-0.895-2-1.994v-7.006c0-0.553-0.448-1-1-1h-2.165c-1.563,0-2.835-1.27-2.835-2.829V23.001h26
			V42.172z"/>
		<path d="M48,21.001c-1.93,0-3.5,1.572-3.5,3.504v13.992c0,1.932,1.57,3.504,3.5,3.504s3.5-1.572,3.5-3.504V24.505
			C51.5,22.573,49.93,21.001,48,21.001z M49.5,38.497c0,0.829-0.673,1.504-1.5,1.504s-1.5-0.675-1.5-1.504V24.505
			c0-0.829,0.673-1.504,1.5-1.504s1.5,0.675,1.5,1.504V38.497z"/>
		<path d="M9,21.001c-1.93,0-3.5,1.572-3.5,3.504v13.992c0,1.932,1.57,3.504,3.5,3.504s3.5-1.572,3.5-3.504V24.505
			C12.5,22.573,10.93,21.001,9,21.001z M10.5,38.497c0,0.829-0.673,1.504-1.5,1.504s-1.5-0.675-1.5-1.504V24.505
			c0-0.829,0.673-1.504,1.5-1.504s1.5,0.675,1.5,1.504V38.497z"/>
	</g>
</g>
</svg>

        </div>
      </div>

      {/* Footer (Top Part Only) */}
      <div className="max-w-6xl mx-auto px-6 pb-14 grid grid-cols-2 md:grid-cols-5 gap-10 text-xs text-gray-300">

        <div>
          <h2 className="text-white font-semibold mb-2">whitepace</h2>
          <p className="leading-relaxed">
            whitepace was created for the new ways we live and work.
          </p>
        </div>

        <div>
          <h3 className="text-white font-medium mb-2">Product</h3>
          <ul className="space-y-1">
            <li>Overview</li>
            <li>Pricing</li>
            <li>Customer stories</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-2">Resources</h3>
          <ul className="space-y-1">
            <li>Blog</li>
            <li>Guides & tutorials</li>
            <li>Help center</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-2">Company</h3>
          <ul className="space-y-1">
            <li>About us</li>
            <li>Careers</li>
            <li>Media kit</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-2 ">Try It Today</h3>
          <p className="mb-3">
            Get started for free.
          </p>
          <button className="text-white bg-[#4f9cf9] px-4 py-2 rounded-md text-xs flex items-center gap-2 cursor-pointer hover:bg-[#3388f5]">
            Start today
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
              <path stroke="currentColor" strokeWidth="2" d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}