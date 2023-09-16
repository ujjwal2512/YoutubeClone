import React from 'react';
const formatNumber = (number) => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(2) + 'M';
  } else if (number >= 1000) {
    return (number / 1000).toFixed(2) + 'K';
  } else {
    return number.toString();
  }
};


const VideoCard = ({info}) => {
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;
    const formattedViewCount = formatNumber(statistics.viewCount);

  return (
    <div className='p-2 m-2 ml-7 w-80 sm:w-100 sm:p-auto md:w-80 lg:w-96 xl:w-80 2xl:w-80'>
    <img className='rounded-lg' alt="thumbnail" src={thumbnails.medium.url}/>
    <ul>
        <li className='font-bold py-2'>{title}</li>
        <li className='text-sm text-gray-600 font-bold'>{channelTitle}</li>
        <li className='text-sm text-gray-600 font-bold'>{formattedViewCount} views</li>

    </ul>
    </div>
  )
}

export default VideoCard