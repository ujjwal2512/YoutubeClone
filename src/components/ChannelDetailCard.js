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

const ChannelDetailCard = ({info}) => {
    const formattedSubscriberCount = formatNumber(info.statistics.subscriberCount);
  return (
    <div className='flex'>
        <img className='rounded-full w-12 h-12' src={info.snippet.thumbnails.default.url} />
        <div>
            <h3 className='font-bold text-sm px-2 py-1'>{info.snippet.title}</h3>
            <h3 className='font-bold text-xs px-2 py-1 text-gray-500'>{formattedSubscriberCount} subscribers</h3>
        </div>
    </div>
  )
}

export default ChannelDetailCard;