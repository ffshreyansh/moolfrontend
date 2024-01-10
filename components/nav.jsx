import React from 'react'

const Navbar = () => {
    return (
        <div className='h-fit border-b py-3 px-2 lg:px-8'>
            <div className=' lg:ml-auto flex items-center justify-between gap-2 w-full lg:w-fit '>
                <span className=' cursor-pointer hidden lg:inline'>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="6" fill="white" />
                    <g clip-path="url(#clip0_1_6730)">
                        <path d="M17.575 17.5C17.7709 16.9431 18.1576 16.4734 18.6666 16.1743C19.1756 15.8752 19.774 15.7658 20.3559 15.8656C20.9378 15.9654 21.4656 16.268 21.8459 16.7196C22.2261 17.1713 22.4342 17.743 22.4333 18.3334C22.4333 20 19.9333 20.8334 19.9333 20.8334M20 24.1667H20.0083M28.3333 20C28.3333 24.6024 24.6023 28.3334 20 28.3334C15.3976 28.3334 11.6666 24.6024 11.6666 20C11.6666 15.3976 15.3976 11.6667 20 11.6667C24.6023 11.6667 28.3333 15.3976 28.3333 20Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_6730">
                            <rect width="20" height="20" fill="white" transform="translate(10 10)" />
                        </clipPath>
                    </defs>
                </svg>
                </span>
                <span className=' cursor-pointer'>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="6" fill="white" />
                        <path d="M21.4417 27.5C21.2952 27.7526 21.0849 27.9622 20.8319 28.108C20.5788 28.2537 20.292 28.3304 20 28.3304C19.708 28.3304 19.4212 28.2537 19.1681 28.108C18.9151 27.9622 18.7048 27.7526 18.5583 27.5M25 16.6667C25 15.3406 24.4732 14.0688 23.5355 13.1312C22.5979 12.1935 21.3261 11.6667 20 11.6667C18.6739 11.6667 17.4021 12.1935 16.4645 13.1312C15.5268 14.0688 15 15.3406 15 16.6667C15 22.5 12.5 24.1667 12.5 24.1667H27.5C27.5 24.1667 25 22.5 25 16.6667Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </span>
                <div className='flex items-center gap-2 border-2 text-sm py-2 px-2 rounded-md cursor-pointer'>
                    <img className='object-cover rounded-full w-6 h-6' src="https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593112031/img_logo?e=2147483647&v=beta&t=o1304VK0Zbh3CBA-8_LNYNZZCNrQjMIBS-nwKrAMzbY" alt="" />
                    <span className='font-medium'>Abhishek Mohanty</span>
                    <img src="/down.svg" alt="angle down" />
                </div>
            </div>

        </div>
    )
}

export default Navbar