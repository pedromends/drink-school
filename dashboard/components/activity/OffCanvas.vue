<template lang="">
    <div id="hs-pro-dnam" class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full w-full sm:w-[400px] z-[80] flex flex-col border-l border-mainblack bg-mainblack" tabindex="-1">
        <!-- Header -->
        <div class="flex justify-between items-center py-3 px-5 border-b border-mainblack bg-mainyellow">
            <h3 class="font-semibold text-mainblack">
                Atividade
            </h3>
            <button type="button" class="w-8 h-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-pro-dnam">
                <span class="sr-only">Close offcanvas</span>
                <img src="@/assets/icons/close.svg" alt="">
            </button>
        </div>
        <!-- End Header -->

        <!-- Body -->
        <div class="px-5 py-7 h-full overflow-y-auto overflow-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 bg-mainyellow">
            <div class="relative last:pb-0 pb-8 last:after:hidden after:absolute after:top-[38px] after:bottom-0 after:start-[19px] after:w-px after:bg-gray-200 dark:after:bg-neutral-700">
                <div class="w-full flex gap-x-5">
                    <img class="flex-shrink-0 w-[38px] h-[38px] rounded-full" src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Image Description">

                    <div class="grow">
                        <h4 class="text-sm font-semibold text-mainblack">
                            James Collins
                        </h4>

                        <p class="text-sm text-gray-500 dark:text-neutral-500">
                            Added 2 files to task
                            <a class="ms-1 align-middle inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-blue-400 dark:hover:text-blue-500" href="#">
                            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" />
                            </svg>
                            PR-3
                            </a>
                        </p>

                        <!-- Media -->
                        <div class="mt-2 grid grid-cols-2 gap-x-2">
                            <!-- Card -->
                            <div class="border border-gray-200 rounded-lg p-2 dark:border-neutral-700">
                                <div class="flex gap-x-2">
                                    <svg class="flex-shrink-0 w-6 h-6" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.7438 0.940745C6.84695 1.30308 2.6841 1.63631 2.48837 1.67533C1.9396 1.77319 1.44038 2.14544 1.20563 2.63537L1 3.06646L1.01982 13.3407L1.04893 23.615L1.36234 24.2517C1.53886 24.6042 2.73365 26.2499 4.0362 27.9439C6.61221 31.2836 6.79802 31.47 7.77726 31.5679C8.06156 31.597 10.1966 31.4991 12.5081 31.3622C14.8295 31.2154 18.5508 30.99 20.7842 30.863C30.3233 30.2839 29.8334 30.3328 30.3815 29.8627C31.0672 29.2947 31.0183 30.2251 31.0474 17.7377C31.0672 7.15003 31.0573 6.45509 30.9006 6.13177C30.7148 5.76943 30.3815 5.51487 26.0329 2.45885C23.1243 0.421704 22.9186 0.313932 21.6155 0.294111C21.0772 0.274911 16.6307 0.568497 11.7438 0.940745ZM22.752 2.28232C23.1633 2.46814 26.1704 4.56412 26.6108 4.9661C26.7284 5.08378 26.7675 5.18164 26.7086 5.24048C26.5717 5.35817 7.96245 6.465 7.42421 6.38634C7.17956 6.34732 6.81722 6.20052 6.61159 6.06302C5.75932 5.48514 3.64413 3.75149 3.64413 3.62452C3.64413 3.29129 3.57538 3.29129 11.8714 2.69421C13.4582 2.58644 16.0633 2.39071 17.6502 2.26312C21.0871 1.98874 22.1159 1.99865 22.752 2.28232ZM28.6677 7.63996C28.8046 7.77685 28.9223 8.04132 28.9613 8.29589C28.9904 8.53125 29.0102 12.9189 28.9904 18.0313C28.9613 26.8067 28.9514 27.3555 28.7848 27.61C28.6869 27.7667 28.4912 27.9333 28.3438 27.9823C27.9331 28.1489 8.43318 29.2557 8.03183 29.138C7.84601 29.0891 7.59083 28.9324 7.45394 28.7955L7.21858 28.541L7.18947 19.0799C7.16965 12.4395 7.18947 9.5012 7.26813 9.23672C7.32697 9.041 7.47376 8.80564 7.60136 8.72759C7.77788 8.60991 8.93364 8.51205 12.9101 8.2773C15.7016 8.1206 20.0206 7.85613 22.4987 7.70933C28.3933 7.34638 28.3741 7.34638 28.6677 7.63996Z" class="fill-black dark:fill-neutral-200" fill="currentColor" />
                                    <path d="M23.4277 10.8818C22.3698 10.9506 21.4296 11.0484 21.3218 11.1073C20.9985 11.2739 20.8028 11.5483 20.7638 11.8617C20.7347 12.185 20.8325 12.224 21.8898 12.3516L22.35 12.4104V16.5925C22.35 19.0799 22.311 20.7256 22.2621 20.6767C22.2131 20.6178 20.8226 18.5027 19.167 15.9756C17.512 13.4392 16.1407 11.3525 16.1209 11.3333C16.1011 11.3135 15.024 11.3724 13.7313 11.4609C12.1445 11.5687 11.273 11.6666 11.0965 11.7644C10.8122 11.9112 10.4988 12.4303 10.4988 12.7734C10.4988 12.979 10.871 13.0868 11.6545 13.0868H12.0658V25.1139L11.4 25.3196C10.8809 25.4763 10.7044 25.5741 10.6165 25.7698C10.4598 26.1031 10.4697 26.4066 10.6264 26.4066C10.6852 26.4066 11.792 26.3378 13.0649 26.2598C15.582 26.113 15.8657 26.0442 16.1302 25.5252C16.2088 25.3685 16.277 25.2019 16.277 25.1529C16.277 25.1139 15.9345 24.9962 15.5226 24.8984C15.1014 24.8005 14.6802 24.7027 14.5923 24.6828C14.4257 24.6339 14.4157 24.3304 14.4157 20.1186V15.6033L17.3931 20.2753C20.5173 25.1721 20.9093 25.7308 21.3893 25.9755C21.987 26.2889 23.5051 26.0733 24.2688 25.5741L24.5042 25.4273L24.524 18.7479L24.5531 12.0586L25.0722 11.9608C25.6891 11.8431 25.9734 11.5594 25.9734 11.0695C25.9734 10.7561 25.9536 10.7362 25.66 10.7462C25.4847 10.7542 24.4757 10.813 23.4277 10.8818Z" class="fill-black dark:fill-neutral-200" fill="currentColor" />
                                    </svg>
                                    <div class="grow truncate">
                                    <p class="block truncate text-xs text-mainblack">
                                        list-of-users
                                    </p>
                                    <small class="block text-xs text-gray-400 dark:text-neutral-500">
                                        35kb
                                    </small>
                                    </div>
                                </div>
                            </div>
                            <!-- End Card -->

                            <!-- Card -->
                            <div class="border border-gray-200 rounded-lg p-2 dark:border-neutral-700">
                                <div class="flex gap-x-2">
                                    <svg class="flex-shrink-0 w-6 h-6" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.0001 0C7.16461 0 0 7.34466 0 16.405C0 23.6533 4.5845 29.8026 10.9419 31.9718C11.7415 32.1236 12.0351 31.6159 12.0351 31.1826C12.0351 30.7915 12.0202 29.4991 12.0134 28.1283C7.56202 29.1207 6.62276 26.1927 6.62276 26.1927C5.89494 24.2965 4.84626 23.7924 4.84626 23.7924C3.39464 22.7742 4.95568 22.795 4.95568 22.795C6.5624 22.9108 7.40843 24.4856 7.40843 24.4856C8.83545 26.9936 11.1514 26.2685 12.0645 25.8495C12.208 24.789 12.6227 24.0654 13.0803 23.6558C9.5265 23.2408 5.79054 21.8342 5.79054 15.5483C5.79054 13.7573 6.41559 12.2938 7.43917 11.1449C7.27303 10.7317 6.72541 9.0632 7.59415 6.80351C7.59415 6.80351 8.93772 6.36259 11.9953 8.48512C13.2715 8.12152 14.6403 7.93934 16.0001 7.93316C17.3598 7.93934 18.7296 8.12152 20.0083 8.48512C23.0623 6.36259 24.404 6.80351 24.404 6.80351C25.2748 9.0632 24.727 10.7317 24.5608 11.1449C25.5867 12.2938 26.2075 13.7572 26.2075 15.5483C26.2075 21.8491 22.4645 23.2366 18.9017 23.6426C19.4755 24.1518 19.9869 25.1502 19.9869 26.6806C19.9869 28.8756 19.9683 30.6422 19.9683 31.1826C19.9683 31.6192 20.2563 32.1307 21.0674 31.9696C27.4213 29.798 32 23.6509 32 16.405C32 7.34466 24.8364 0 16.0001 0Z" class="fill-black dark:fill-neutral-200" fill="currentColor" />
                                    <path d="M5.99251 23.3693C5.95737 23.4508 5.83213 23.4752 5.71832 23.4194C5.60224 23.3658 5.53699 23.2547 5.57464 23.1728C5.60915 23.089 5.73438 23.0655 5.8502 23.1219C5.96653 23.1753 6.03279 23.2875 5.99251 23.3693ZM6.77955 24.0893C6.70326 24.1619 6.55405 24.1282 6.45279 24.0135C6.34813 23.8991 6.32856 23.7463 6.40598 23.6726C6.48466 23.6001 6.62935 23.634 6.73425 23.7485C6.83891 23.8641 6.85924 24.0161 6.77943 24.0894M7.31952 25.0105C7.22139 25.0804 7.06102 25.0149 6.96201 24.869C6.864 24.7232 6.864 24.5482 6.96414 24.4781C7.06353 24.408 7.22139 24.471 7.32178 24.6158C7.41965 24.7641 7.41965 24.9391 7.31939 25.0107M8.23255 26.0775C8.14484 26.1766 7.95811 26.1501 7.82133 26.0147C7.68154 25.8825 7.64252 25.6947 7.73048 25.5955C7.8192 25.4962 8.00705 25.5241 8.14484 25.6583C8.28375 25.7903 8.32604 25.9795 8.23255 26.0775ZM9.41262 26.4378C9.3741 26.5662 9.19415 26.6246 9.01295 26.57C8.832 26.5138 8.71354 26.3633 8.75006 26.2335C8.7877 26.1041 8.9684 26.0433 9.15098 26.1017C9.33168 26.1577 9.45027 26.307 9.41262 26.4378ZM10.7558 26.5905C10.7603 26.7258 10.6066 26.838 10.4164 26.8405C10.225 26.8447 10.0703 26.7352 10.0683 26.6022C10.0683 26.4656 10.2185 26.3544 10.4097 26.3512C10.6 26.3473 10.7558 26.456 10.7558 26.5905ZM12.0752 26.5386C12.098 26.6706 11.9658 26.8063 11.7769 26.8423C11.5912 26.877 11.4193 26.7956 11.3955 26.6647C11.3725 26.5294 11.5072 26.3939 11.6926 26.3588C11.8818 26.3251 12.0511 26.4044 12.0752 26.5386Z" class="fill-black dark:fill-neutral-200" fill="currentColor" />
                                    </svg>
                                    <div class="grow truncate">
                                    <p class="block truncate text-xs text-mainblack">
                                        untitled
                                    </p>
                                    <small class="block text-xs text-gray-400 dark:text-neutral-500">
                                        30kb
                                    </small>
                                    </div>
                                </div>
                            </div>
                            <!-- End Card -->
                        </div>
                        <p class="mt-2 text-[11px] uppercase text-gray-400 dark:text-neutral-500">
                            May 04
                        </p>
                    </div>
                </div>
            </div>
            <!-- End Step Item -->

            <!-- Step Item -->
            <div class="relative last:pb-0 pb-8 last:after:hidden after:absolute after:top-[38px] after:bottom-0 after:start-[19px] after:w-px after:bg-gray-200 dark:after:bg-neutral-700">
            <div class="w-full flex gap-x-5">
                <span class="flex flex-shrink-0 justify-center items-center w-[38px] h-[38px] border border-gray-200 text-sm font-semibold uppercase text-gray-800 rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                B
                </span>

                <div class="grow">
                <h4 class="text-sm font-semibold text-mainblack">
                    Bob Dean
                </h4>

                <p class="text-sm text-gray-500 dark:text-neutral-500">
                    Marked
                    <a class="align-middle inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-400 focus:outline-none focus:underline dark:hover:text-blue-500 dark:focus:outline-none" href="#">
                    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" />
                    </svg>
                    PR-6
                    </a>
                    as
                    <span class="ms-0.5 inline-block align-middle py-1 px-1.5 border border-gray-200 text-xs font-medium text-gray-800 rounded-md dark:border-neutral-700 dark:text-neutral-300">
                    Completed
                    </span>
                </p>

                <p class="mt-2 text-[11px] uppercase text-gray-400 dark:text-neutral-500">
                    Today
                </p>
                </div>
            </div>
            </div>
            <!-- End Step Item -->

            <!-- Step Item -->
            <div class="relative last:pb-0 pb-8 last:after:hidden after:absolute after:top-[38px] after:bottom-0 after:start-[19px] after:w-px after:bg-gray-200 dark:after:bg-neutral-700">
            <div class="w-full flex gap-x-5">
                <img class="flex-shrink-0 w-[38px] h-[38px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Image Description">

                <div class="grow">
                <h4 class="text-sm font-semibold text-mainblack">
                    Crane
                </h4>

                <p class="text-sm text-gray-500 dark:text-neutral-500">
                    Added 5 card to
                    <a class="ms-1 align-middle inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-blue-400 dark:hover:text-blue-500" href="#">
                    Payments
                    </a>
                </p>

                <!-- Media -->
                <div class="mt-2 flex gap-x-2">
                    <div class="grow grid grid-cols-3 gap-x-2">
                    <img class="w-full h-12 object-cover rounded-md" src="https://images.unsplash.com/photo-1635776062360-af423602aff3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Image Description">
                    <img class="w-full h-12 object-cover rounded-md" src="https://images.unsplash.com/photo-1635776063328-153b13e3c245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Image Description">
                    <img class="w-full h-12 object-cover rounded-md" src="https://images.unsplash.com/photo-1635776064096-4e12cce9ead4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Image Description">
                    </div>

                    <!-- Card -->
                    <div>
                    <a class="h-full inline-flex flex-col justify-center items-center border border-gray-200 text-xs font-medium text-gray-500 rounded-lg p-1.5 hover:text-blue-600 focus:outline-none focus:bg-skin dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="#">
                        +2
                    </a>
                    </div>
                    <!-- End Card -->
                </div>
                <!-- End Media -->
                </div>
            </div>
            </div>
            <!-- End Step Item -->

            <!-- Step Item -->
            <div class="relative last:pb-0 pb-8 last:after:hidden after:absolute after:top-[38px] after:bottom-0 after:start-[19px] after:w-px after:bg-gray-200 dark:after:bg-neutral-700">
            <div class="w-full flex gap-x-5">
                <span class="flex flex-shrink-0 justify-center items-center w-[38px] h-[38px] border border-gray-200 text-sm font-semibold uppercase text-gray-800 rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                    <path d="m15 5 4 4" />
                </svg>
                </span>

                <div class="grow">
                <h4 class="text-sm font-semibold text-mainblack">
                    Project status updated
                </h4>

                <p class="text-sm text-gray-500 dark:text-neutral-500">
                    Marked
                    <a class="align-middle inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-400 focus:outline-none focus:underline dark:hover:text-blue-500 dark:focus:outline-none" href="#">
                    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" />
                    </svg>
                    PR-3
                    </a>
                    as
                    <span class="ms-0.5 inline-block align-middle py-1 px-1.5 bg-skin text-xs font-medium text-gray-800 rounded-md dark:bg-neutral-700 dark:text-neutral-300">
                    In progress
                    </span>
                </p>

                <p class="mt-2 text-[11px] uppercase text-gray-400 dark:text-neutral-500">
                    Feb 10
                </p>
                </div>
            </div>
            </div>
            <!-- End Step Item -->

            <!-- Step Item -->
            <div class="relative last:pb-0 pb-8 last:after:hidden after:absolute after:top-[38px] after:bottom-0 after:start-[19px] after:w-px after:bg-gray-200 dark:after:bg-neutral-700">
            <div class="w-full flex gap-x-5">
                <img class="flex-shrink-0 w-[38px] h-[38px] rounded-full" src="https://images.unsplash.com/photo-1610186593977-82a3e3696e7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Image Description">

                <div class="grow">
                <h4 class="text-sm font-semibold text-mainblack">
                    Mark Colbert
                </h4>

                <p class="text-sm text-gray-500 dark:text-neutral-500">
                    Earned a "Top endorsed" badge
                </p>

                <p class="mt-2 text-[11px] uppercase text-gray-400 dark:text-neutral-500">
                    Apr 06
                </p>
                </div>
            </div>
            </div>
            <!-- End Step Item -->

            <!-- Step Item -->
            <div class="relative last:pb-0 pb-8 last:after:hidden after:absolute after:top-[38px] after:bottom-0 after:start-[19px] after:w-px after:bg-gray-200 dark:after:bg-neutral-700">
            <div class="w-full flex gap-x-5">
                <span class="flex flex-shrink-0 justify-center items-center w-[38px] h-[38px] border border-gray-200 text-sm font-semibold uppercase text-gray-800 rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                D
                </span>

                <div class="grow">
                <h4 class="text-sm font-semibold text-mainblack">
                    David Lidell
                </h4>

                <p class="text-sm text-gray-500 dark:text-neutral-500">
                    Added a new member to Preline
                </p>

                <p class="mt-2 text-[11px] uppercase text-gray-400 dark:text-neutral-500">
                    May 15
                </p>
                </div>
            </div>
            </div>
            <!-- End Step Item -->

            <!-- Step Item -->
            <div class="relative last:pb-0 pb-8 last:after:hidden after:absolute after:top-[38px] after:bottom-0 after:start-[19px] after:w-px after:bg-gray-200 dark:after:bg-neutral-700">
            <div class="w-full flex gap-x-5">
                <img class="flex-shrink-0 w-[38px] h-[38px] rounded-full" src="https://images.unsplash.com/photo-1568048689711-5e0325cea8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Image Description">

                <div class="grow">
                <h4 class="text-sm font-semibold text-mainblack">
                    Lana Robinson
                </h4>

                <p class="text-sm text-gray-500 dark:text-neutral-500">
                    Added 2 files to task
                    <a class="ms-1 align-middle inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-blue-400 dark:hover:text-blue-500" href="#">
                    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" />
                    </svg>
                    PR-7
                    </a>
                </p>

                <!-- Media -->
                <div class="mt-2 grid grid-cols-2 gap-x-2">
                    <!-- Card -->
                    <div class="border border-gray-200 rounded-lg p-2 dark:border-neutral-700">
                    <div class="flex gap-x-2">
                        <svg class="flex-shrink-0 w-6 h-6" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.0324 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 15.8079L25.9844 18.3197L31.9364 15.8079V8.86395L20.0324 1.91994Z" fill="#21A366" />
                        <path d="M8.12839 8.86395H20.0324V15.8079H8.12839V8.86395Z" fill="#107C41" />
                        <path d="M30.614 1.91994H20.0324V8.86395H31.9364V3.24228C31.9364 2.89158 31.7971 2.55523 31.5491 2.30725C31.3011 2.05926 30.9647 1.91994 30.614 1.91994Z" fill="#33C481" />
                        <path d="M20.0324 15.8079H8.12839V28.3736C8.12839 28.7243 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.6959 9.45071 29.6959H30.6141C30.9647 29.6959 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7243 31.9364 28.3736V22.7519L20.0324 15.8079Z" fill="#185C37" />
                        <path d="M20.0324 15.8079H31.9364V22.7519H20.0324V15.8079Z" fill="#107C41" />
                        <path opacity="0.1" d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z" class="fill-black dark:fill-neutral-200" fill="currentColor" />
                        <path opacity="0.2" d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z" class="fill-black dark:fill-neutral-200" fill="currentColor" />
                        <path opacity="0.2" d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z" class="fill-black dark:fill-neutral-200" fill="currentColor" />
                        <path opacity="0.2" d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z" class="fill-black dark:fill-neutral-200" fill="currentColor" />
                        <path d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16402 23.7439 0.827672 23.6047 0.579686 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579686 8.25922C0.827672 8.01122 1.16402 7.87194 1.51472 7.87194Z" fill="#107C41" />
                        <path d="M3.69711 20.7679L6.90722 15.794L3.96694 10.8479H6.33286L7.93791 14.0095C8.08536 14.3091 8.18688 14.5326 8.24248 14.68H8.26328C8.36912 14.4407 8.47984 14.2079 8.5956 13.9817L10.3108 10.8479H12.4822L9.46656 15.7663L12.5586 20.7679H10.2473L8.3932 17.2959C8.30592 17.148 8.23184 16.9927 8.172 16.8317H8.14424C8.09016 16.9891 8.01824 17.1399 7.92998 17.2811L6.02236 20.7679H3.69711Z" fill="white" />
                        </svg>
                        <div class="grow truncate">
                        <p class="block truncate text-xs text-mainblack">
                            weekly-reports.xls
                        </p>
                        <small class="block text-xs text-gray-400 dark:text-neutral-500">
                            4kb
                        </small>
                        </div>
                    </div>
                    </div>
                    <!-- End Card -->

                    <!-- Card -->
                    <div class="border border-gray-200 rounded-lg p-2 dark:border-neutral-700">
                    <div class="flex gap-x-2">
                        <svg class="flex-shrink-0 w-6 h-6" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <div class="grow truncate">
                        <p class="block truncate text-xs text-mainblack">
                            monthly-reports.xls
                        </p>
                        <small class="block text-xs text-gray-400 dark:text-neutral-500">
                            12kb
                        </small>
                        </div>
                    </div>
                    </div>
                    <!-- End Card -->
                </div>
                <!-- End Media -->

                <p class="mt-2 text-[11px] uppercase text-gray-400 dark:text-neutral-500">
                    Now
                </p>
                </div>
            </div>
            </div>
            <!-- End Step Item -->

            <div id="hs-pro-dnao-button" class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-pro-dnao">
            <!-- Step Item -->
            <div class="relative last:pb-0 pb-8 last:after:hidden after:absolute after:top-[38px] after:bottom-0 after:start-[19px] after:w-px after:bg-gray-200 dark:after:bg-neutral-700">
                <div class="w-full flex gap-x-5">
                <span class="flex flex-shrink-0 justify-center items-center w-[38px] h-[38px] border border-gray-200 text-sm font-semibold uppercase text-gray-800 rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                    D
                </span>

                <div class="grow">
                    <h4 class="text-sm font-semibold text-mainblack">
                    David Lidell
                    </h4>

                    <p class="text-sm text-gray-500 dark:text-neutral-500">
                    Added a new member to Preline
                    </p>

                    <p class="mt-2 text-[11px] uppercase text-gray-400 dark:text-neutral-500">
                    May 15
                    </p>
                </div>
                </div>
            </div>
            <!-- End Step Item -->

            <!-- Step Item -->
            <div class="relative last:pb-0 pb-8 last:after:hidden after:absolute after:top-[38px] after:bottom-0 after:start-[19px] after:w-px after:bg-gray-200 dark:after:bg-neutral-700">
                <div class="w-full flex gap-x-5">
                <span class="flex flex-shrink-0 justify-center items-center w-[38px] h-[38px] border border-gray-200 text-sm font-semibold uppercase text-gray-800 rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                    <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                    <path d="m15 5 4 4" />
                    </svg>
                </span>

                <div class="grow">
                    <h4 class="text-sm font-semibold text-mainblack">
                    Project status updated
                    </h4>

                    <p class="text-sm text-gray-500 dark:text-neutral-500">
                    Marked
                    <a class="align-middle inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-blue-400 dark:hover:text-blue-500" href="#">
                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" />
                        </svg>
                        PR-4
                    </a>
                    as
                    <span class="ms-0.5 inline-block align-middle py-1 px-1.5 bg-skin text-xs font-medium text-gray-800 rounded-md dark:bg-neutral-700 dark:text-neutral-300">
                        In progress
                    </span>
                    </p>

                    <p class="mt-2 text-[11px] uppercase text-gray-400 dark:text-neutral-500">
                    Feb 10
                    </p>
                </div>
                </div>
            </div>
            <!-- End Step Item -->
            </div>

            <!-- Step Item -->
            <div class="relative last:pb-0 pb-8 last:after:hidden after:absolute after:top-[38px] after:bottom-0 after:start-[19px] after:w-px after:bg-gray-200 dark:after:bg-neutral-700">
            <button type="button" class="hs-collapse-toggle hs-collapse-open:hidden group w-full text-start flex items-center gap-x-5 focus:outline-none" id="hs-pro-dnao" data-hs-collapse="#hs-pro-dnao-button">
                <span class="w-[38px]">
                <span class="flex flex-shrink-0 justify-center items-center w-6 h-7 border border-gray-200 text-sm font-semibold text-gray-800 rounded-md mx-auto dark:border-neutral-700 dark:text-neutral-400">
                    <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m7 15 5 5 5-5" />
                    <path d="m7 9 5-5 5 5" />
                    </svg>
                </span>
                </span>

                <span class="grow">
                <span class="text-sm font-semibold text-gray-800 group-focus:text-blue-600 dark:text-neutral-300 dark:group-focus:text-blue-500">
                    Show 2 more activities
                </span>
                </span>
            </button>
            </div>
            <!-- End Step Item -->
        <!-- End Vertical Steps -->
        </div>
        <!-- End Body -->
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>