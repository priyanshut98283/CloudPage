import React from 'react';

import { CheckIcon } from '@heroicons/react/solid';

const Pricing = () => {
  return (
    <div name='pricing' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-3xl uppercase'>Pricing</h2>
          <h3 className='text-5xl font-bold text-white py-8'>The right price for your research.</h3>
          <p className='text-3xl'>
          AWS offers you a pay-as-you-go approach for pricing for the vast majority of our cloud services. With AWS you pay only for the individual services you need, for as long as you use them, and without requiring long-term contracts or complex licensing. 
          </p>
        </div>

        <div className='grid md:grid-cols-2'>

          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Helpful for Personel and Small Business Use.</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />AWS Appstream 2.0</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />AWS Aurora</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />AWS Augmented AI</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />AWS Athena</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />AWS Cloudsearch</p>
                <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>$99<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Useful for Enterprice and Large Businesses.</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />AWS API Gateway</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />AWS CodeGuru</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />AWS Fraud Detector</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />AWS EventBridge</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />AWS GuardDuty</p>
                <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;