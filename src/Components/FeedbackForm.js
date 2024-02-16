import React, { useState } from 'react'

function FeedbackForm() {
    const [isChecked, setIsChecked] = useState(false);
    
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

  return (
    <>
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#9ddeeb] to-[#4faa93] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Feedback</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">Cultivating Connections, Nurturing Nature &mdash; Reach Out to Us Today!</p>
            </div>
            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                    <label for="first-name" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                    <div className="mt-2.5">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <label for="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                    <div className="mt-2.5">
                    <input type="text" name="last-name" id="last-name" autocomplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label for="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                    <div className="mt-2.5">
                    <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label for="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
                    <div className="relative mt-2.5">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                        <label for="country" className="sr-only">Country</label>
                        <select id="country" name="country" className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-2 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm">
                        <option>USA</option>
                        <option>IND</option>
                        <option>EUR</option>
                        </select>
                    </div>
                    <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 pl-28 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label for="message1" className="block text-sm font-semibold leading-6 text-gray-900">Were you able to easily locate green hub centres ?</label>
                    <div className="mt-2.5">
                    <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"></textarea>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label for="message2" className="block text-sm font-semibold leading-6 text-gray-900">Did you face any trouble while using our services?</label>
                    <div className="mt-2.5">
                    <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"></textarea>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label for="message3" className="block text-sm font-semibold leading-6 text-gray-900">Did the website inspire you to take any specific actions to help the environment? If so, what were they?</label>
                    <div className="mt-2.5">
                    <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"></textarea>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label for="message4" className="block text-sm font-semibold leading-6 text-gray-900">Did you find the information provided on environmental conservation helpful?</label>
                    <div className="mt-2.5">
                    <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"></textarea>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label for="message5" className="block text-sm font-semibold leading-6 text-gray-900">Did you find the website engaging and interactive? Why or why not?</label>
                    <div className="mt-2.5">
                    <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"></textarea>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label for="message5" className="block text-sm font-semibold leading-6 text-gray-900">How was your experience on website?</label>
                    <div className="mt-2.5 flex">
                        <div>
                            <input  type='radio' id='rating1' name='rating' value={1} className='m-2'/><h1 className='m-2'>1</h1>
                        </div>
                        <div>
                            <input  type='radio' id='rating2' name='rating' value={2}className='m-2'/><h1 className='m-2'>2</h1>
                        </div>
                        <div>
                            <input  type='radio' id='rating3' name='rating' value={3}className='m-2'/><h1 className='m-2'>3</h1>
                        </div>
                        <div>
                            <input  type='radio' id='rating4' name='rating' value={4} className='m-2'/><h1 className='m-2'>4</h1>
                        </div>
                        <div>
                            <input  type='radio' id='rating5' name='rating' value={5} className='m-2'/><h1 className='m-2'>5</h1>
                        </div>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label for="message5" className="block text-sm font-semibold leading-6 text-gray-900">Any suggestions on features you would want in website ?</label>
                    <div className="mt-2.5">
                    <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"></textarea>
                    </div>
                </div>
                
                <div className="flex gap-x-4 sm:col-span-2">
                    <div className="flex h-6 items-center">
                    <button type="button" className={`bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 ${
                    isChecked ? 'bg-green-600' : ''}`} onClick={toggleCheckbox} role="switch" aria-checked={isChecked} aria-labelledby="switch-1-label" >
                        <span className="sr-only">Agree to policies</span>
                        <span aria-hidden="true" className={`translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out ${ isChecked ? 'translate-x-full' : ''}`}></span>
                    </button>
                    </div>
                    <label className="text-sm leading-6 text-gray-600" id="switch-1-label">
                    By selecting this, you agree to our
                    <h1 className="font-semibold text-green-600">privacy&nbsp;policy</h1>.
                    </label>
                </div>
                </div>
                <div className="mt-10">
                <button className="block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Submit </button>
                </div>
            </form>
            </div> 
    </>
  )
}

export default FeedbackForm
