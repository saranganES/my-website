import React from 'react';
import ArrowIcon from '../../../Icons/ArrowIcon';
import { getTasksTextWithHighlightedKeyword } from './taskAndType';

export default function TrouveTavoie() {
  const tasks = [
    {
      text: 'Led a cross-functional development team of 5, overseeing the successful delivery of multiple full-stack applications, from initial design to deployment and maintenance',
      keywords: ['team of 5', 'full-stack applications'],
    },
    {
      text: 'Integrated third-party APIs and microservices to enhance product functionality, and increasing feature flexibility.',
      keywords: ['APIs', 'microservices'],
    },
    {
      text: 'Managed code reviews, version control, and continuous integration pipelines, ensuring smooth deployment processes.',
      keywords: ['code reviews', 'version control'],
    },
  ];

  return (
    <>
      <div className='flex flex-col space-y-5 max-w-xl px-4 md:px-0'>
        <div className='flex flex-col spacey-y-2'>
          {/* Title */}
          <span className='text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide'>
            Full Stack Development - Team Lead{' '}
          </span>
          {/* Date */}
          <span className='font-mono text-xs text-gray-500'>
            August 2023 - Present
          </span>
        </div>
        <div className='flex flex-col space-y-4 sm:text-sm text-xs'>
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className='flex flex-row space-x-1'>
                <ArrowIcon className={' h-5 w-4 text-AAsecondary flex-none'} />
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
