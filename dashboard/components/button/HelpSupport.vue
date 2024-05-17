<template lang="">
    <div class="xl:col-span-2 flex justify-end items-center gap-x-2">
        <div class="flex items-center">
            <div class="lg:hidden">
                <button type="button" class="inline-flex flex-shrink-0 justify-center items-center gap-x-2 h-[38px] w-[38px] rounded-full text-gray-500 hover:bg-skin focus:outline-none focus:bg-skin dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#hs-pro-dnsm">
                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                </svg>
                </button>
            </div>
            <div class="hs-dropdown relative inline-flex [--placement:top-right]">
                <div class="hs-tooltip inline-block [--placement:bottom]">
                    <button id="hs-pro-dnhd" type="button" class="hs-tooltip-toggle w-[38px] h-[38px] inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent text-gray-500 hover:bg-skin disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-skin">
                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <path d="M12 17h.01" />
                        </svg>
                    </button>
                    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700" role="tooltip">
                        Help and Support
                    </span>
                </div>
                <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-mainyellow rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] border border-mainblack" aria-labelledby="hs-pro-dnhd">
                    <div class="p-1">
                        <a class="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-mainblack hover:bg-skin focus:outline-none focus:bg-skin" href="#">
                            <svg class="flex-shrink-0 mt-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                <path d="M12 17h.01" />
                            </svg>
                        Help Centre
                        </a>
                        <a class="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-mainblack hover:bg-skin focus:outline-none focus:bg-skin" href="#">
                            <svg class="flex-shrink-0 mt-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            Community
                        </a>
                        <a class="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-mainblack hover:bg-skin focus:outline-none focus:bg-skin" href="#">
                            <svg class="flex-shrink-0 mt-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                            </svg>
                            What’s New
                        </a>

                        <div class="my-1 border-t border-gray-200 dark:border-neutral-800"></div>

                            <a class="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-mainblack hover:bg-skin focus:outline-none focus:bg-skin" href="#">
                                <svg class="flex-shrink-0 mt-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 16v-4" />
                                    <path d="M12 8h.01" />
                                </svg>
                                Privacy and Legal
                            </a>
                            <a class="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-mainblack hover:bg-skin focus:outline-none focus:bg-skin" href="#">
                                <svg class="flex-shrink-0 mt-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                </svg>
                                Documentation
                            </a>
                            <a class="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-mainblack hover:bg-skin focus:outline-none focus:bg-skin" href="#">
                                <svg class="flex-shrink-0 mt-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                </svg>
                                Hire an Expert
                                <div class="ms-auto">
                                    <span class="inline-flex items-center gap-1.5 py-px px-1.5 rounded text-[10px] leading-4 font-medium bg-skin text-mainblack dark:bg-neutral-700 dark:text-neutral-300">
                                    New
                                    </span>
                                </div>
                            </a>

                            <div class="my-1 border-t border-gray-200 dark:border-neutral-800"></div>

                            <a class="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-mainblack hover:bg-skin focus:outline-none focus:bg-skin" href="#">
                                <svg class="flex-shrink-0 mt-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                    <line x1="9" x2="15" y1="10" y2="10" />
                                    <line x1="12" x2="12" y1="7" y2="13" />
                                </svg>
                                Submit Feedback
                            </a>

                            <div class="hs-dropdown relative [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
                                <button type="button" class="hs-dropdown-toggle w-full flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-mainblack hover:bg-skin focus:outline-none focus:bg-skin">
                                    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                    Contact Us
                                    <svg class="rotate-90 md:rotate-0 ms-auto w-3 h-3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 top-0 end-full md:!me-3 md:mt-1 md:p-1 bg-mainyellow md:shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] md:rounded-lg before:absolute before:-end-5 before:top-0 before:h-full before:w-5">
                                <a class="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-mainblack hover:bg-skin focus:outline-none focus:bg-skin" href="#">
                                    <svg class="flex-shrink-0 mt-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                                        <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                                    </svg>
                                    Contact Support
                                    </a>
                                    <a class="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-mainblack hover:bg-skin focus:outline-none focus:bg-skin" href="#">
                                    <svg class="flex-shrink-0 mt-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                                    </svg>
                                    Contact Sales
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Help Dropdown -->
            </div>
            <!-- End Help -->

            <!-- Notifications -->
            <div class="hs-dropdown relative inline-flex [--auto-close:inside]">
                <!-- Notifications Button Icon -->
                <div class="hs-tooltip inline-block [--placement:bottom]">
                    <button id="hs-pro-dnnd" type="button" class="hs-tooltip-toggle relative w-[38px] h-[38px] inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent text-gray-500 hover:bg-skin disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-skin">
                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                        </svg>
                        <span class="flex absolute top-0 end-0 -mt-1.5 -me-1.5">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 dark:bg-red-600"></span>
                        <span class="relative min-w-[18px] min-h-[18px] inline-flex justify-center items-center text-[10px] bg-red-500 text-white rounded-full px-1">
                            2
                        </span>
                        </span>
                    </button>
                    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700" role="tooltip">
                        Notifications
                    </span>
                </div>
                <!-- End Notifications Button Icon -->

                <!-- Notifications Dropdown -->
                <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-full sm:w-96 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-mainyellow border-t border-gray-200 sm:border-t-0 sm:rounded-lg shadow-md sm:shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)]" aria-labelledby="hs-pro-dnnd">
                    <!-- Header -->
                    <div class="px-5 pt-3 flex justify-between items-center border-b border-gray-200 dark:border-neutral-800">
                        <!-- Nav Tab -->
                        <nav class="flex space-x-1" aria-label="Tabs" role="tablist">
                            <button type="button" class="hs-tab-active:after:bg-mainblack hs-tab-active:text-mainblack px-2.5 py-1.5 mb-2 relative inline-flex items-center gap-x-2 hover:bg-skin text-gray-500 hover:text-mainblack text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-skin after:absolute after:-bottom-2 after:inset-x-2.5 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 active" id="hs-pro-tabs-dnn-item-all" data-hs-tab="#hs-pro-tabs-dnn-all" aria-controls="hs-pro-tabs-dnn-all" role="tab">
                                All
                            </button>
                            <button type="button" class="hs-tab-active:after:bg-mainblack hs-tab-active:text-mainblack px-2.5 py-1.5 mb-2 relative inline-flex items-center gap-x-2 hover:bg-skin text-gray-500 hover:text-mainblack text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-skin after:absolute after:-bottom-2 after:inset-x-2.5 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" id="hs-pro-tabs-dnn-item-archived" data-hs-tab="#hs-pro-tabs-dnn-archived" aria-controls="hs-pro-tabs-dnn-archived" role="tab">
                                Archived
                            </button>
                        </nav>
                        <!-- End Nav Tab -->

                        <!-- Notifications Button Icon -->
                        <div class="hs-tooltip relative inline-block mb-3">
                            <a class="hs-tooltip-toggle w-7 h-7 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent text-gray-500 hover:bg-skin disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-skin dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="../../pro/dashboard/account-profile.html">
                                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                                <circle cx="12" cy="12" r="3" />
                                </svg>
                            </a>
                            <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700" role="tooltip">
                                Preferences
                            </span>
                        </div>
                        <!-- End Notifications Button Icon -->
                    </div>
                    <!-- End Header -->

                    <div class="h-[480px] bg-mainyellpw overflow-y-auto overflow-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-skin [&::-webkit-scrollbar-thumb]:bg-gray-300">
                        <!-- Tab Content -->
                        <div id="hs-pro-tabs-dnn-all" role="tabpanel" aria-labelledby="hs-pro-tabs-dnn-item-all">
                            <!-- List Group -->
                            <ul class="divide-y divide-gray-200 dark:divide-neutral-800">
                                <!-- List Item -->
                                <li class="relative group w-full flex gap-x-5 text-start p-5 bg-skin dark:bg-skin">
                                    <div class="relative flex-shrink-0">
                                        <img class="flex-shrink-0 w-[38px] h-[38px] rounded-full" src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Image Description">
                                        <span class="absolute top-4 -start-3 w-2 h-2 bg-blue-600 rounded-full dark:bg-blue-500"></span>
                                    </div>
                                    <div class="grow">
                                        <p class="text-xs text-gray-500 dark:text-neutral-500">
                                        2 hours ago
                                        </p>
                                        <span class="block text-sm font-medium text-mainblack">
                                        Eilis Warner
                                        </span>
                                        <p class="text-sm text-gray-500 dark:text-neutral-500">
                                        changed an issue from “in Progress” to “Review”
                                        </p>
                                    </div>
                                    <div>
                                        <div class="sm:group-hover:opacity-100 sm:opacity-0 p-0.5 sm:absolute sm:top-5 sm:end-5 bg-white border border-gray-200 rounded-lg shadow-sm transition ease-out dark:bg-neutral-800 dark:border-neutral-700">
                                            <div class="flex items-center">
                                                <div class="hs-tooltip relative inline-block">
                                                    <button type="button" class="hs-tooltip-toggle w-7 h-7 flex flex-shrink-0 justify-center items-center text-gray-500 hover:bg-skin hover:text-gray-800 rounded disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-skin dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700">
                                                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <polyline points="9 11 12 14 22 4" />
                                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                                        </svg>
                                                        <svg class="flex-shrink-0 w-4 h-4 hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <rect width="18" height="18" x="3" y="3" rx="2" />
                                                        <path d="M8 12h8" />
                                                        </svg>
                                                    </button>
                                                    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700" role="tooltip">
                                                        Mark this notification as read
                                                    </span>
                                                </div>
                                                <div class="hs-tooltip relative inline-block">
                                                    <button type="button" class="hs-tooltip-toggle w-7 h-7 flex flex-shrink-0 justify-center items-center text-gray-500 hover:bg-skin hover:text-gray-800 rounded disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-skin dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700">
                                                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <rect width="20" height="5" x="2" y="4" rx="2" />
                                                        <path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
                                                        <path d="M10 13h4" />
                                                        </svg>
                                                    </button>
                                                    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700" role="tooltip">
                                                        Archive this notification
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <!-- End List Item -->

                                <!-- List Item -->
                                <li class="relative group w-full flex gap-x-5 text-start p-5">
                                    <div class="relative flex-shrink-0">
                                        <span class="flex flex-shrink-0 justify-center items-center w-[38px] h-[38px] bg-white border border-gray-200 text-gray-500 text-sm font-semibold rounded-full shadow-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                                        CB
                                        </span>
                                    </div>
                                    <div class="grow">
                                        <p class="text-xs text-gray-500 dark:text-neutral-500">
                                            3 days ago
                                        </p>
                                        <span class="block text-sm font-medium text-mainblack">
                                        Clara Becker
                                        </span>
                                        <p class="text-sm text-gray-500 dark:text-neutral-500">
                                        mentioned you in a comment
                                        </p>
                                        <div class="mt-2">
                                            <blockquote class="ps-3 border-s-4 border-gray-200 text-sm text-gray-500 dark:border-neutral-700 dark:text-neutral-400">
                                                Nice work, love! You really nailed it. Keep it up!
                                            </blockquote>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="sm:group-hover:opacity-100 sm:opacity-0 p-0.5 sm:absolute sm:top-5 sm:end-5 bg-white border border-gray-200 rounded-lg shadow-sm transition ease-out dark:bg-neutral-800 dark:border-neutral-700">
                                            <div class="flex items-center">
                                                <div class="hs-tooltip relative inline-block">
                                                    <button type="button" class="hs-tooltip-toggle w-7 h-7 flex flex-shrink-0 justify-center items-center text-gray-500 hover:bg-skin hover:text-gray-800 rounded disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-skin dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700">
                                                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <polyline points="9 11 12 14 22 4" />
                                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                                        </svg>
                                                        <svg class="flex-shrink-0 w-4 h-4 hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <rect width="18" height="18" x="3" y="3" rx="2" />
                                                        <path d="M8 12h8" />
                                                        </svg>
                                                        <svg class="w-4 h-4 hidden" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                                                        <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                        </svg>
                                                    </button>
                                                    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700" role="tooltip">
                                                        Mark this notification as read
                                                    </span>
                                                </div>
                                                <div class="hs-tooltip relative inline-block">
                                                    <button type="button" class="hs-tooltip-toggle w-7 h-7 flex flex-shrink-0 justify-center items-center text-gray-500 hover:bg-skin hover:text-gray-800 rounded disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-skin dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700">
                                                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <rect width="20" height="5" x="2" y="4" rx="2" />
                                                        <path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
                                                        <path d="M10 13h4" />
                                                        </svg>
                                                    </button>
                                                    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700" role="tooltip">
                                                        Archive this notification
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <!-- End List Item -->

                                <!-- List Item -->
                                <li class="relative group w-full flex gap-x-5 text-start p-5">
                                    <div class="relative flex-shrink-0">
                                        <svg class="flex-shrink-0 w-[38px] h-[38px] rounded-full" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="6" fill="#2563EB" />
                                        <path d="M6 26.4167V15.5833C6 10.0605 10.4772 5.58333 16 5.58333C21.5228 5.58333 26 10.0605 26 15.5833C26 21.1062 21.5228 25.5833 16 25.5833H15.1667" stroke="white" stroke-width="1.5" />
                                        <path d="M9.33328 26.4168V15.7168C9.33328 11.9612 12.3181 8.91678 15.9999 8.91678C19.6818 8.91678 22.6666 11.9612 22.6666 15.7168C22.6666 19.4723 19.6818 22.5168 15.9999 22.5168H15.1666" stroke="white" stroke-width="1.5" />
                                        <circle cx="15.9999" cy="15.6011" r="4.16667" fill="white" />
                                        </svg>
                                    </div>
                                    <div class="grow">
                                        <p class="text-xs text-gray-500 dark:text-neutral-500">
                                        5 Jan 2023
                                        </p>
                                        <span class="block text-sm font-medium text-mainblack">
                                        New Update on Preline
                                        </span>
                                        <p class="text-sm text-gray-500 dark:text-neutral-500">
                                        Add yourself to our new “Hire Page”. Let visitors know you’re open to freelance or full-time work.
                                        </p>
                                        <a class="mt-2 p-1.5 inline-flex items-center border border-gray-200 rounded-xl hover:bg-gray-50 hover:shadow-sm focus:outline-none focus:bg-skin dark:border-neutral-700 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                                        <img class="w-[70px] h-[62px] object-cover rounded-lg" src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description">
                                        <div class="grow py-2.5 px-4">
                                            <p class="text-sm font-medium text-mainblack">
                                            Get hired!
                                            </p>
                                            <p class="inline-flex items-center gap-x-1 text-sm text-gray-500 dark:text-neutral-500">
                                            Get started
                                            <svg class="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="m9 18 6-6-6-6" />
                                            </svg>
                                            </p>
                                        </div>
                                        </a>
                                    </div>

                                    <div>
                                        <div class="sm:group-hover:opacity-100 sm:opacity-0 p-0.5 sm:absolute sm:top-5 sm:end-5 bg-white border border-gray-200 rounded-lg shadow-sm transition ease-out dark:bg-neutral-800 dark:border-neutral-700">
                                            <div class="flex items-center">
                                                <div class="hs-tooltip relative inline-block">
                                                    <button type="button" class="hs-tooltip-toggle w-7 h-7 flex flex-shrink-0 justify-center items-center text-gray-500 hover:bg-skin hover:text-gray-800 rounded disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-skin dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700">
                                                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <polyline points="9 11 12 14 22 4" />
                                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                                        </svg>
                                                        <svg class="flex-shrink-0 w-4 h-4 hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <rect width="18" height="18" x="3" y="3" rx="2" />
                                                        <path d="M8 12h8" />
                                                        </svg>
                                                        <svg class="w-4 h-4 hidden" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                                                        <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                        </svg>
                                                    </button>
                                                    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700" role="tooltip">
                                                        Mark this notification as read
                                                    </span>
                                                </div>
                                                <div class="hs-tooltip relative inline-block">
                                                    <button type="button" class="hs-tooltip-toggle w-7 h-7 flex flex-shrink-0 justify-center items-center text-gray-500 hover:bg-skin hover:text-gray-800 rounded disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-skin dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700">
                                                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <rect width="20" height="5" x="2" y="4" rx="2" />
                                                        <path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
                                                        <path d="M10 13h4" />
                                                        </svg>
                                                    </button>
                                                    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700" role="tooltip">
                                                        Archive this notification
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <!-- End List Item -->

                                <!-- List Item -->
                                <li class="relative group w-full flex gap-x-5 text-start p-5">
                                    <div class="relative flex-shrink-0">
                                        <svg class="flex-shrink-0 w-[38px] h-[38px] rounded-full" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="6" fill="#2563EB" />
                                        <path d="M6 26.4167V15.5833C6 10.0605 10.4772 5.58333 16 5.58333C21.5228 5.58333 26 10.0605 26 15.5833C26 21.1062 21.5228 25.5833 16 25.5833H15.1667" stroke="white" stroke-width="1.5" />
                                        <path d="M9.33328 26.4168V15.7168C9.33328 11.9612 12.3181 8.91678 15.9999 8.91678C19.6818 8.91678 22.6666 11.9612 22.6666 15.7168C22.6666 19.4723 19.6818 22.5168 15.9999 22.5168H15.1666" stroke="white" stroke-width="1.5" />
                                        <circle cx="15.9999" cy="15.6011" r="4.16667" fill="white" />
                                        </svg>
                                    </div>
                                    <div class="grow">
                                        <p class="text-xs text-gray-500 dark:text-neutral-500">
                                        5 Jan 2023
                                        </p>
                                        <p class="text-sm text-gray-800 dark:text-neutral-400">
                                        We’re updating our Privacy Policy as of 10th January 2023
                                        </p>
                                        <p>
                                            <a class="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-blue-400 dark:hover:text-blue-500" href="#">
                                                Learn more
                                                <svg class="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="m9 18 6-6-6-6" />
                                                </svg>
                                            </a>
                                        </p>
                                    </div>

                                    <div>
                                        <div class="sm:group-hover:opacity-100 sm:opacity-0 p-0.5 sm:absolute sm:top-5 sm:end-5 bg-white border border-gray-200 rounded-lg shadow-sm transition ease-out dark:bg-neutral-800 dark:border-neutral-700">
                                            <div class="flex items-center">
                                                <div class="hs-tooltip relative inline-block">
                                                <button type="button" class="hs-tooltip-toggle w-7 h-7 flex flex-shrink-0 justify-center items-center text-gray-500 hover:bg-skin hover:text-gray-800 rounded disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-skin dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700">
                                                    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <polyline points="9 11 12 14 22 4" />
                                                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                                    </svg>
                                                    <svg class="flex-shrink-0 w-4 h-4 hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <rect width="18" height="18" x="3" y="3" rx="2" />
                                                    <path d="M8 12h8" />
                                                    </svg>
                                                    <svg class="w-4 h-4 hidden" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                                                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                    </svg>
                                                </button>
                                                <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700" role="tooltip">
                                                    Mark this notification as read
                                                </span>
                                                </div>
                                                <div class="hs-tooltip relative inline-block">
                                                <button type="button" class="hs-tooltip-toggle w-7 h-7 flex flex-shrink-0 justify-center items-center text-gray-500 hover:bg-skin hover:text-gray-800 rounded disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-skin dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700">
                                                    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <rect width="20" height="5" x="2" y="4" rx="2" />
                                                    <path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
                                                    <path d="M10 13h4" />
                                                    </svg>
                                                </button>
                                                <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700" role="tooltip">
                                                    Archive this notification
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <!-- End List Item -->

                                <!-- List Item -->
                                <li class="relative group w-full flex gap-x-5 text-start p-5 bg-skin dark:bg-neutral-800">
                                    <div class="relative flex-shrink-0">
                                        <img class="flex-shrink-0 w-[38px] h-[38px] rounded-full" src="https://images.unsplash.com/photo-1614880353165-e56fac2ea9a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Image Description">
                                        <span class="absolute top-4 -start-3 w-2 h-2 bg-blue-600 rounded-full dark:bg-blue-500"></span>
                                    </div>
                                    <div class="grow">
                                        <p class="text-xs text-gray-500 dark:text-neutral-500">
                                        31 Dec 2022
                                        </p>
                                        <span class="block text-sm font-medium text-mainblack">
                                        Rubia Walter
                                        </span>
                                        <p class="text-sm text-gray-500 dark:text-neutral-500">
                                        Joined the Slack group HS Team
                                        </p>
                                    </div>

                                    <div>
                                        <div class="sm:group-hover:opacity-100 sm:opacity-0 p-0.5 sm:absolute sm:top-5 sm:end-5 bg-white border border-gray-200 rounded-lg shadow-sm transition ease-out dark:bg-neutral-800 dark:border-neutral-700">
                                            <div class="flex items-center">
                                                <div class="hs-tooltip relative inline-block">
                                                    <button type="button" class="hs-tooltip-toggle w-7 h-7 flex flex-shrink-0 justify-center items-center text-gray-500 hover:bg-skin hover:text-gray-800 rounded disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-skin dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700">
                                                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <polyline points="9 11 12 14 22 4" />
                                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                                        </svg>
                                                        <svg class="flex-shrink-0 w-4 h-4 hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <rect width="18" height="18" x="3" y="3" rx="2" />
                                                        <path d="M8 12h8" />
                                                        </svg>
                                                        <svg class="w-4 h-4 hidden" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                                                        <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                        </svg>
                                                    </button>
                                                    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700" role="tooltip">
                                                        Mark this notification as read
                                                    </span>
                                                </div>
                                                <div class="hs-tooltip relative inline-block">
                                                    <button type="button" class="hs-tooltip-toggle w-7 h-7 flex flex-shrink-0 justify-center items-center text-gray-500 hover:bg-skin hover:text-gray-800 rounded disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-skin dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700">
                                                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <rect width="20" height="5" x="2" y="4" rx="2" />
                                                        <path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
                                                        <path d="M10 13h4" />
                                                        </svg>
                                                    </button>
                                                    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700" role="tooltip">
                                                        Archive this notification
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <!-- End List Item -->
                            </ul>
                            <!-- End List Group -->
                        </div>
                        <!-- End Tab Content -->

                        <!-- Tab Content -->
                        <div id="hs-pro-tabs-dnn-archived" class="hidden" role="tabpanel" aria-labelledby="hs-pro-tabs-dnn-item-archived">
                            <div class="h-[480px] flex flex-col justify-center text-center p-5">
                                <svg class="w-full" width="178" height="138" viewBox="0 0 178 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_499_322852)">
                                    <rect x="12" y="6" width="154" height="40" rx="8" class="fill-white dark:fill-neutral-800" fill="currentColor" shape-rendering="crispEdges" />
                                    <rect x="20" y="14" width="24" height="24" rx="4" class="fill-gray-200 dark:fill-neutral-700" fill="currentColor" />
                                    <g clip-path="url(#clip0_499_322852)">
                                    <path d="M32 32C32.3978 32 32.7794 31.8419 33.0607 31.5606C33.342 31.2793 33.5 30.8978 33.5 30.5H30.5C30.5 30.8978 30.658 31.2793 30.9393 31.5606C31.2206 31.8419 31.6022 32 32 32ZM32 21.4385L31.4023 21.5592C30.7242 21.6974 30.1147 22.0656 29.677 22.6015C29.2392 23.1373 29.0001 23.808 29 24.5C29 24.971 28.8995 26.1477 28.6557 27.3065C28.5357 27.8817 28.3738 28.481 28.1585 29H35.8415C35.6262 28.481 35.465 27.8825 35.3442 27.3065C35.1005 26.1477 35 24.971 35 24.5C34.9998 23.8082 34.7605 23.1376 34.3228 22.6019C33.885 22.0662 33.2757 21.6981 32.5977 21.56L32 21.4377V21.4385ZM36.665 29C36.8323 29.3352 37.0258 29.6007 37.25 29.75H26.75C26.9742 29.6007 27.1677 29.3352 27.335 29C28.01 27.65 28.25 25.16 28.25 24.5C28.25 22.685 29.54 21.17 31.2538 20.8242C31.2433 20.72 31.2548 20.6146 31.2875 20.5151C31.3203 20.4155 31.3735 20.3239 31.4438 20.2462C31.5141 20.1685 31.6 20.1063 31.6957 20.0638C31.7915 20.0213 31.8952 19.9993 32 19.9993C32.1048 19.9993 32.2085 20.0213 32.3043 20.0638C32.4 20.1063 32.4859 20.1685 32.5562 20.2462C32.6265 20.3239 32.6797 20.4155 32.7125 20.5151C32.7452 20.6146 32.7567 20.72 32.7462 20.8242C33.594 20.9967 34.356 21.4568 34.9034 22.1266C35.4508 22.7965 35.7499 23.6349 35.75 24.5C35.75 25.16 35.99 27.65 36.665 29Z" class="fill-gray-600 dark:fill-neutral-400" fill="currentColor" />
                                    </g>
                                    <rect x="52" y="17" width="60" height="6" rx="3" class="fill-gray-200 dark:fill-neutral-600" fill="currentColor" />
                                    <rect x="52" y="29" width="106" height="6" rx="3" class="fill-gray-200 dark:fill-neutral-600" fill="currentColor" />
                                    <rect x="12.5" y="6.5" width="153" height="39" rx="7.5" class="stroke-gray-200 dark:stroke-neutral-700" stroke="currentColor" shape-rendering="crispEdges" />
                                </g>
                                <rect x="12.5" y="52.5" width="153" height="39" rx="7.5" class="fill-white dark:fill-neutral-800" fill="currentColor" />
                                <rect x="20" y="60" width="24" height="24" rx="4" class="fill-skin dark:fill-neutral-700" fill="currentColor" />
                                <g clip-path="url(#clip1_499_322852)">
                                    <path d="M32 78C32.3978 78 32.7794 77.8419 33.0607 77.5606C33.342 77.2793 33.5 76.8978 33.5 76.5H30.5C30.5 76.8978 30.658 77.2793 30.9393 77.5606C31.2206 77.8419 31.6022 78 32 78ZM32 67.4385L31.4023 67.5592C30.7242 67.6974 30.1147 68.0656 29.677 68.6015C29.2392 69.1373 29.0001 69.808 29 70.5C29 70.971 28.8995 72.1477 28.6557 73.3065C28.5357 73.8817 28.3738 74.481 28.1585 75H35.8415C35.6262 74.481 35.465 73.8825 35.3442 73.3065C35.1005 72.1477 35 70.971 35 70.5C34.9998 69.8082 34.7605 69.1376 34.3228 68.6019C33.885 68.0662 33.2757 67.6981 32.5977 67.56L32 67.4377V67.4385ZM36.665 75C36.8323 75.3352 37.0258 75.6007 37.25 75.75H26.75C26.9742 75.6007 27.1677 75.3352 27.335 75C28.01 73.65 28.25 71.16 28.25 70.5C28.25 68.685 29.54 67.17 31.2538 66.8242C31.2433 66.72 31.2548 66.6146 31.2875 66.5151C31.3203 66.4155 31.3735 66.3239 31.4438 66.2462C31.5141 66.1685 31.6 66.1063 31.6957 66.0638C31.7915 66.0213 31.8952 65.9993 32 65.9993C32.1048 65.9993 32.2085 66.0213 32.3043 66.0638C32.4 66.1063 32.4859 66.1685 32.5562 66.2462C32.6265 66.3239 32.6797 66.4155 32.7125 66.5151C32.7452 66.6146 32.7567 66.72 32.7462 66.8242C33.594 66.9967 34.356 67.4568 34.9034 68.1266C35.4508 68.7965 35.7499 69.6349 35.75 70.5C35.75 71.16 35.99 73.65 36.665 75Z" class="fill-gray-500 dark:fill-neutral-500" fill="currentColor" />
                                </g>
                                <rect x="52" y="63" width="60" height="6" rx="3" class="fill-gray-200 dark:fill-neutral-700" fill="currentColor" />
                                <rect x="52" y="75" width="106" height="6" rx="3" class="fill-gray-200 dark:fill-neutral-700" fill="currentColor" />
                                <rect x="12.5" y="52.5" width="153" height="39" rx="7.5" class="stroke-gray-200 dark:stroke-neutral-700" stroke="currentColor" />
                                <rect x="12.5" y="98.5" width="153" height="39" rx="7.5" class="fill-white dark:fill-neutral-800" fill="currentColor" />
                                <rect x="20" y="106" width="24" height="24" rx="4" class="fill-gray-50 dark:fill-neutral-700/50" />
                                <g clip-path="url(#clip2_499_322852)">
                                    <path d="M32 124C32.3978 124 32.7794 123.842 33.0607 123.561C33.342 123.279 33.5 122.898 33.5 122.5H30.5C30.5 122.898 30.658 123.279 30.9393 123.561C31.2206 123.842 31.6022 124 32 124ZM32 113.439L31.4023 113.559C30.7242 113.697 30.1147 114.066 29.677 114.602C29.2392 115.137 29.0001 115.808 29 116.5C29 116.971 28.8995 118.148 28.6557 119.307C28.5357 119.882 28.3738 120.481 28.1585 121H35.8415C35.6262 120.481 35.465 119.883 35.3442 119.307C35.1005 118.148 35 116.971 35 116.5C34.9998 115.808 34.7605 115.138 34.3228 114.602C33.885 114.066 33.2757 113.698 32.5977 113.56L32 113.438V113.439ZM36.665 121C36.8323 121.335 37.0258 121.601 37.25 121.75H26.75C26.9742 121.601 27.1677 121.335 27.335 121C28.01 119.65 28.25 117.16 28.25 116.5C28.25 114.685 29.54 113.17 31.2538 112.824C31.2433 112.72 31.2548 112.615 31.2875 112.515C31.3203 112.416 31.3735 112.324 31.4438 112.246C31.5141 112.169 31.6 112.106 31.6957 112.064C31.7915 112.021 31.8952 111.999 32 111.999C32.1048 111.999 32.2085 112.021 32.3043 112.064C32.4 112.106 32.4859 112.169 32.5562 112.246C32.6265 112.324 32.6797 112.416 32.7125 112.515C32.7452 112.615 32.7567 112.72 32.7462 112.824C33.594 112.997 34.356 113.457 34.9034 114.127C35.4508 114.797 35.7499 115.635 35.75 116.5C35.75 117.16 35.99 119.65 36.665 121Z" class="fill-gray-300 dark:fill-neutral-600" fill="currentColor" />
                                </g>
                                <rect x="52" y="109" width="60" height="6" rx="3" class="fill-skin dark:fill-neutral-700/50" />
                                <rect x="52" y="121" width="106" height="6" rx="3" class="fill-skin dark:fill-neutral-700/50" />
                                <rect x="12.5" y="98.5" width="153" height="39" rx="7.5" class="stroke-skin dark:stroke-neutral-700/50" stroke="currentColor" />
                                <defs>
                                    <filter id="filter0_d_499_322852" x="0" y="0" width="178" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="6" />
                                    <feGaussianBlur stdDeviation="6" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_499_322852" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_499_322852" result="shape" />
                                    </filter>
                                    <clipPath id="clip0_499_322852">
                                    <rect width="12" height="12" class="fill-white dark:fill-neutral-800" fill="currentColor" transform="translate(26 20)" />
                                    </clipPath>
                                    <clipPath id="clip1_499_322852">
                                    <rect width="12" height="12" class="fill-white dark:fill-neutral-800" fill="currentColor" transform="translate(26 66)" />
                                    </clipPath>
                                    <clipPath id="clip2_499_322852">
                                    <rect width="12" height="12" class="fill-white dark:fill-neutral-800" fill="currentColor" transform="translate(26 112)" />
                                    </clipPath>
                                </defs>
                                </svg>
                                <p class="mt-5 font-semibold text-mainblack">
                                You don't have any archived notifications
                                </p>
                                <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                We'll notify you about important updates and any time you're mentioned on Preline.
                                </p>
                                <div class="mt-3">
                                <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="../../pro/dashboard/account-notifications.html">
                                    Notifications settings
                                </a>
                                </div>
                            </div>
                        </div>
                        <!-- End Tab Content -->
                    </div>

                    <!-- Footer -->
                    <div class="text-center border-t border-gray-200 dark:border-neutral-800">
                        <a class="p-4 flex justify-center items-center gap-x-2 text-sm text-gray-500 font-medium sm:rounded-b-lg hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300" href="../../docs/index.html">
                        Mark all as read
                        </a>
                    </div>
                    <!-- End Footer -->
                </div>
                <!-- End Notifications Dropdown -->
            </div>
            <!-- End Notifications -->

            <!-- Activity Button Icon -->
            <div class="hs-tooltip inline-block [--placement:bottom]">
                <button type="button" class="hs-tooltip-toggle w-[38px] h-[38px] inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent text-gray-500 hover:bg-skin disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-skin transition duration-200" data-hs-overlay="#hs-pro-dnam">
                    <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                </button>
                    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700" role="tooltip">
                    Activity
                    </span>
            </div>
        </div>

        <!-- Share Button -->
        <ButtonShare />
        <!-- End Share Button -->

        <div class="border-e border-gray-200 w-px h-6 mx-1.5 dark:border-neutral-700"></div>

        <div class="h-[38px]">
            <!-- Account -->
            <div class="hs-dropdown relative inline-flex [--placement:top-right] [--strategy:absolute] [--auto-close:inside]">
                <button id="hs-pro-dnad" type="button" class="inline-flex flex-shrink-0 items-center gap-x-3 text-start rounded-full focus:outline-none focus:bg-gray-100 dark:focus:bg-neutral-800">
                    <img class="flex-shrink-0 w-[38px] h-[38px] rounded-full" src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Image Description">
                </button>

                <!-- Account Dropdown -->
                <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-900 dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)]" aria-labelledby="hs-pro-dnad">
                    <div class="p-1 border-b border-gray-200 dark:border-neutral-800">
                        <a class="py-2 px-3 flex items-center gap-x-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="../../pro/dashboard/user-profile-my-profile.html">
                        <img class="flex-shrink-0 w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Image Description">

                        <div class="grow">
                            <span class="text-sm font-semibold text-mainblack">
                            James Collison
                            </span>
                            <p class="text-xs text-gray-500 dark:text-neutral-500">
                            Preline@HS
                            </p>
                        </div>
                        </a>
                    </div>
                    <div class="p-1">
                        <a class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                            <svg class="flex-shrink-0 mt-0.5 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect width="20" height="14" x="2" y="5" rx="2" />
                                <line x1="2" x2="22" y1="10" y2="10" />
                            </svg>
                            Billing
                        </a>
                        <a class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                            Settings
                        </a>
                        <NuxtLink to="/dashboard/profile/user-profile" class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                            <svg class="flex-shrink-0 mt-0.5 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            My account
                        </NuxtLink>
                    </div>
                    <div class="px-4 py-3.5 border-y border-gray-200 dark:border-neutral-800">
                        <!-- Switch/Toggle -->
                        <div class="flex justify-between items-center">
                            <label for="hs-pro-dnads" class="text-sm text-mainblack">Dark mode</label>
                            <div class="relative inline-block">
                                <input data-hs-theme-switch type="checkbox" id="hs-pro-dnads" class="relative w-11 h-6 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-neutral-900

                                before:inline-block before:w-5 before:h-5 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-white">
                            </div>
                        </div>
                        <!-- End Switch/Toggle -->
                    </div>
                    <div class="p-1">
                        <a class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                            Customization
                            <div class="ms-auto">
                                <span class="ms-auto inline-flex items-center gap-1.5 py-px px-1.5 rounded text-[10px] leading-4 font-medium bg-gray-100 text-gray-800 dark:bg-neutral-700 dark:text-neutral-300">
                                New
                                </span>
                            </div>
                        </a>
                        <a class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                        Manage team
                        </a>
                        <a class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                        Sign out
                        </a>
                    </div>
                    <div class="p-1 border-t border-gray-200 dark:border-neutral-800">
                        <button type="button" class="flex mt-0.5 gap-x-3 py-2 px-3 w-full rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-dasadam">
                            <svg class="flex-shrink-0 w-4 h-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M8 12h8" />
                                <path d="M12 8v8" />
                            </svg>
                            Add team account
                        </button>
                    </div>
                </div>
                <!-- End Account Dropdown -->
            </div>
            <!-- End Account -->
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>