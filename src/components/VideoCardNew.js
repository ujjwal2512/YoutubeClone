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

const VideoCardNew = ({info}) => {
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;
    const formattedViewCount = formatNumber(statistics.viewCount);

  return (
    <div className='flex w-80 mt-4'>
    <img className='rounded-lg w-40 h-20 mr-2' alt="thumbnail" src={thumbnails.medium.url}/>
    <div>
    <ul>
        <li className='font-bold text-xs'>{title}</li>
        <li className='text-xs pt-1 text-gray-600 font-bold'>{channelTitle}</li>
        <li className='text-xs pt-1 text-gray-600 font-bold'>{formattedViewCount} views</li>

    </ul>
    </div>
    </div>
  )
}

export default VideoCardNew;