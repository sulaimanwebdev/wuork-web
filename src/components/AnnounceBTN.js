import React from 'react'
import AnnounceText from './AnnounceText'

const AnnounceBTN = (props) => {
  return (
    <>
    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <AnnounceText
              announceBTNtext={props.announceBTNtext}
              /> {' '}
              <a href={props.announceBTNlink} className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
    </>
  )
}

export default AnnounceBTN