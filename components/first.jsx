'use client'
import React, { useEffect, useState } from 'react'

const First = () => {
    const [data, setData] = useState([]);
    // const [filteredData, setFilteredData] = useState([]);

   //fetched data from api
    useEffect(() => {
        fetch('https://moolapi.onrender.com/assignment/declarations')
            .then((res) => res.json())
            .then((datas) => {
                // setData(datas);

                // Filter data and setFilteredData
                const filteredData = Object.values(datas)
                    .filter(item => item.section === '80C');
                setData(filteredData);
                console.log(filteredData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    console.log(data)

    const handleEditAmount = (index) => {
        // update the state to mark the item as being edited
        setData((prevData) => {
            return prevData.map((item, i) => {
                if (i === index) {
                    return { ...item, editing: true };
                }
                return item;
            });
        });
    };
    const handleSaveAmount = () => {
        // save all changes by setting editing to false for all items
        setData((prevData) => {
            return prevData.map((item) => ({ ...item, editing: false }));
        });
    };

    return (
        <div className='w-full lg:w-4/5 mx-auto p-3 mt-4'>
            <div className='flex items-center justify-between px-2 lg:px-10'>
                <span className='font-bold text-xl'>Chapter VI-A</span>
                <div className='items-center gap-2 flex flex-col lg:flex-row'>
                    <span className='text-sm font-medium'>Financial Year: </span>
                    <div className='flex items-center p-2 border rounded-md text-xs font-medium'>
                        <input type="date" className='pr-2 py-0 w-6 outline-none' content='' />
                        <span>2023-24</span>
                    </div>
                </div>
            </div>
            <div className='w-full bg-warnbg px-2 lg:px-10 py-2 mt-10 flex items-center gap-3'>
                <span>
                    <svg width="84" height="67" viewBox="0 0 84 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="20.0511" y="4.48267" width="41.8848" height="55.0347" rx="6" fill="url(#paint0_linear_1_6947)" />
                        <rect x="23.4603" y="7.89191" width="35.5534" height="23.3776" rx="4" fill="url(#paint1_linear_1_6947)" />
                        <rect x="23.4603" y="38.0879" width="35.5534" height="5.35736" rx="1" fill="#FFE8DB" />
                        <rect x="23.4603" y="46.3675" width="35.5534" height="2.43516" rx="1" fill="#FFE8DB" />
                        <rect x="31.7399" y="51.7249" width="18.9943" height="1.94813" rx="0.974065" fill="#FFE8DB" />
                        <rect x="33.244" width="41.8848" height="55.0347" rx="6" transform="rotate(15 33.244 0)" fill="url(#paint2_linear_1_6947)" />
                        <rect x="35.6547" y="4.17542" width="35.5534" height="23.3776" rx="4" transform="rotate(15 35.6547 4.17542)" fill="url(#paint3_linear_1_6947)" />
                        <rect x="27.8394" y="33.3425" width="35.5534" height="5.35736" rx="1" transform="rotate(15 27.8394 33.3425)" fill="#FFE8DB" />
                        <rect x="25.6965" y="41.34" width="35.5534" height="2.43516" rx="1" transform="rotate(15 25.6965 41.34)" fill="#FFE8DB" />
                        <rect x="32.3074" y="48.6577" width="18.9943" height="1.94813" rx="0.974065" transform="rotate(15 32.3074 48.6577)" fill="#FFE8DB" />
                        <circle cx="72.6506" cy="15.1974" r="11.2017" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M68.6374 9.95695C69.1108 9.48359 69.8783 9.48359 70.3516 9.95695L78.3781 17.9834C78.8515 18.4568 78.8515 19.2242 78.3781 19.6976C77.9047 20.171 77.1373 20.171 76.6639 19.6976L68.6374 11.6712C68.1641 11.1978 68.1641 10.4303 68.6374 9.95695Z" fill="#FF4646" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M78.3781 10.21C78.8514 10.6834 78.8514 11.4509 78.3781 11.9242L70.3516 19.9507C69.8783 20.4241 69.1108 20.4241 68.6374 19.9507C68.1641 19.4773 68.1641 18.7099 68.6374 18.2365L76.6639 10.21C77.1372 9.73668 77.9047 9.73668 78.3781 10.21Z" fill="#FF4646" />
                        <defs>
                            <linearGradient id="paint0_linear_1_6947" x1="60.9619" y1="5.45673" x2="20.5382" y2="59.5173" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#9AB0FF" />
                                <stop offset="1" stop-color="#3551B6" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1_6947" x1="60.9618" y1="7.89191" x2="23.9474" y2="31.2695" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#AE92FF" />
                                <stop offset="1" stop-color="#1D1396" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_1_6947" x1="74.1548" y1="0.974065" x2="33.7311" y2="55.0347" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FFECCF" />
                                <stop offset="1" stop-color="#F17921" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_1_6947" x1="73.1562" y1="4.17541" x2="36.1417" y2="27.553" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF9F92" />
                                <stop offset="1" stop-color="#D64424" />
                            </linearGradient>
                        </defs>
                    </svg>

                </span>
                <div className='flex flex-col items-start text-warningtxt'>
                    <span className='font-bold text-md'>Amount not declared</span>
                    <span className='text-sm'>You will miss out on lot of tax benefits</span>
                </div>
            </div>
            <div className='px-2 lg:px-10 w-full py- flex flex-col gap-4 mt-8'>
                <div className='flex flex-col items-start gap-2'>
                    <span className='font-bold text-xl'>Declaration</span>
                    <span className='text-xs text-gray-600'>Upload proof of the declarations that you have done for the <span className='font-medium'>FY 2022-23</span></span>
                </div>
                <div className='flex items-start lg:items-center flex-col lg:flex-row gap-10 mt-10'>
                    <div className='flex items-center gap-3'>
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="28" cy="28" r="28" fill="#F2FFD6" />
                            <path d="M29 21C29 22.1046 26.5376 23 23.5 23C20.4624 23 18 22.1046 18 21M29 21C29 19.8954 26.5376 19 23.5 19C20.4624 19 18 19.8954 18 21M29 21V22.5M18 21V33C18 34.1046 20.4624 35 23.5 35M23.5 27C23.3315 27 23.1647 26.9972 23 26.9918C20.1967 26.9 18 26.0433 18 25M23.5 31C20.4624 31 18 30.1046 18 29M38 27.5C38 28.6046 35.5376 29.5 32.5 29.5C29.4624 29.5 27 28.6046 27 27.5M38 27.5C38 26.3954 35.5376 25.5 32.5 25.5C29.4624 25.5 27 26.3954 27 27.5M38 27.5V35C38 36.1046 35.5376 37 32.5 37C29.4624 37 27 36.1046 27 35V27.5M38 31.25C38 32.3546 35.5376 33.25 32.5 33.25C29.4624 33.25 27 32.3546 27 31.25" stroke="#93CC1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className='flex flex-col justify-between gap-1'>
                            <span className='text-xs font-medium text-gray-500'>Declared Amount</span>
                            <span className='font-bold '>67,987 INR</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="28" cy="28" r="28" fill="#D6EEFF" />
                            <path d="M36 21C36 22.6569 32.4183 24 28 24C23.5817 24 20 22.6569 20 21M36 21C36 19.3431 32.4183 18 28 18C23.5817 18 20 19.3431 20 21M36 21V35C36 36.6569 32.4183 38 28 38C23.5817 38 20 36.6569 20 35V21M36 25.6666C36 27.3235 32.4183 28.6666 28 28.6666C23.5817 28.6666 20 27.3235 20 25.6666M36 30.33C36 31.9869 32.4183 33.33 28 33.33C23.5817 33.33 20 31.9869 20 30.33" stroke="#25A4FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <div className='flex flex-col justify-between gap-1'>
                            <span className='text-xs font-medium text-gray-500'>Remaining to declare</span>
                            <span className='font-bold '>67,987 INR</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-full bgp h-24 mt-10 py-3 px-2 lg:px-10 flex flex-col justify-between'>
                <div className='flex items-center gap-1  font-medium'>
                    <span className=' text-gray-500 text-sm'>Tax Regime:</span>
                    <span className='font-medium text-sm'>Old</span>
                    <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.6667 14.1667H3.33334M3.33334 14.1667L6.66668 10.8333M3.33334 14.1667L6.66668 17.5M3.33334 5.83333H16.6667M16.6667 5.83333L13.3333 2.5M16.6667 5.83333L13.3333 9.16667" stroke="#405CD2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </span>
                    <span className='font-medium text-xs blu'>Change</span>
                </div>
                <div className='flex items-start gap-2'>
                    <span className='pt-1'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_6689)">
                                <path d="M10 13.3333V9.99999M10 6.66666H10.0083M18.3333 9.99999C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 9.99999C1.66667 5.39762 5.39763 1.66666 10 1.66666C14.6024 1.66666 18.3333 5.39762 18.3333 9.99999Z" stroke="#10AA64" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_6689">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                    <p className='grn text-xs lg:text-sm break-words w-full lg:w-1/2 font-medium'>Considering your salary structure we feel that Old Regime suits you the best. Although you can move to other tax regime if you want</p>
                </div>
            </div>
            <div className='mt-10  w-full flex flex-col gap-5'>

                <div className='flex flex-col w-full'>
                    <div className='flex items-center justify-between gry px-2 lg:px-10 py-4 rounded-md cursor-pointer'>
                        <span className='flex items-center gap-1'>
                            <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.0935 10L6.08633 10M21.0935 10L23.0918 13.1069C23.5396 13.8032 23.7636 14.1514 23.8798 14.5262C23.9829 14.8582 24.0236 15.2045 24.0003 15.5495C23.9739 15.9389 23.8363 16.324 23.561 17.0944L23.3382 17.7179C22.9165 18.8981 22.7056 19.4882 22.3145 19.9245C21.9692 20.3098 21.5257 20.608 21.0246 20.7918C20.4573 21 19.7905 21 18.4569 21L8.72293 21C7.38936 21 6.72257 21 6.15521 20.7918C5.65421 20.608 5.21068 20.3098 4.86532 19.9245C4.47422 19.4882 4.26336 18.8981 3.84165 17.7179L3.61886 17.0944C3.3436 16.324 3.20597 15.9389 3.1796 15.5495C3.15623 15.2044 3.19697 14.8582 3.30002 14.5261C3.41631 14.1514 3.64023 13.8032 4.08807 13.1069L6.08633 10M21.0935 10L21.5408 8.53955C21.7529 7.84717 21.8589 7.50097 21.7756 7.22708C21.7026 6.98715 21.5362 6.78132 21.309 6.64996C21.0495 6.5 20.6636 6.5 19.8917 6.5L7.28816 6.5C6.51626 6.5 6.13031 6.5 5.87089 6.64996C5.64364 6.78132 5.47721 6.98715 5.40425 7.22708C5.32096 7.50097 5.42699 7.84717 5.63904 8.53955L6.08633 10M13.5899 6.5H9.79985C9.24141 6.5 8.70584 6.28929 8.31096 5.91421C7.91609 5.53914 7.69425 5.03043 7.69425 4.5C7.69425 3.96957 7.91609 3.46086 8.31096 3.08579C8.70584 2.71071 9.24141 2.5 9.79985 2.5C12.7477 2.5 13.5899 6.5 13.5899 6.5ZM13.5899 6.5H17.38C17.9385 6.5 18.474 6.28929 18.8689 5.91421C19.2638 5.53914 19.4856 5.03043 19.4856 4.5C19.4856 3.96957 19.2638 3.46086 18.8689 3.08579C18.474 2.71071 17.9385 2.5 17.38 2.5C14.4322 2.5 13.5899 6.5 13.5899 6.5Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span className='font-bold text-txtB'>Section 80C</span>
                        </span>
                        <img src="/down.svg" alt="" />
                    </div>
                    <div className='w-full border border-t-0 rounded-b-md '>
                        <div className='w-full border-b flex items-center justify-between text-xs font-medium text-gray-500 px-10 py-3'>
                            <span>Item</span>
                            <span>Amount (in INR)</span>
                        </div>
                        <div className='flex flex-col gap-3 py-4'>
                            {/* mapped data */}
                            {data.map((d, index) => (
                                <div key={index} className='w-full flex items-center justify-between text-xs font-medium text-gray-500 px-2 lg:px-10 py-3'>
                                    <span className=' break-words'>{d.label}</span>
                                    <div className='flex items-center gap-2'>
                                        {d.editing ? (
                                            <>
                                                <input
                                                    type="number"
                                                    className='outline-none w-1/2 ml-auto lg:w-fit text-right'
                                                    value={d.amount}
                                                    onChange={(e) => setData(prevData => prevData.map((item, i) => (i === index ? { ...item, amount: e.target.value } : item)))}
                                                />
                                            </>
                                        ) : (
                                            <>
                                                <span>{d.amount}</span>
                                                <span className='editAmount' onClick={() => handleEditAmount(index)}>

                                                    <svg width="18" height="18" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.3812 8.33334L12.8081 5M2.53528 17.9167L5.55848 17.6033C5.92785 17.565 6.11253 17.5459 6.28515 17.4937C6.4383 17.4475 6.58405 17.3821 6.71843 17.2995C6.8699 17.2063 7.0013 17.0837 7.26409 16.8386L19.0611 5.83334C20.0478 4.91286 20.0478 3.42048 19.0611 2.5C18.0744 1.57953 16.4746 1.57953 15.4879 2.5L3.69095 13.5052C3.42816 13.7504 3.29676 13.873 3.19688 14.0143C3.10826 14.1396 3.03821 14.2756 2.98863 14.4185C2.93275 14.5795 2.91223 14.7518 2.87119 15.0964L2.53528 17.9167Z" stroke="#405CD2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>

                <div className='flex items-center justify-between gry px-10 py-4 rounded-md cursor-pointer'>
                    <span className='flex items-center gap-1'>
                        <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5899 14.5V8.5M10.3741 11.5H16.8058M22.1655 12C22.1655 16.9084 16.4263 20.4784 14.3381 21.6149C14.1008 21.744 13.9822 21.8086 13.8147 21.8421C13.6847 21.8681 13.4951 21.8681 13.3652 21.8421C13.1977 21.8086 13.079 21.744 12.8417 21.6149C10.7535 20.4784 5.01439 16.9084 5.01439 12V7.2176C5.01439 6.41809 5.01439 6.01833 5.15456 5.6747C5.27838 5.37114 5.47959 5.10028 5.7408 4.88553C6.03648 4.64244 6.43771 4.50208 7.24018 4.22135L12.9877 2.21067C13.2106 2.13271 13.322 2.09373 13.4366 2.07828C13.5383 2.06457 13.6416 2.06457 13.7432 2.07828C13.8579 2.09373 13.9693 2.13271 14.1921 2.21067L19.9397 4.22135C20.7421 4.50208 21.1434 4.64244 21.4391 4.88553C21.7003 5.10028 21.9015 5.37114 22.0253 5.6747C22.1655 6.01833 22.1655 6.41809 22.1655 7.2176V12Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span className='font-bold text-txtB'>Section 80D</span>
                    </span>
                    <img src="/down.svg" alt="" />
                </div>
                <div className='flex items-center justify-between gry px-10 py-4 rounded-md cursor-pointer'>
                    <span className='flex items-center gap-1'>
                        <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7338 2.26953V6.40007C15.7338 6.96012 15.7338 7.24015 15.8506 7.45406C15.9534 7.64222 16.1174 7.7952 16.3191 7.89108C16.5484 8.00007 16.8486 8.00007 17.4489 8.00007H21.8766M15.7338 17H9.30216M17.8777 13H9.30216M22.1655 9.98822V17.2C22.1655 18.8802 22.1655 19.7202 21.815 20.362C21.5067 20.9265 21.0147 21.3854 20.4096 21.673C19.7217 22 18.8212 22 17.0201 22H10.1597C8.35868 22 7.45816 22 6.77026 21.673C6.16516 21.3854 5.67321 20.9265 5.36489 20.362C5.01439 19.7202 5.01439 18.8802 5.01439 17.2V6.8C5.01439 5.11984 5.01439 4.27976 5.36489 3.63803C5.67321 3.07354 6.16516 2.6146 6.77026 2.32698C7.45816 2 8.35868 2 10.1597 2H13.6026C14.3891 2 14.7824 2 15.1525 2.08289C15.4806 2.15638 15.7943 2.27759 16.082 2.44208C16.4066 2.6276 16.6847 2.88703 17.2408 3.40589L20.6584 6.59411C21.2146 7.11297 21.4927 7.3724 21.6916 7.67515C21.8679 7.94356 21.9978 8.2362 22.0766 8.5423C22.1655 8.88757 22.1655 9.25445 22.1655 9.98822Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span className='font-bold text-txtB'>Section 80G</span>
                    </span>
                    <img src="/down.svg" alt="" />
                </div>
            </div>
            <button className='bg-btn w-20 h-10 text-white rounded-md my-10' onClick={handleSaveAmount}>Save</button>
        </div>
    )
}

export default First
