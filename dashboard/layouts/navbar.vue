<template lang="">
    <nav>
        <!-- ========== MAIN HEADER ========== -->
        <header class="lg:ms-[260px] fixed top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 bg-mainyellow border-b border-mainblack">
            <div class="flex justify-between xl:grid xl:grid-cols-3 basis-full items-center w-full py-2.5 px-2 sm:px-5" aria-label="Global">
                <div class="xl:col-span-1 flex items-center md:gap-x-3">
                    <!-- Sidebar Toggle -->
                    <div class="lg:hidden">
                        <button type="button" class="w-7 h-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-skin disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#hs-pro-sidebar" aria-controls="hs-pro-sidebar" aria-label="Toggle navigation">
                            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                    <div class="hidden lg:block min-w-[20rem] xl:w-full">
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                                <svg class="flex-shrink-0 w-4 h-4 text-mainblack" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                            </div>
                            <input type="text" class="py-2 ps-10 pe-16 block w-full bg-skin border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-200 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none" placeholder="Search or type a command" data-hs-overlay="#hs-pro-dnsm">
                            <div class="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-3 text-mainblack">
                                <svg class="flex-shrink-0 w-3 h-3 text-mainblack" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                                </svg>
                                <span class="mx-1">
                                    <svg class="flex-shrink-0 w-3 h-3 text-mainblack" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14" />
                                        <path d="M12 5v14" />
                                    </svg>
                                </span>
                                <span class="text-xs">/</span>
                            </div>
                        </div>
                    </div>
                </div>
                <ButtonHelpSupport/>
            </div>
        </header>

        <aside id="hs-pro-sidebar" class="w-[260px] hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed inset-y-0 start-0 z-[60] bg-mainyellow border-e border-mainblack lg:block lg:translate-x-0 lg:end-auto lg:bottom-0">
            <div class="flex flex-col h-full max-h-full py-3">
                <header class="px-8 h-[46px]">
                    <NuxtLink to="/" class="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80" aria-label="Preline">
                        <img class="" src="@/assets/icons/preline.svg" alt="">
                    </NuxtLink>
                </header>
                <div class="h-[calc(100%-35px)] lg:h-[calc(100%-93px)] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                    <nav class="hs-accordion-group pb-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                        <ul>
                            <li class="px-5 mb-1.5">
                                <a class="flex items-center gap-3 py-2 px-3 text-sm text-mainblack rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 active-link">
                                    <img class="w-5" src="@/assets/icons/house.svg" alt="">
                                    Dashboard
                                </a>
                            </li>
                            <li class="hs-accordion px-5 mb-1.5 " id="users-accordion">
                                <button type="button" class="hs-accordion-toggle hs-accordion-active:bg-gray-100 w-full text-start flex gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-skin disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:bg-skin focus:outline-none focus:bg-skin">
                                    <img class="w-5" src="@/assets/icons/users.svg" alt="">
                                    Users
                                    <svg class="hs-accordion-active:-rotate-180 flex-shrink-0 mt-1 w-3.5 h-3.5 ms-auto transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </button>

                                <div id="users-accordion-sub" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden ">
                                    <ul class="hs-accordion-group ps-7 mt-1.5 space-y-1.5 relative before:absolute before:top-0 before:start-[18px] before:w-0.5 before:h-full before:bg-skin dark:before:bg-neutral-700" data-hs-accordion-always-open>
                                        <li>
                                            <a class="flex gap-x-4 py-2 px-3 text-sm text-mainblack rounded-lg hover:bg-skin focus:outline-none focus:bg-skin" href="../../pro/dashboard/users.html">
                                            Overview
                                            </a>
                                        </li>
                                        <li>
                                            <a class="flex gap-x-4 py-2 px-3 text-sm text-mainblack rounded-lg hover:bg-skin focus:outline-none focus:bg-skin" href="../../pro/dashboard/users-add-user.html">
                                            Add User
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="hs-accordion px-5 mb-1.5 " id="user-profile-accordion">
                                <button type="button" class="hs-accordion-toggle hs-accordion-active:bg-skin w-full text-start flex gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-skin disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:bg-skin focus:outline-none focus:bg-skin">
                                    <img class="w-5" src="@/assets/icons/userprofile.svg" alt="">
                                    User Profile
                                    <svg class="hs-accordion-active:-rotate-180 flex-shrink-0 mt-1 w-3.5 h-3.5 ms-auto transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </button>

                                <div id="user-profile-accordion-sub" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden ">
                                    <ul class="hs-accordion-group ps-7 mt-1.5 space-y-1.5 relative before:absolute before:top-0 before:start-[18px] before:w-0.5 before:h-full before:bg-skin dark:before:bg-neutral-700" data-hs-accordion-always-open>
                                        <li>
                                            <a class="flex gap-x-4 py-2 px-3 text-sm text-mainblack rounded-lg hover:bg-skin focus:outline-none focus:bg-skin" href="../../pro/dashboard/user-profile-my-profile.html">
                                            My Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a class="flex gap-x-4 py-2 px-3 text-sm text-mainblack rounded-lg hover:bg-skin focus:outline-none focus:bg-skin" href="../../pro/dashboard/user-profile-teams.html">
                                            Teams
                                            </a>
                                        </li>
                                        <li>
                                            <a class="flex gap-x-4 py-2 px-3 text-sm text-mainblack rounded-lg hover:bg-skin focus:outline-none focus:bg-skin" href="../../pro/dashboard/user-profile-files.html">
                                            Files
                                            </a>
                                        </li>
                                        <li>
                                            <a class="flex gap-x-4 py-2 px-3 text-sm text-mainblack rounded-lg hover:bg-skin focus:outline-none focus:bg-skin" href="../../pro/dashboard/user-profile-connections.html">
                                            Connections
                                            </a>
                                        </li>
                                        <li>
                                            <a class="flex gap-x-4 py-2 px-3 text-sm text-mainblack rounded-lg hover:bg-skin focus:outline-none focus:bg-skin" href="../../pro/dashboard/user-profile.html">
                                            Profile
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="hs-accordion px-5 mb-1.5 " id="account-accordion">
                                <button type="button" class="hs-accordion-toggle hs-accordion-active:bg-skin w-full text-start flex gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-skin disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:bg-skin focus:outline-none focus:bg-skin">
                                    <img class="w-5" src="@/assets/icons/account.svg" alt="">
                                    Account
                                    <svg class="hs-accordion-active:-rotate-180 flex-shrink-0 mt-1 w-3.5 h-3.5 ms-auto transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </button>

                                <div id="account-accordion-sub" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden ">
                                    <ul class="hs-accordion-group ps-7 mt-1.5 space-y-1.5 relative before:absolute before:top-0 before:start-[18px] before:w-0.5 before:h-full before:bg-skin dark:before:bg-neutral-700" data-hs-accordion-always-open>
                                        <li>
                                            <a class="flex gap-x-4 py-2 px-3 text-sm text-mainblack rounded-lg hover:bg-skin focus:outline-none focus:bg-skin" href="../../pro/dashboard/account-profile.html">
                                            Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a class="flex gap-x-4 py-2 px-3 text-sm text-mainblack rounded-lg hover:bg-skin focus:outline-none focus:bg-skin" href="../../pro/dashboard/account-integrations.html">
                                            Integrations
                                            </a>
                                        </li>
                                        <li>
                                            <a class="flex gap-x-4 py-2 px-3 text-sm text-mainblack rounded-lg hover:bg-skin focus:outline-none focus:bg-skin" href="../../pro/dashboard/account-preferences.html">
                                            Preferences
                                            </a>
                                        </li>
                                        <li>
                                            <a class="flex gap-x-4 py-2 px-3 text-sm text-mainblack rounded-lg hover:bg-skin focus:outline-none focus:bg-skin" href="../../pro/dashboard/account-workspace.html">
                                            Workspace
                                            </a>
                                        </li>
                                        <li>
                                            <a class="flex gap-x-4 py-2 px-3 text-sm text-mainblack rounded-lg hover:bg-skin focus:outline-none focus:bg-skin" href="../../pro/dashboard/account-plan-and-billing.html">
                                            Plan &amp; Billing
                                            </a>
                                        </li>
                                        <li>
                                            <a class="flex gap-x-4 py-2 px-3 text-sm text-mainblack rounded-lg hover:bg-skin focus:outline-none focus:bg-skin" href="../../pro/dashboard/account-members.html">
                                            Members
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="px-5 mb-1.5">
                                <a class="hs-accordion-toggle hs-accordion-active:bg-skin w-full text-start flex gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-skin disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:bg-skin focus:outline-none focus:bg-skin" href="../../pro/dashboard/welcome-page.html">
                                    <svg class="flex-shrink-0 mt-0.5 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                    <circle cx="12" cy="12" r="3" />
                                    </svg>
                                    Welcome Page
                                </a>
                            </li>
                            <li class="px-5 mb-1.5">
                                <a class="flex gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-skin focus:outline-none focus:bg-skin dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700 " href="../../pro/dashboard/plans.html">
                                    <svg class="flex-shrink-0 mt-0.5 w-4 h-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="m16 12-4-4-4 4" />
                                    <path d="M12 16V8" />
                                    </svg>
                                    <span class="bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-600 to-80% text-transparent dark:from-blue-500 dark:to-purple-500">
                                    Plans
                                    </span>
                                </a>
                            </li>

                            <li class="pt-5 px-8 mt-5 mb-1.5 border-t border-gray-200 first:border-transparent first:pt-0 dark:border-neutral-700 dark:first:border-transparent">
                                <span class="block text-xs uppercase text-gray-500 dark:text-neutral-500">
                                    Pages
                                </span>
                            </li>
                                                        
                            <!-- <li class="px-5 mb-0.5">
                                <a class="flex items-center gap-x-2 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-skin focus:outline-none focus:bg-skin dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700" href="../../pro/index.html">
                                    <span class="flex justify-center items-center w-6 h-6 bg-blue-600 text-white rounded-md dark:bg-blue-500">
                                    <svg class="flex-shrink-0 w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                                        <path d="m3.3 7 8.7 5 8.7-5" />
                                        <path d="M12 22V12" />
                                    </svg>
                                    </span>
                                    PRO
                                </a>
                            </li>
                            
                            <li class="px-5 mb-0.5">
                                <a class="flex items-center gap-x-2 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-skin focus:outline-none focus:bg-skin dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700" href="../../pro/examples.html">
                                    <span class="flex justify-center items-center w-6 h-6 bg-blue-600 text-white rounded-md dark:bg-blue-500">
                                    <svg class="flex-shrink-0 w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <rect width="18" height="7" x="3" y="3" rx="1" />
                                        <rect width="9" height="7" x="3" y="14" rx="1" />
                                        <rect width="5" height="7" x="16" y="14" rx="1" />
                                    </svg>
                                    </span>
                                    Examples
                                </a>
                            </li>
                            
                            <li class="px-5 mb-0.5">
                                <a class="flex items-center gap-x-2 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-skin focus:outline-none focus:bg-skin dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700" href="../../pro/templates.html">
                                    <span class="flex justify-center items-center w-6 h-6 bg-blue-600 text-white rounded-md dark:bg-blue-500">
                                    <svg class="flex-shrink-0 w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                        <path d="M10 4v4" />
                                        <path d="M2 8h20" />
                                        <path d="M6 4v4" />
                                    </svg>
                                    </span>
                                    Templates
                                </a>
                            </li> -->
                        </ul>
                    </nav>
                    <!-- End Nav -->
                </div>
                <!-- End Content -->

                <!-- Footer -->
                <footer class="hidden lg:block absolute bottom-0 inset-x-0 border-t border-gray-200 dark:border-neutral-700">
                    <!-- Account -->
                    <!-- Project Dropdown -->
                    <div class="hs-dropdown relative flex [--auto-close:inside]">
                    <!-- Project Button -->
                    <button id="hs-pro-dnwpd" type="button" class="w-full inline-flex items-center py-3 px-7 text-start text-gray-800 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-skin dark:hover:bg-neutral-700 dark:text-white dark:focus:bg-neutral-700">
                        <svg class="flex-shrink-0 w-8 h-8" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7438 0.940745C6.84695 1.30308 2.6841 1.63631 2.48837 1.67533C1.9396 1.77319 1.44038 2.14544 1.20563 2.63537L1 3.06646L1.01982 13.3407L1.04893 23.615L1.36234 24.2517C1.53886 24.6042 2.73365 26.2499 4.0362 27.9439C6.61221 31.2836 6.79802 31.47 7.77726 31.5679C8.06156 31.597 10.1966 31.4991 12.5081 31.3622C14.8295 31.2154 18.5508 30.99 20.7842 30.863C30.3233 30.2839 29.8334 30.3328 30.3815 29.8627C31.0672 29.2947 31.0183 30.2251 31.0474 17.7377C31.0672 7.15003 31.0573 6.45509 30.9006 6.13177C30.7148 5.76943 30.3815 5.51487 26.0329 2.45885C23.1243 0.421704 22.9186 0.313932 21.6155 0.294111C21.0772 0.274911 16.6307 0.568497 11.7438 0.940745ZM22.752 2.28232C23.1633 2.46814 26.1704 4.56412 26.6108 4.9661C26.7284 5.08378 26.7675 5.18164 26.7086 5.24048C26.5717 5.35817 7.96245 6.465 7.42421 6.38634C7.17956 6.34732 6.81722 6.20052 6.61159 6.06302C5.75932 5.48514 3.64413 3.75149 3.64413 3.62452C3.64413 3.29129 3.57538 3.29129 11.8714 2.69421C13.4582 2.58644 16.0633 2.39071 17.6502 2.26312C21.0871 1.98874 22.1159 1.99865 22.752 2.28232ZM28.6677 7.63996C28.8046 7.77685 28.9223 8.04132 28.9613 8.29589C28.9904 8.53125 29.0102 12.9189 28.9904 18.0313C28.9613 26.8067 28.9514 27.3555 28.7848 27.61C28.6869 27.7667 28.4912 27.9333 28.3438 27.9823C27.9331 28.1489 8.43318 29.2557 8.03183 29.138C7.84601 29.0891 7.59083 28.9324 7.45394 28.7955L7.21858 28.541L7.18947 19.0799C7.16965 12.4395 7.18947 9.5012 7.26813 9.23672C7.32697 9.041 7.47376 8.80564 7.60136 8.72759C7.77788 8.60991 8.93364 8.51205 12.9101 8.2773C15.7016 8.1206 20.0206 7.85613 22.4987 7.70933C28.3933 7.34638 28.3741 7.34638 28.6677 7.63996Z" class="fill-black dark:fill-neutral-200" fill="currentColor" />
                        <path d="M23.4277 10.8818C22.3698 10.9506 21.4296 11.0484 21.3218 11.1073C20.9985 11.2739 20.8028 11.5483 20.7638 11.8617C20.7347 12.185 20.8325 12.224 21.8898 12.3516L22.35 12.4104V16.5925C22.35 19.0799 22.311 20.7256 22.2621 20.6767C22.2131 20.6178 20.8226 18.5027 19.167 15.9756C17.512 13.4392 16.1407 11.3525 16.1209 11.3333C16.1011 11.3135 15.024 11.3724 13.7313 11.4609C12.1445 11.5687 11.273 11.6666 11.0965 11.7644C10.8122 11.9112 10.4988 12.4303 10.4988 12.7734C10.4988 12.979 10.871 13.0868 11.6545 13.0868H12.0658V25.1139L11.4 25.3196C10.8809 25.4763 10.7044 25.5741 10.6165 25.7698C10.4598 26.1031 10.4697 26.4066 10.6264 26.4066C10.6852 26.4066 11.792 26.3378 13.0649 26.2598C15.582 26.113 15.8657 26.0442 16.1302 25.5252C16.2088 25.3685 16.277 25.2019 16.277 25.1529C16.277 25.1139 15.9345 24.9962 15.5226 24.8984C15.1014 24.8005 14.6802 24.7027 14.5923 24.6828C14.4257 24.6339 14.4157 24.3304 14.4157 20.1186V15.6033L17.3931 20.2753C20.5173 25.1721 20.9093 25.7308 21.3893 25.9755C21.987 26.2889 23.5051 26.0733 24.2688 25.5741L24.5042 25.4273L24.524 18.7479L24.5531 12.0586L25.0722 11.9608C25.6891 11.8431 25.9734 11.5594 25.9734 11.0695C25.9734 10.7561 25.9536 10.7362 25.66 10.7462C25.4847 10.7542 24.4757 10.813 23.4277 10.8818Z" class="fill-black dark:fill-neutral-200" fill="currentColor" />
                        </svg>
                        <span class="block ms-3">
                            <span class="block text-sm font-medium text-gray-800 dark:text-neutral-200">
                                Notion
                            </span>
                            <span class="block text-xs text-gray-500 dark:text-neutral-500">
                                notion.so
                            </span>
                        </span>
                        <svg class="flex-shrink-0 w-3.5 h-3.5 ms-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m7 15 5 5 5-5" />
                        <path d="m7 9 5-5 5 5" />
                        </svg>
                    </button>
                    <!-- End Project Button -->

                    <!-- Dropdown -->
                    <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-900 dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)]" aria-labelledby="hs-pro-dnwpd">
                        <div class="p-1 space-y-0.5">
                        <!-- Item -->
                        <a class="py-2 px-3 block w-full text-start bg-skin rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-skin dark:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                            <div class="flex gap-x-2">
                            <div class="self-center">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg>
                            </div>
                            <svg class="flex-shrink-0 w-8 h-8" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.7438 0.940745C6.84695 1.30308 2.6841 1.63631 2.48837 1.67533C1.9396 1.77319 1.44038 2.14544 1.20563 2.63537L1 3.06646L1.01982 13.3407L1.04893 23.615L1.36234 24.2517C1.53886 24.6042 2.73365 26.2499 4.0362 27.9439C6.61221 31.2836 6.79802 31.47 7.77726 31.5679C8.06156 31.597 10.1966 31.4991 12.5081 31.3622C14.8295 31.2154 18.5508 30.99 20.7842 30.863C30.3233 30.2839 29.8334 30.3328 30.3815 29.8627C31.0672 29.2947 31.0183 30.2251 31.0474 17.7377C31.0672 7.15003 31.0573 6.45509 30.9006 6.13177C30.7148 5.76943 30.3815 5.51487 26.0329 2.45885C23.1243 0.421704 22.9186 0.313932 21.6155 0.294111C21.0772 0.274911 16.6307 0.568497 11.7438 0.940745ZM22.752 2.28232C23.1633 2.46814 26.1704 4.56412 26.6108 4.9661C26.7284 5.08378 26.7675 5.18164 26.7086 5.24048C26.5717 5.35817 7.96245 6.465 7.42421 6.38634C7.17956 6.34732 6.81722 6.20052 6.61159 6.06302C5.75932 5.48514 3.64413 3.75149 3.64413 3.62452C3.64413 3.29129 3.57538 3.29129 11.8714 2.69421C13.4582 2.58644 16.0633 2.39071 17.6502 2.26312C21.0871 1.98874 22.1159 1.99865 22.752 2.28232ZM28.6677 7.63996C28.8046 7.77685 28.9223 8.04132 28.9613 8.29589C28.9904 8.53125 29.0102 12.9189 28.9904 18.0313C28.9613 26.8067 28.9514 27.3555 28.7848 27.61C28.6869 27.7667 28.4912 27.9333 28.3438 27.9823C27.9331 28.1489 8.43318 29.2557 8.03183 29.138C7.84601 29.0891 7.59083 28.9324 7.45394 28.7955L7.21858 28.541L7.18947 19.0799C7.16965 12.4395 7.18947 9.5012 7.26813 9.23672C7.32697 9.041 7.47376 8.80564 7.60136 8.72759C7.77788 8.60991 8.93364 8.51205 12.9101 8.2773C15.7016 8.1206 20.0206 7.85613 22.4987 7.70933C28.3933 7.34638 28.3741 7.34638 28.6677 7.63996Z" class="fill-black dark:fill-neutral-200" fill="currentColor" />
                                <path d="M23.4277 10.8818C22.3698 10.9506 21.4296 11.0484 21.3218 11.1073C20.9985 11.2739 20.8028 11.5483 20.7638 11.8617C20.7347 12.185 20.8325 12.224 21.8898 12.3516L22.35 12.4104V16.5925C22.35 19.0799 22.311 20.7256 22.2621 20.6767C22.2131 20.6178 20.8226 18.5027 19.167 15.9756C17.512 13.4392 16.1407 11.3525 16.1209 11.3333C16.1011 11.3135 15.024 11.3724 13.7313 11.4609C12.1445 11.5687 11.273 11.6666 11.0965 11.7644C10.8122 11.9112 10.4988 12.4303 10.4988 12.7734C10.4988 12.979 10.871 13.0868 11.6545 13.0868H12.0658V25.1139L11.4 25.3196C10.8809 25.4763 10.7044 25.5741 10.6165 25.7698C10.4598 26.1031 10.4697 26.4066 10.6264 26.4066C10.6852 26.4066 11.792 26.3378 13.0649 26.2598C15.582 26.113 15.8657 26.0442 16.1302 25.5252C16.2088 25.3685 16.277 25.2019 16.277 25.1529C16.277 25.1139 15.9345 24.9962 15.5226 24.8984C15.1014 24.8005 14.6802 24.7027 14.5923 24.6828C14.4257 24.6339 14.4157 24.3304 14.4157 20.1186V15.6033L17.3931 20.2753C20.5173 25.1721 20.9093 25.7308 21.3893 25.9755C21.987 26.2889 23.5051 26.0733 24.2688 25.5741L24.5042 25.4273L24.524 18.7479L24.5531 12.0586L25.0722 11.9608C25.6891 11.8431 25.9734 11.5594 25.9734 11.0695C25.9734 10.7561 25.9536 10.7362 25.66 10.7462C25.4847 10.7542 24.4757 10.813 23.4277 10.8818Z" class="fill-black dark:fill-neutral-200" fill="currentColor" />
                            </svg>
                            <div class="grow">
                                <p class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                Notion
                                </p>
                                <p class="text-xs text-gray-500 dark:text-neutral-500">
                                notion.so
                                </p>
                            </div>
                            <div class="ms-auto self-center">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            </div>
                        </a>
                        <!-- End Item -->

                        <!-- Item -->
                        <a class="py-2 px-3 block w-full text-start rounded-lg hover:bg-skin disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-skin dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                            <div class="flex gap-x-2">
                            <div class="self-center">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg>
                            </div>
                            <svg class="flex-shrink-0 w-8 h-8" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.0001 0C7.16461 0 0 7.34466 0 16.405C0 23.6533 4.5845 29.8026 10.9419 31.9718C11.7415 32.1236 12.0351 31.6159 12.0351 31.1826C12.0351 30.7915 12.0202 29.4991 12.0134 28.1283C7.56202 29.1207 6.62276 26.1927 6.62276 26.1927C5.89494 24.2965 4.84626 23.7924 4.84626 23.7924C3.39464 22.7742 4.95568 22.795 4.95568 22.795C6.5624 22.9108 7.40843 24.4856 7.40843 24.4856C8.83545 26.9936 11.1514 26.2685 12.0645 25.8495C12.208 24.789 12.6227 24.0654 13.0803 23.6558C9.5265 23.2408 5.79054 21.8342 5.79054 15.5483C5.79054 13.7573 6.41559 12.2938 7.43917 11.1449C7.27303 10.7317 6.72541 9.0632 7.59415 6.80351C7.59415 6.80351 8.93772 6.36259 11.9953 8.48512C13.2715 8.12152 14.6403 7.93934 16.0001 7.93316C17.3598 7.93934 18.7296 8.12152 20.0083 8.48512C23.0623 6.36259 24.404 6.80351 24.404 6.80351C25.2748 9.0632 24.727 10.7317 24.5608 11.1449C25.5867 12.2938 26.2075 13.7572 26.2075 15.5483C26.2075 21.8491 22.4645 23.2366 18.9017 23.6426C19.4755 24.1518 19.9869 25.1502 19.9869 26.6806C19.9869 28.8756 19.9683 30.6422 19.9683 31.1826C19.9683 31.6192 20.2563 32.1307 21.0674 31.9696C27.4213 29.798 32 23.6509 32 16.405C32 7.34466 24.8364 0 16.0001 0Z" class="fill-black dark:fill-neutral-200" fill="currentColor" />
                                <path d="M5.99251 23.3693C5.95737 23.4508 5.83213 23.4752 5.71832 23.4194C5.60224 23.3658 5.53699 23.2547 5.57464 23.1728C5.60915 23.089 5.73438 23.0655 5.8502 23.1219C5.96653 23.1753 6.03279 23.2875 5.99251 23.3693ZM6.77955 24.0893C6.70326 24.1619 6.55405 24.1282 6.45279 24.0135C6.34813 23.8991 6.32856 23.7463 6.40598 23.6726C6.48466 23.6001 6.62935 23.634 6.73425 23.7485C6.83891 23.8641 6.85924 24.0161 6.77943 24.0894M7.31952 25.0105C7.22139 25.0804 7.06102 25.0149 6.96201 24.869C6.864 24.7232 6.864 24.5482 6.96414 24.4781C7.06353 24.408 7.22139 24.471 7.32178 24.6158C7.41965 24.7641 7.41965 24.9391 7.31939 25.0107M8.23255 26.0775C8.14484 26.1766 7.95811 26.1501 7.82133 26.0147C7.68154 25.8825 7.64252 25.6947 7.73048 25.5955C7.8192 25.4962 8.00705 25.5241 8.14484 25.6583C8.28375 25.7903 8.32604 25.9795 8.23255 26.0775ZM9.41262 26.4378C9.3741 26.5662 9.19415 26.6246 9.01295 26.57C8.832 26.5138 8.71354 26.3633 8.75006 26.2335C8.7877 26.1041 8.9684 26.0433 9.15098 26.1017C9.33168 26.1577 9.45027 26.307 9.41262 26.4378ZM10.7558 26.5905C10.7603 26.7258 10.6066 26.838 10.4164 26.8405C10.225 26.8447 10.0703 26.7352 10.0683 26.6022C10.0683 26.4656 10.2185 26.3544 10.4097 26.3512C10.6 26.3473 10.7558 26.456 10.7558 26.5905ZM12.0752 26.5386C12.098 26.6706 11.9658 26.8063 11.7769 26.8423C11.5912 26.877 11.4193 26.7956 11.3955 26.6647C11.3725 26.5294 11.5072 26.3939 11.6926 26.3588C11.8818 26.3251 12.0511 26.4044 12.0752 26.5386Z" class="fill-black dark:fill-neutral-200" fill="currentColor" />
                            </svg>
                            <div class="grow">
                                <p class="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                Github
                                </p>
                                <p class="text-xs text-gray-500 dark:text-neutral-500">
                                github.com
                                </p>
                            </div>
                            <div class="ms-auto self-center">
                                <svg class="hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            </div>
                        </a>
                        <!-- End Item -->
                        </div>

                        <div class="p-1 border-t border-gray-200 dark:border-neutral-800">
                        <button type="button" class="w-full flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-skin disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-skin dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M8 12h8" />
                            <path d="M12 8v8" />
                            </svg>
                            Add another project
                        </button>
                        </div>

                        <div class="p-1 border-t border-gray-200 dark:border-neutral-800">
                        <button type="button" class="w-full flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-skin disabled:opacity-50 focus:outline-none focus:bg-skin dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                            Sign out
                            <span class="ms-auto text-xs text-gray-500 dark:text-neutral-500">
                            preline@site.com
                            </span>
                        </button>
                        </div>
                    </div>
                    <!-- End Dropdown -->
                    </div>
                    <!-- End Project Dropdown -->
                    <!-- End Account -->
                </footer>
                <!-- End Footer -->

                <!-- Sidebar Close -->
                <div class="lg:hidden absolute top-3 -end-3 z-10">
                    <button type="button" class="w-6 h-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-skin disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#hs-pro-sidebar" aria-controls="hs-pro-sidebar" aria-label="Toggle navigation">
                    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                    </button>
                </div>
                <!-- End Sidebar Close -->
            </div>
        </aside>

        <ModalSearch />
        <ActivityOffCanvas />

        <div id="hs-pro-dfkm" class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none [--close-when-click-inside:true] dark:hs-overlay-backdrop-open:bg-neutral-900/90">
            <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-xl sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center">
                <div class="max-h-full w-full flex flex-col bg-white rounded-xl pointer-events-auto shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-800 dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)]">
                    <!-- Search Input -->
                    <div class="p-4 border-b border-gray-200 dark:border-neutral-700">
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20">
                            <svg class="flex-shrink-0 w-4 h-4 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.3-4.3" />
                            </svg>
                            </div>
                            <input type="text" class="py-2 ps-7 pe-20 block w-full text-gray-800 bg-transparent border-transparent rounded-lg text-sm focus:z-10 focus:outline-none focus:border-transparent focus:ring-0 placeholder:text-gray-500 disabled:placeholder:text-neutral-600 dark:text-white dark:placeholder:text-neutral-500" placeholder="Search keyboard or shortcuts">
                            <div class="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 dark:border-neutral-700 dark:text-neutral-200">
                            <span class="min-h-[30px] inline-flex justify-center items-center py-0.5 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-600 rounded-md dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                                Cmd + K
                            </span>
                            </div>
                        </div>
                    </div>
                    <!-- End Search Input -->

                    <!-- Body -->
                    <div class="h-[550px] overflow-y-auto overflow-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-skin [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-800">
                        <div class="p-4 space-y-5">
                            <div>
                                <h4 class="text-gray-800 font-semibold mb-2.5 dark:text-neutral-200">
                                    Formatting
                                </h4>

                                <!-- List -->
                                    <ul>
                                        <li class="flex justify-between items-center gap-x-2 py-2.5 border-t border-gray-200 text-gray-800 dark:border-neutral-700 dark:text-neutral-300">
                                        <span class="font-bold">
                                            Bold
                                        </span>
                                        <div class="flex gap-x-1">
                                            <span class="min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                                            Ctrl
                                            </span>
                                            +
                                            <span class="min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                                            b
                                            </span>
                                        </div>
                                        </li>

                                        <li class="flex justify-between items-center gap-x-2 py-2.5 border-t border-gray-200 text-gray-800 dark:border-neutral-700 dark:text-neutral-300">
                                        <span class="italic">
                                            Italic
                                        </span>
                                        <div class="flex gap-x-1">
                                            <span class="min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                                            Ctrl
                                            </span>
                                            +
                                            <span class="min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                                            i
                                            </span>
                                        </div>
                                        </li>

                                        <li class="flex justify-between items-center gap-x-2 py-2.5 border-t border-gray-200 text-gray-800 dark:border-neutral-700 dark:text-neutral-300">
                                        <span class="underline underline-offset-4">
                                            Underline
                                        </span>
                                        <div class="flex gap-x-1">
                                            <span class="min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                                            Ctrl
                                            </span>
                                            +
                                            <span class="min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                                            u
                                            </span>
                                        </div>
                                        </li>

                                        <li class="flex justify-between items-center gap-x-2 py-2.5 border-t border-gray-200 text-gray-800 dark:border-neutral-700 dark:text-neutral-300">
                                        <span class="line-through">
                                            Strikethrough
                                        </span>
                                        <div class="flex gap-x-1">
                                            <span class="min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                                            Ctrl
                                            </span>
                                            +
                                            <span class="min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                                            Alt
                                            </span>
                                            +
                                            <span class="min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                                            u
                                            </span>
                                        </div>
                                        </li>

                                        <li class="flex justify-between items-center gap-x-2 py-2.5 border-t border-gray-200 text-gray-800 dark:border-neutral-700 dark:text-neutral-300">
                                        <span class="text-sm">
                                            Small text
                                        </span>
                                        <div class="flex gap-x-1">
                                            <span class="min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                                            Ctrl
                                            </span>
                                            +
                                            <span class="min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                                            s
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div>
                            <h4 class="text-gray-800 font-semibold mb-2.5 dark:text-neutral-200">
                                Insert
                            </h4>

                            <!-- List -->
                            <ul>
                                <li class="flex justify-between items-center gap-x-2 py-2.5 border-t border-gray-200 text-gray-800 dark:border-neutral-700 dark:text-neutral-300">
                                <span>
                                    Mention person
                                    <a class="font-semibold text-sm text-blue-600 decoration-2 hover:underline focus:underline dark:text-white dark:hover:text-white/80" href="#">
                                    (@Brian)
                                    </a>
                                </span>
                                <div class="flex gap-x-1">
                                    <span class="min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                                    @
                                    </span>
                                </div>
                                </li>

                                <li class="flex justify-between items-center gap-x-2 py-2.5 border-t border-gray-200 text-gray-800 dark:border-neutral-700 dark:text-neutral-300">
                                <span>
                                    Link to doc
                                    <a class="font-semibold text-sm text-blue-600 decoration-2 hover:underline focus:underline dark:text-white dark:hover:text-white/80" href="#">
                                    (+Meeting notes)
                                    </a>
                                </span>
                                <div class="flex gap-x-1">
                                    <span class="min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                                    +
                                    </span>
                                </div>
                                </li>

                                <li class="flex justify-between items-center gap-x-2 py-2.5 border-t border-gray-200 text-gray-800 dark:border-neutral-700 dark:text-neutral-300">
                                <span class="font-semibold">
                                    #hashtag
                                </span>
                                <div class="flex gap-x-1">
                                    <span class="min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                                    #hashtag
                                    </span>
                                </div>
                                </li>

                                <li class="flex justify-between items-center gap-x-2 py-2.5 border-t border-gray-200 text-gray-800 dark:border-neutral-700 dark:text-neutral-300">
                                <span>
                                    Date
                                </span>
                                <div class="flex gap-x-1">
                                    <span class="min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                                    /date
                                    </span>
                                    <span class="min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                                    Space
                                    </span>
                                </div>
                                </li>

                                <li class="flex justify-between items-center gap-x-2 py-2.5 border-t border-gray-200 text-gray-800 dark:border-neutral-700 dark:text-neutral-300">
                                <span>
                                    Time
                                </span>
                                <div class="flex gap-x-1">
                                    <span class="min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                                    /date
                                    </span>
                                    <span class="min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                                    Space
                                    </span>
                                </div>
                                </li>

                                <li class="flex justify-between items-center gap-x-2 py-2.5 border-t border-gray-200 text-gray-800 dark:border-neutral-700 dark:text-neutral-300">
                                <span>
                                    Note box
                                </span>
                                <div class="flex gap-x-1">
                                    <span class="min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                                    /note red
                                    </span>
                                    <span class="min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                                    Enter
                                    </span>
                                </div>
                                </li>
                            </ul>
                            <!-- End List -->
                            </div>
                        </div>
                    </div>
                    <!-- End Body -->
                </div>
            </div>
        </div>

        <div id="hs-pro-dicm" class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none [--close-when-click-inside:true] dark:hs-overlay-backdrop-open:bg-neutral-900/90">
            <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center">
                <div class="max-h-full w-full flex flex-col bg-white rounded-xl pointer-events-auto shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-800 dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)]">
                    <!-- Header -->
                    <div class="p-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-700">
                        <h3 class="font-semibold text-gray-800 dark:text-neutral-200">
                            Import contacts
                        </h3>

                        <!-- Close Button -->
                        <button type="button" class="w-8 h-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-skin text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" data-hs-overlay="#hs-pro-dicm">
                            <span class="sr-only">Close modal</span>
                            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                            </svg>
                        </button>
                    <!-- End Close Button -->
                    </div>
                    <div class="p-4 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-skin [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                        <div class="w-full flex gap-x-5 pb-5 mb-5 last:pb-0 last:mb-0 border-b border-gray-200 last:border-b-transparent dark:border-neutral-700 dark:last:border-b-transparent">
                            <svg class="flex-shrink-0 w-8 h-8" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_11766_122209asdasd21123fde)">
                                    <path d="M3.11931 28.4817H8.21019V16.1181L0.937439 10.6636V26.3C0.937439 27.5054 1.91381 28.4819 3.11931 28.4819V28.4817Z" fill="#4285F4" />
                                    <path d="M25.6647 28.4817H30.7556C31.961 28.4817 32.9374 27.5054 32.9374 26.2999V10.6636L25.6647 16.1181V28.4817Z" fill="#34A853" />
                                    <path d="M25.6647 6.66356V16.1181L32.9374 10.6636V7.7545C32.9374 5.05812 29.8593 3.51812 27.701 5.13631L25.6647 6.66356Z" fill="#FBBC04" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.21021 16.1181V6.66356L16.9375 13.2091L25.6647 6.66356V16.1181L16.9375 22.6636L8.21021 16.1181Z" fill="#EA4335" />
                                    <path d="M0.937439 7.7545V10.6636L8.21019 16.1181V6.66356L6.17381 5.13631C4.01556 3.51813 0.937439 5.05813 0.937439 7.75438V7.7545Z" fill="#C5221F" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_11766_122209asdasd21123fde">
                                    <rect width="32" height="32" fill="white" transform="translate(0.937439)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div class="grow">
                                <span class="block text-sm font-medium text-mainblack">
                                    Gmail account
                                </span>
                                <p class="block text-sm text-gray-500 dark:text-neutral-500">
                                    Import your Gmail account contacts.
                                </p>
                            </div>

                            <div class="flex flex-col justify-center">
                                <button type="button" class="p-2 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    Connect
                                </button>
                            </div>
                        </div>
                        <div class="w-full flex gap-x-5 pb-5 mb-5 last:pb-0 last:mb-0 border-b border-gray-200 last:border-b-transparent dark:border-neutral-700 dark:last:border-b-transparent">
                            <svg class="flex-shrink-0 w-8 h-8" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.7438 0.940745C6.84695 1.30308 2.6841 1.63631 2.48837 1.67533C1.9396 1.77319 1.44038 2.14544 1.20563 2.63537L1 3.06646L1.01982 13.3407L1.04893 23.615L1.36234 24.2517C1.53886 24.6042 2.73365 26.2499 4.0362 27.9439C6.61221 31.2836 6.79802 31.47 7.77726 31.5679C8.06156 31.597 10.1966 31.4991 12.5081 31.3622C14.8295 31.2154 18.5508 30.99 20.7842 30.863C30.3233 30.2839 29.8334 30.3328 30.3815 29.8627C31.0672 29.2947 31.0183 30.2251 31.0474 17.7377C31.0672 7.15003 31.0573 6.45509 30.9006 6.13177C30.7148 5.76943 30.3815 5.51487 26.0329 2.45885C23.1243 0.421704 22.9186 0.313932 21.6155 0.294111C21.0772 0.274911 16.6307 0.568497 11.7438 0.940745ZM22.752 2.28232C23.1633 2.46814 26.1704 4.56412 26.6108 4.9661C26.7284 5.08378 26.7675 5.18164 26.7086 5.24048C26.5717 5.35817 7.96245 6.465 7.42421 6.38634C7.17956 6.34732 6.81722 6.20052 6.61159 6.06302C5.75932 5.48514 3.64413 3.75149 3.64413 3.62452C3.64413 3.29129 3.57538 3.29129 11.8714 2.69421C13.4582 2.58644 16.0633 2.39071 17.6502 2.26312C21.0871 1.98874 22.1159 1.99865 22.752 2.28232ZM28.6677 7.63996C28.8046 7.77685 28.9223 8.04132 28.9613 8.29589C28.9904 8.53125 29.0102 12.9189 28.9904 18.0313C28.9613 26.8067 28.9514 27.3555 28.7848 27.61C28.6869 27.7667 28.4912 27.9333 28.3438 27.9823C27.9331 28.1489 8.43318 29.2557 8.03183 29.138C7.84601 29.0891 7.59083 28.9324 7.45394 28.7955L7.21858 28.541L7.18947 19.0799C7.16965 12.4395 7.18947 9.5012 7.26813 9.23672C7.32697 9.041 7.47376 8.80564 7.60136 8.72759C7.77788 8.60991 8.93364 8.51205 12.9101 8.2773C15.7016 8.1206 20.0206 7.85613 22.4987 7.70933C28.3933 7.34638 28.3741 7.34638 28.6677 7.63996Z" class="fill-black dark:fill-neutral-200" fill="currentColor" />
                            <path d="M23.4277 10.8818C22.3698 10.9506 21.4296 11.0484 21.3218 11.1073C20.9985 11.2739 20.8028 11.5483 20.7638 11.8617C20.7347 12.185 20.8325 12.224 21.8898 12.3516L22.35 12.4104V16.5925C22.35 19.0799 22.311 20.7256 22.2621 20.6767C22.2131 20.6178 20.8226 18.5027 19.167 15.9756C17.512 13.4392 16.1407 11.3525 16.1209 11.3333C16.1011 11.3135 15.024 11.3724 13.7313 11.4609C12.1445 11.5687 11.273 11.6666 11.0965 11.7644C10.8122 11.9112 10.4988 12.4303 10.4988 12.7734C10.4988 12.979 10.871 13.0868 11.6545 13.0868H12.0658V25.1139L11.4 25.3196C10.8809 25.4763 10.7044 25.5741 10.6165 25.7698C10.4598 26.1031 10.4697 26.4066 10.6264 26.4066C10.6852 26.4066 11.792 26.3378 13.0649 26.2598C15.582 26.113 15.8657 26.0442 16.1302 25.5252C16.2088 25.3685 16.277 25.2019 16.277 25.1529C16.277 25.1139 15.9345 24.9962 15.5226 24.8984C15.1014 24.8005 14.6802 24.7027 14.5923 24.6828C14.4257 24.6339 14.4157 24.3304 14.4157 20.1186V15.6033L17.3931 20.2753C20.5173 25.1721 20.9093 25.7308 21.3893 25.9755C21.987 26.2889 23.5051 26.0733 24.2688 25.5741L24.5042 25.4273L24.524 18.7479L24.5531 12.0586L25.0722 11.9608C25.6891 11.8431 25.9734 11.5594 25.9734 11.0695C25.9734 10.7561 25.9536 10.7362 25.66 10.7462C25.4847 10.7542 24.4757 10.813 23.4277 10.8818Z" class="fill-black dark:fill-neutral-200" fill="currentColor" />
                            </svg>
                            <div class="grow">
                                <span class="block text-sm font-medium text-mainblack">
                                    Notion
                                </span>
                                <p class="block text-sm text-gray-500 dark:text-neutral-500">
                                    Add your contacts to a Notion file and upload it here.
                                </p>
                            </div>

                            <div class="flex flex-col justify-center">
                                <button type="button" class="p-2 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    Connect
                                </button>
                            </div>
                        </div>
                    <!-- End Media -->

                    <!-- Media -->
                        <div class="w-full flex gap-x-5 pb-5 mb-5 last:pb-0 last:mb-0 border-b border-gray-200 last:border-b-transparent dark:border-neutral-700 dark:last:border-b-transparent">
                            <svg class="flex-shrink-0 w-8 h-8" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.6141 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 12.3359L31.9364 8.86395V3.24228C31.9364 2.89158 31.797 2.55523 31.549 2.30725C31.3011 2.05926 30.9647 1.91994 30.6141 1.91994Z" fill="#41A5EE" />
                            <path d="M31.9364 8.86395H8.12839V15.8079L20.0324 19.2799L31.9364 15.8079V8.86395Z" fill="#2B7CD3" />
                            <path d="M31.9364 15.8079H8.12839V22.7519L20.0324 26.2239L31.9364 22.7519V15.8079Z" fill="#185ABD" />
                            <path d="M31.9364 22.752H8.12839V28.3736C8.12839 28.7244 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.696 9.45071 29.696H30.6141C30.9647 29.696 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7244 31.9364 28.3736V22.752Z" fill="#103F91" />
                            <path opacity="0.1" d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z" class="fill-black dark:fill-neutral-200" fill="currentColor" />
                            <path opacity="0.2" d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z" class="fill-black dark:fill-neutral-200" fill="currentColor" />
                            <path opacity="0.2" d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z" class="fill-black dark:fill-neutral-200" fill="currentColor" />
                            <path opacity="0.2" d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z" class="fill-black dark:fill-neutral-200" fill="currentColor" />
                            <path d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16401 23.7439 0.827669 23.6047 0.579687 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579687 8.25922C0.827669 8.01122 1.16401 7.87194 1.51472 7.87194Z" fill="#185ABD" />
                            <path d="M12.0468 20.7679H10.2612L8.17801 13.9231L5.99558 20.7679H4.20998L2.22598 10.8479H4.01158L5.40038 17.7919L7.48358 11.0463H8.97161L10.9556 17.7919L12.3444 10.8479H14.0308L12.0468 20.7679Z" fill="white" />
                            </svg>
                            <div class="grow">
                            <span class="block text-sm font-medium text-mainblack">
                                Word file
                            </span>
                            <span class="block text-sm text-gray-500 dark:text-neutral-500">
                                Add your contacts to a Word file and upload it here.
                            </span>
                            </div>

                            <div class="flex flex-col justify-center">
                            <button type="button" class="p-2 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Connect
                            </button>
                            </div>
                        </div>
                    <!-- End Media -->
                    </div>
                    <!-- End Body -->

                    <!-- Upload Form -->
                    <div class="p-4 bg-skin border-t border-gray-200 rounded-b-xl dark:bg-neutral-700 dark:border-neutral-700">
                    <label class="block text-sm font-medium text-gray-800 dark:text-neutral-200">
                        Upload file
                    </label>

                    <!-- Drag 'n Drop -->
                    <div class="mt-2 p-12 flex justify-center bg-white border border-dashed border-gray-300 rounded-xl dark:bg-neutral-800 dark:border-neutral-600">
                        <div class="text-center">
                        <svg class="w-16 text-gray-400 mx-auto dark:text-neutral-400" width="70" height="46" viewBox="0 0 70 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.05172 9.36853L17.2131 7.5083V41.3608L12.3018 42.3947C9.01306 43.0871 5.79705 40.9434 5.17081 37.6414L1.14319 16.4049C0.515988 13.0978 2.73148 9.92191 6.05172 9.36853Z" fill="currentColor" stroke="currentColor" stroke-width="2" class="fill-white stroke-gray-400 dark:fill-neutral-800 dark:stroke-neutral-500" />
                            <path d="M63.9483 9.36853L52.7869 7.5083V41.3608L57.6982 42.3947C60.9869 43.0871 64.203 40.9434 64.8292 37.6414L68.8568 16.4049C69.484 13.0978 67.2685 9.92191 63.9483 9.36853Z" fill="currentColor" stroke="currentColor" stroke-width="2" class="fill-white stroke-gray-400 dark:fill-neutral-800 dark:stroke-neutral-500" />
                            <rect x="17.0656" y="1.62305" width="35.8689" height="42.7541" rx="5" fill="currentColor" stroke="currentColor" stroke-width="2" class="fill-white stroke-gray-400 dark:fill-neutral-800 dark:stroke-neutral-500" />
                            <path d="M47.9344 44.3772H22.0655C19.3041 44.3772 17.0656 42.1386 17.0656 39.3772L17.0656 35.9161L29.4724 22.7682L38.9825 33.7121C39.7832 34.6335 41.2154 34.629 42.0102 33.7025L47.2456 27.5996L52.9344 33.7209V39.3772C52.9344 42.1386 50.6958 44.3772 47.9344 44.3772Z" stroke="currentColor" stroke-width="2" class="stroke-gray-400 dark:stroke-neutral-500" />
                            <circle cx="39.5902" cy="14.9672" r="4.16393" stroke="currentColor" stroke-width="2" class="stroke-gray-400 dark:stroke-neutral-500" />
                        </svg>

                        <div class="mt-4 flex flex-wrap justify-center text-sm leading-6 text-gray-600">
                            <span class="pe-1 font-medium text-gray-800 dark:text-neutral-200">
                            Drop your files here or
                            </span>
                            <label for="hs-pro-dauuf" class="relative cursor-pointer bg-white font-semibold text-blue-600 hover:text-blue-700 rounded-lg decoration-2 hover:underline focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 dark:bg-neutral-800 dark:text-blue-500 dark:hover:text-blue-600">
                            <span>browse</span>
                            <input id="hs-pro-dauuf" type="file" class="sr-only" name="hs-pro-dauuf">
                            </label>
                        </div>

                        <p class="mt-1 text-xs text-gray-400 dark:text-neutral-400">
                            CSV, XLS, DOCX
                        </p>
                        </div>
                    </div>
                    <!-- End Drag 'n Drop -->
                    </div>
                    <!-- End Upload Form -->
                </div>
            </div>
        </div>

        <div id="hs-pro-decm" class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none [--close-when-click-inside:true] dark:hs-overlay-backdrop-open:bg-neutral-900/90">
            <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-xl sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center">
                <div class="max-h-full w-full flex flex-col bg-white rounded-xl pointer-events-auto shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-800 dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)]">
                    <!-- Header -->
                    <div class="p-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-700">
                    <h3 class="font-semibold text-gray-800 dark:text-neutral-200">
                        Export contacts (2)
                    </h3>

                    <!-- Close Button -->
                    <button type="button" class="w-8 h-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-skin text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" data-hs-overlay="#hs-pro-decm">
                        <span class="sr-only">Close modal</span>
                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                        </svg>
                    </button>
                    <!-- End Close Button -->
                    </div>
                    <!-- End Header -->

                    <!-- Body -->
                    <div class="p-4 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-skin [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                    <!-- List Item -->
                    <div class="pb-5 mb-5 last:pb-0 last:mb-0 border-b last:border-b-0 border-gray-200 dark:border-neutral-700">
                        <label class="text-sm text-gray-500 dark:text-neutral-500">
                        Choose what contact details want to export:
                        </label>

                        <!-- Grid -->
                        <div class="mt-2 grid grid-cols-2">
                        <div class="space-y-2">
                            <!-- Checkbox -->
                            <div class="flex items-center">
                            <input type="checkbox" class="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-pro-duecmwcdte1" checked>
                            <label for="hs-pro-duecmwcdte1" class="text-sm text-gray-800 ms-3 dark:text-neutral-400">
                                Name
                            </label>
                            </div>
                            <!-- End Checkbox -->

                            <!-- Checkbox -->
                            <div class="flex items-center">
                            <input type="checkbox" class="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-pro-duecmwcdte2" checked>
                            <label for="hs-pro-duecmwcdte2" class="text-sm text-gray-800 ms-3 dark:text-neutral-400">
                                User ID
                            </label>
                            </div>
                            <!-- End Checkbox -->

                            <!-- Checkbox -->
                            <div class="flex items-center">
                            <input type="checkbox" class="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-pro-duecmwcdte3" checked>
                            <label for="hs-pro-duecmwcdte3" class="text-sm text-gray-800 ms-3 dark:text-neutral-400">
                                Email
                            </label>
                            </div>
                            <!-- End Checkbox -->
                        </div>
                        <!-- End Col -->

                        <div class="space-y-2">
                            <!-- Checkbox -->
                            <div class="flex items-center">
                            <input type="checkbox" class="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-pro-duecmwcdte4" checked>
                            <label for="hs-pro-duecmwcdte4" class="text-sm text-gray-800 ms-3 dark:text-neutral-400">
                                Address
                            </label>
                            </div>
                            <!-- End Checkbox -->

                            <!-- Checkbox -->
                            <div class="flex items-center">
                            <input type="checkbox" class="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-pro-duecmwcdte5" checked>
                            <label for="hs-pro-duecmwcdte5" class="text-sm text-gray-800 ms-3 dark:text-neutral-400">
                                Phone
                            </label>
                            </div>
                            <!-- End Checkbox -->

                            <!-- Checkbox -->
                            <div class="flex items-center">
                            <input type="checkbox" class="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-pro-duecmwcdte6">
                            <label for="hs-pro-duecmwcdte6" class="text-sm text-gray-800 ms-3 dark:text-neutral-400">
                                Signed up as
                            </label>
                            </div>
                            <!-- End Checkbox -->
                        </div>
                        <!-- End Col -->
                        </div>
                        <!-- End Grid -->
                    </div>
                    <!-- End List Item -->

                    <!-- List Item -->
                    <div class="pb-5 mb-5 last:pb-0 last:mb-0 border-b last:border-b-0 border-gray-200 dark:border-neutral-700">
                        <label class="text-sm text-gray-500 dark:text-neutral-500">
                        Choose your format for exporting your contacts:
                        </label>

                        <div class="mt-2 space-y-2">
                        <!-- Radio -->
                        <div class="flex items-center">
                            <input type="radio" name="hs-pro-duecmfm" class="shrink-0 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-pro-duecmfm1" checked>
                            <label for="hs-pro-duecmfm1" class="text-sm text-gray-800 ms-3 dark:text-neutral-400">
                            Regular CSV file
                            </label>
                        </div>
                        <!-- End Radio -->

                        <!-- Radio -->
                        <div class="flex items-center">
                            <input type="radio" name="hs-pro-duecmfm" class="shrink-0 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-pro-duecmfm2">
                            <label for="hs-pro-duecmfm2" class="text-sm text-gray-800 ms-3 dark:text-neutral-400">
                            Google CSV file
                            </label>
                        </div>
                        <!-- End Radio -->
                        </div>
                    </div>
                    <!-- End List Item -->

                    <!-- List Item -->
                    <div class="pb-5 mb-5 last:pb-0 last:mb-0 border-b last:border-b-0 border-gray-200 dark:border-neutral-700">
                        <label class="text-sm text-gray-500 dark:text-neutral-500">
                        Date range
                        </label>

                        <div class="space-y-2">
                        <!-- Radio -->
                        <div class="flex items-center">
                            <input type="radio" name="hs-pro-duecmdtr" class="shrink-0 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-pro-duecmdtr1" checked>
                            <label for="hs-pro-duecmdtr1" class="text-sm text-gray-800 ms-3 dark:text-neutral-400">
                            Today (18 Feb)
                            </label>
                        </div>
                        <!-- End Radio -->

                        <!-- Radio -->
                        <div class="flex items-center">
                            <input type="radio" name="hs-pro-duecmdtr" class="shrink-0 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-pro-duecmdtr2">
                            <label for="hs-pro-duecmdtr2" class="text-sm text-gray-800 ms-3 dark:text-neutral-400">
                            Current month
                            </label>
                        </div>
                        <!-- End Radio -->

                        <!-- Radio -->
                        <div class="flex items-center">
                            <input type="radio" name="hs-pro-duecmdtr" class="shrink-0 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-pro-duecmdtr3">
                            <label for="hs-pro-duecmdtr3" class="text-sm text-gray-800 ms-3 dark:text-neutral-400">
                            Last 7 days
                            </label>
                        </div>
                        <!-- End Radio -->

                        <!-- Radio -->
                        <div class="flex items-center">
                            <input type="radio" name="hs-pro-duecmdtr" class="shrink-0 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-pro-duecmdtr4">
                            <label for="hs-pro-duecmdtr4" class="text-sm text-gray-800 ms-3 dark:text-neutral-400">
                            Last month
                            </label>
                        </div>
                        <!-- End Radio -->

                        <!-- Radio -->
                        <div class="flex items-center">
                            <input type="radio" name="hs-pro-duecmdtr" class="shrink-0 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-pro-duecmdtr5">
                            <label for="hs-pro-duecmdtr5" class="text-sm text-gray-800 ms-3 dark:text-neutral-400">
                            All
                            </label>
                        </div>
                        <!-- End Radio -->

                        <!-- Radio -->
                        <div class="flex items-center">
                            <input type="radio" name="hs-pro-duecmdtr" class="shrink-0 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-pro-duecmdtr6">
                            <label for="hs-pro-duecmdtr6" class="text-sm text-gray-800 ms-3 dark:text-neutral-400">
                            Custom
                            </label>
                        </div>
                        <!-- End Radio -->

                        <div class="ps-7">
                            <button type="button" class="p-2 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                            <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                                <line x1="16" x2="16" y1="2" y2="6" />
                                <line x1="8" x2="8" y1="2" y2="6" />
                                <line x1="3" x2="21" y1="10" y2="10" />
                                <path d="M8 14h.01" />
                                <path d="M12 14h.01" />
                                <path d="M16 14h.01" />
                                <path d="M8 18h.01" />
                                <path d="M12 18h.01" />
                                <path d="M16 18h.01" />
                            </svg>
                            1 Jan 2023 - 18 Feb 2023
                            </button>
                        </div>
                        </div>
                    </div>
                    <!-- End List Item -->
                    </div>
                    <!-- End Body -->

                    <!-- Footer -->
                    <div class="p-4 flex justify-end gap-x-2">
                    <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#hs-pro-decm">
                        Cancel
                    </button>

                    <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500" data-hs-overlay="#hs-pro-decm">
                        Export
                    </button>
                    </div>
                    <!-- End Footer -->
                </div>
            </div>
        </div>

        <div id="hs-pro-dasadpm" class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none [--close-when-click-inside:true] dark:hs-overlay-backdrop-open:bg-neutral-900/90">
            <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center">
                <div class="max-h-full w-full flex flex-col bg-white rounded-xl pointer-events-auto shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-800 dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)]">
                    <div class="p-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-700">
                        <h3 class="font-semibold text-gray-800 dark:text-neutral-200">
                            Add project
                        </h3>
                        <button type="button" class="w-8 h-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-skin text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" data-hs-overlay="#hs-pro-dasadpm">
                            <span class="sr-only">Close modal</span>
                            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                            </svg>
                        </button>
                    </div>
                    <form>
                        <div class="p-4">
                            <div class="space-y-5">
                                <div>
                                    <label class="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                                    Project logo
                                    </label>
                                    <div class="mt-2 flex items-center gap-x-3">
                                        <span class="flex justify-center items-center h-20 w-20 border-2 border-dotted border-gray-300 text-gray-400 rounded-full dark:border-neutral-700 dark:text-neutral-600">
                                            <svg class="flex-shrink-0 w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                            <circle cx="9" cy="9" r="2" />
                                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                                            </svg>
                                        </span>

                                        <div>
                                            <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                                <polyline points="17 8 12 3 7 8" />
                                                <line x1="12" x2="12" y1="3" y2="15" />
                                            </svg>
                                            Upload photo
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label for="hs-pro-dalpn" class="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
                                    Project name
                                    </label>
                                    <input type="text" id="hs-pro-dalpn" class="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600" placeholder="My project">
                                </div>
                                <div>
                                    <label for="hs-pro-dalsd" class="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
                                    Subdomain
                                    </label>
                                    <div class="relative">
                                        <input type="text" id="hs-pro-dalsd" class="py-2.5 ps-3 pe-24 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600" placeholder="myproject">
                                        <div class="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4">
                                            <span class="text-sm text-gray-500 dark:text-neutral-500">.preline.co</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 flex justify-end gap-x-2">
                            <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#hs-pro-dasadpm">
                            Cancel
                            </button>
                            <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500" data-hs-overlay="#hs-pro-dasadpm">
                            Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name:'Navbar',
}
</script>
<style lang="">
    
</style>