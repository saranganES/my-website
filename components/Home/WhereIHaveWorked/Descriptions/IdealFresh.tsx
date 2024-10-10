import React from 'react';
import ArrowIcon from '../../../Icons/ArrowIcon';
import { getTasksTextWithHighlightedKeyword } from './taskAndType';

export default function IdealFresh() {
  const tasks = [
    {
      text: 'Collaborated with cross-functional teams, including UI/UX designers and project managers, to deliver user-centric web solutions that align with business objectives.',
      keywords: ['web solutions', 'business objectives'],
    },
    {
      text: 'Integrated RESTful APIs and enhanced user experiences through efficient frontend and back-end communication using React.js and Node.js.',
      keywords: ['React.js', 'Node.js'],
    },
    {
      text: 'Developed custom components and reusable UI elements using React.js to standardize the design language across multiple projects, ensuring design consistency and reducing development time for new features.',
      keywords: ['reusable UI elements'],
    },
  ];
  return (
    <>
      <div className='flex flex-col space-y-5 max-w-xl px-4 md:px-0'>
        <div className='flex flex-col spacey-y-2'>
          {/* Title */}
          <span className='text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide'>
            Web Developer
          </span>
          {/* Date */}
          <span className='font-mono text-xs text-gray-500'>
            June 2020 – July 2021
          </span>
        </div>
        <div className='flex flex-col space-y-4 sm:text-sm text-xs'>
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className='flex flex-row space-x-2'>
                <ArrowIcon className={'h-5 w-4 text-AAsecondary flex-none'} />
                <span
                  className='text-gray-500 sm:text-sm text-xs'
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords,
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
