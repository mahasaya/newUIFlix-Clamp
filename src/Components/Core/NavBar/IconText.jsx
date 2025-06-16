import React from 'react'

// IconText.jsx
const IconText = ({ Icon, textCap, textSmall, mobile }) => {
    return (
        <div className={`flex items-center ${mobile ? 'gap-2' : 'gap-3'}`}>
            {Icon}
            <div className={mobile ? 'text-xs' : 'text-sm'}>
                <div className="font-semibold">{textCap}</div>
                <div className="text-gray-600">{textSmall}</div>
            </div>
        </div>
    )
}

export default IconText