import React from 'react';
import ArrowIcon from '../../../Icons/ArrowIcon';
import { getTasksTextWithHighlightedKeyword } from './taskAndType';
export default function FeverTokens() {
  const tasks = [
    {
      text: 'Developed and maintained dynamic, responsive websites and web applications using Next.js, React.js, and Node.js, significantly improving client-side rendering speeds and server-side performance.',
      keywords: ['Next.js', 'React.js', 'Node.js'],
    },
    {
      text: 'Leveraged Next.js for implementing server-side rendering (SSR) and static site generation (SSG) to optimize SEO and page load times, which resulted in a 50% increase in user traffic.',
      keywords: [
        'server-side rendering',
        'static site generation',
        'optimize SEO',
      ],
    },
    {
      text: 'Optimized application performance through lazy loading, code splitting, and caching strategies, leading to a 25% reduction in page load time.',
      keywords: ['lazy loading', 'code splitting', 'caching strategies'],
    },
  ];
  return (
    <>
      <div className='flex flex-col space-y-5 max-w-xl px-4 md:px-0'>
        <div className='flex flex-col spacey-y-2'>
          {/* Title */}
          <span className='text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide'>
            Software Engineer
          </span>
          {/* Date */}
          <span className='font-mono text-xs text-gray-500'>
            October 2021 - April 2023
          </span>
        </div>
        <div className='flex flex-col space-y-4 sm:text-sm text-xs'>
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className='flex flex-row space-x-2'>
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
