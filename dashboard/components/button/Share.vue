<template lang="">
<div class="hs-dropdown relative inline-flex [--auto-close:inside]">
                        <button id="hs-pro-dnshd" type="button" class="py-2 px-3 flex items-center text-sm font-medium rounded-lg bg-mainblack text-white hover:bg-skin hover:text-mainblack transiton duration-200">
                            Compartilhar
                        </button>

                        <!-- Share Dropdown -->
                        <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-full sm:w-[460px] transition-[opacity,margin] duration opacity-0 hidden z-10 bg-mainyellow border border-mainblack rounded-lg" aria-labelledby="hs-pro-dnshd">
                            <!-- Header -->
                            <div class="p-5 border-b border-gray-200 dark:border-neutral-800">
                                <span class="block text-xs font-medium text-gray-800 mb-2">
                                    Convidar
                                </span>

                                <!-- Input Form -->
                                <div class="flex items-center gap-x-2">
                                    <div class="relative w-full">
                                    <input type="text" class="py-2 px-3 pe-24 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 bg-skin" placeholder="Adicionar nomes ou emails">
                                    <div class="absolute inset-y-0 end-0 flex items-center z-20 pe-[5px] text-gray-400">
                                        <!-- Select -->
                                        <div class="relative">
                                            <select data-hs-select='{
                                                "placeholder": "Select option...",
                                                "toggleTag": "<button type=\"button\"></button>",
                                                "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-1.5 ps-2.5 pe-6 inline-flex flex-shrink-0 justify-center items-center gap-x-1.5 text-xs text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 before:absolute before:inset-0 before:z-[1] dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
                                                "dropdownClasses": "end-0 mt-2 z-50 w-28 p-1 space-y-0.5 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-950",
                                                "optionClasses": "hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-1.5 px-2 w-full text-xs text-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
                                                "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 w-3.5 h-3.5 text-gray-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
                                                }' class="hidden">
                                                <option value="">Choose</option>
                                                <option selected>Can view</option>
                                                <option>Can edit</option>
                                                <option>Admin</option>
                                            </select>

                                            <div class="absolute top-1/2 end-1.5 -translate-y-1/2">
                                                <svg class="flex-shrink-0 w-3.5 h-3.5 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="m6 9 6 6 6-6" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    </div>

                                    <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    Send
                                    </button>
                                </div>
                                <!-- End Input Form -->

                                <div class="flex mt-2">
                                    <input type="checkbox" class="shrink-0 w-3.5 h-3.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-pro-dnshdnch" checked>
                                    <label for="hs-pro-dnshdnch" class="text-xs text-gray-600 ms-1.5 dark:text-neutral-400">
                                    Notificar destinatários via email
                                    </label>
                                </div>
                            </div>
                            <!-- End Header -->

                            <!-- Body -->
                            <div id="hs-pro-dnshd-scrollable-content" class="p-5 space-y-4 h-[320px] overflow-y-auto overflow-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                                <span class="block text-xs font-medium text-mainblack">
                                    From Htmlstream
                                </span>

                                <!-- User -->
                                <div class="w-full flex items-center gap-x-3 hover:bg-skin p-1 rounded-lg transition duration-200">
                                    <img class="flex-shrink-0 w-[38px] h-[38px] rounded-full" src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Image Description">
                                    <div class="grow">
                                        <span class="block text-sm font-medium text-mainblack">
                                            James Collison <span class="text-xs font-normal text-gray-500 dark:text-neutral-500">(you)</span>
                                        </span>
                                        <span class="block text-xs text-gray-500 dark:text-neutral-500">
                                            james@site.com
                                        </span>
                                    </div>

                                    <!-- Select -->
                                    <div class="relative">
                                        <select data-hs-select='{
                                            "placeholder": "Select option...",
                                            "toggleTag": "<button type=\"button\"></button>",
                                            "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-1.5 ps-2.5 pe-6 inline-flex flex-shrink-0 justify-center items-center gap-x-1.5 text-xs text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 before:absolute before:inset-0 before:z-[1] dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
                                            "dropdownClasses": "end-0 mt-2 z-50 w-28 p-1 space-y-0.5 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-950",
                                            "optionClasses": "hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-1.5 px-2 w-full text-xs text-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
                                            "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 w-3.5 h-3.5 text-gray-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
                                            "viewport": "#hs-pro-dnshd-scrollable-content"
                                            }' class="hidden">
                                            <option value="">Choose</option>
                                            <option>Can view</option>
                                            <option>Can edit</option>
                                            <option selected>Admin</option>
                                            <option>Remove</option>
                                        </select>

                                        <div class="absolute top-1/2 end-1.5 -translate-y-1/2">
                                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>
                                    <!-- End Select -->
                                </div>
                                <!-- End User -->

                                <!-- User -->
                                <div class="w-full flex items-center gap-x-3 hover:bg-skin p-1 rounded-lg transition duration-200">
                                    <span class="flex flex-shrink-0 justify-center items-center w-[38px] h-[38px] bg-white border border-gray-200 text-gray-500 text-sm font-semibold rounded-full shadow-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-500">
                                    L
                                    </span>
                                    <div class="grow">
                                        <span class="block text-sm font-medium text-mainblack">
                                            Liza Harrison
                                        </span>
                                        <span class="block text-xs text-gray-500 dark:text-neutral-500">
                                            liza@site.com
                                        </span>
                                    </div>

                                    <!-- Select -->
                                    <div class="relative">
                                        <select data-hs-select='{
                                            "placeholder": "Select option...",
                                            "toggleTag": "<button type=\"button\"></button>",
                                            "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-1.5 ps-2.5 pe-6 inline-flex flex-shrink-0 justify-center items-center gap-x-1.5 text-xs text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 before:absolute before:inset-0 before:z-[1] dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
                                            "dropdownClasses": "end-0 mt-2 z-50 w-28 p-1 space-y-0.5 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-950",
                                            "optionClasses": "hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-1.5 px-2 w-full text-xs text-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
                                            "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 w-3.5 h-3.5 text-gray-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
                                            "viewport": "#hs-pro-dnshd-scrollable-content"
                                            }' class="hidden">
                                            <option value="">Choose</option>
                                            <option selected>Can view</option>
                                            <option>Can edit</option>
                                            <option>Admin</option>
                                            <option>Remove</option>
                                        </select>

                                        <div class="absolute top-1/2 end-1.5 -translate-y-1/2">
                                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>
                                    <!-- End Select -->
                                </div>
                                <!-- End User -->

                                <!-- User -->
                                <div class="w-full flex items-center gap-x-3 hover:bg-skin p-1 rounded-lg transition duration-200">
                                    <img class="flex-shrink-0 w-[38px] h-[38px] rounded-full" src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Image Description">
                                        <div class="grow">
                                            <span class="block text-sm font-medium text-mainblack">
                                                Daniel Hobbs
                                            </span>
                                            <span class="block text-xs text-gray-500 dark:text-neutral-500">
                                                dhobbs@site.com
                                            </span>
                                        </div>

                                    <!-- Select -->
                                    <div class="relative">
                                        <select data-hs-select='{
                                            "placeholder": "Select option...",
                                            "toggleTag": "<button type=\"button\"></button>",
                                            "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-1.5 ps-2.5 pe-6 inline-flex flex-shrink-0 justify-center items-center gap-x-1.5 text-xs text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 before:absolute before:inset-0 before:z-[1] dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
                                            "dropdownClasses": "end-0 mt-2 z-50 w-28 p-1 space-y-0.5 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-950",
                                            "optionClasses": "hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-1.5 px-2 w-full text-xs text-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
                                            "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 w-3.5 h-3.5 text-gray-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
                                            "viewport": "#hs-pro-dnshd-scrollable-content"
                                            }' class="hidden">
                                            <option value="">Choose</option>
                                            <option>Can view</option>
                                            <option selected>Can edit</option>
                                            <option>Admin</option>
                                            <option>Remove</option>
                                        </select>

                                        <div class="absolute top-1/2 end-1.5 -translate-y-1/2">
                                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>
                                    <!-- End Select -->
                                </div>
                                <!-- End User -->

                                <!-- Show More Button -->
                                <button type="button" class="hs-collapse-toggle hs-collapse-open:hidden w-full text-start flex items-center gap-x-3 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" id="hs-pro-dnshshmc" data-hs-collapse="#hs-pro-dnshshmc-button">
                                    <span class="flex flex-shrink-0 justify-center items-center w-[38px] h-[38px] text-sm font-semibold text-gray-500 rounded-lg dark:text-neutral-500">
                                        <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                        </svg>
                                    </span>

                                    <span class="grow">
                                        <span class="text-xs text-gray-500 dark:text-neutral-500">
                                            2 more people
                                        </span>
                                    </span>
                                </button>
                                <!-- End Show More Button -->

                                <!-- Show More Collapse -->
                                <div id="hs-pro-dnshshmc-button" class="hs-collapse hidden w-full transition-none space-y-4" aria-labelledby="hs-pro-dnshshmc">
                                    <!-- User -->
                                    <div class="w-full flex items-center gap-x-3 hover:bg-skin p-1 rounded-lg transition duration-200">
                                        <span class="flex flex-shrink-0 justify-center items-center w-[38px] h-[38px] bg-white border border-gray-200 text-gray-500 text-sm font-semibold rounded-full shadow-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-500">
                                            O
                                        </span>
                                        <div class="grow">
                                            <span class="block text-sm font-medium text-mainblack">
                                            Ols Shols
                                            </span>
                                            <span class="block text-xs text-gray-500 dark:text-neutral-500">
                                            ols@site.com
                                            </span>
                                        </div>

                                        <!-- Select -->
                                        <div class="relative">
                                            <select data-hs-select='{
                                                "placeholder": "Select option...",
                                                "toggleTag": "<button type=\"button\"></button>",
                                                "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-1.5 ps-2.5 pe-6 inline-flex flex-shrink-0 justify-center items-center gap-x-1.5 text-xs text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 before:absolute before:inset-0 before:z-[1] dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
                                                "dropdownClasses": "end-0 mt-2 z-50 w-28 p-1 space-y-0.5 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-950",
                                                "optionClasses": "hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-1.5 px-2 w-full text-xs text-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
                                                "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 w-3.5 h-3.5 text-gray-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
                                                "viewport": "#hs-pro-dnshd-scrollable-content"
                                            }' class="hidden">
                                            <option value="">Choose</option>
                                            <option>Can view</option>
                                            <option selected>Can edit</option>
                                            <option>Admin</option>
                                            <option>Remove</option>
                                            </select>

                                            <div class="absolute top-1/2 end-1.5 -translate-y-1/2">
                                            <svg class="flex-shrink-0 w-2.5 h-2.5 text-gray-600 dark:text-neutral-400" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                            </div>
                                        </div>
                                        <!-- End Select -->
                                    </div>
                                    <!-- End User -->

                                    <!-- User -->
                                    <div class="w-full flex items-center gap-x-3 hover:bg-skin p-1 rounded-lg transition duration-200">
                                        <img class="flex-shrink-0 w-[38px] h-[38px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Image Description">
                                        <div class="grow">
                                            <span class="block text-sm font-medium text-mainblack">
                                            Crane
                                            </span>
                                            <span class="block text-xs text-gray-500 dark:text-neutral-500">
                                            crane@site.com
                                            </span>
                                        </div>

                                        <!-- Select -->
                                        <div class="relative">
                                            <select data-hs-select='{
                                                "placeholder": "Select option...",
                                                "toggleTag": "<button type=\"button\"></button>",
                                                "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-1.5 ps-2.5 pe-6 inline-flex flex-shrink-0 justify-center items-center gap-x-1.5 text-xs text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 before:absolute before:inset-0 before:z-[1] dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
                                                "dropdownClasses": "end-0 mt-2 z-50 w-28 p-1 space-y-0.5 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-950",
                                                "optionClasses": "hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-1.5 px-2 w-full text-xs text-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
                                                "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 w-3.5 h-3.5 text-gray-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
                                                "viewport": "#hs-pro-dnshd-scrollable-content"
                                            }' class="hidden">
                                            <option value="">Choose</option>
                                            <option selected>Can view</option>
                                            <option>Can edit</option>
                                            <option>Admin</option>
                                            <option>Remove</option>
                                            </select>

                                            <div class="absolute top-1/2 end-1.5 -translate-y-1/2">
                                            <svg class="flex-shrink-0 w-2.5 h-2.5 text-gray-600 dark:text-neutral-400" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <!-- End Select -->
                                </div>
                                <!-- End User -->
                            </div>
                            <!-- End Show More Collapse -->

                            <!-- User -->
                            <div class="w-full flex items-center gap-x-3">
                                <img class="flex-shrink-0 w-[38px] h-[38px] rounded-full" src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Image Description">
                                <div class="grow">
                                    <span class="block text-sm font-medium text-mainblack">
                                        Anna Richard
                                    </span>
                                    <span class="block text-xs text-gray-500 dark:text-neutral-500">
                                        anna@site.com
                                    </span>
                                </div>

                                <!-- Select -->
                                <div class="relative">
                                    <select data-hs-select='{
                                        "placeholder": "Select option...",
                                        "toggleTag": "<button type=\"button\"></button>",
                                        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-1.5 ps-2.5 pe-6 inline-flex flex-shrink-0 justify-center items-center gap-x-1.5 text-xs text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 before:absolute before:inset-0 before:z-[1] dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
                                        "dropdownClasses": "end-0 mt-2 z-50 w-28 p-1 space-y-0.5 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-950",
                                        "optionClasses": "hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-1.5 px-2 w-full text-xs text-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
                                        "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 w-3.5 h-3.5 text-gray-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
                                        "viewport": "#hs-pro-dnshd-scrollable-content"
                                        }' class="hidden">
                                        <option value="">Choose</option>
                                        <option>Can view</option>
                                        <option selected>Can edit</option>
                                        <option>Admin</option>
                                        <option>Remove</option>
                                    </select>

                                    <div class="absolute top-1/2 end-1.5 -translate-y-1/2">
                                        <svg class="flex-shrink-0 w-3.5 h-3.5 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </div>
                                </div>
                                <!-- End Select -->
                            </div>
                            <!-- End User -->
                        </div>
                        <!-- End Body -->

                        <!-- Subfooter -->
                        <div class="p-5 border-t border-gray-200 dark:border-neutral-800">
                            <span class="block text-xs font-medium text-mainblack mb-2">
                                Share read-only link
                            </span>

                            <!-- Input Form -->
                            <div class="flex items-center gap-x-2">
                                <input id="hs-dshct" type="text" class="py-2 px-3 block w-full bg-skin border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500" value="https://www.figma.com/community/file/1179068859697769656">

                                <button type="button" class="js-clipboard [--is-toggle-tooltip:false] hs-tooltip w-[38px] h-[38px] flex-shrink-0 inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:focus:bg-neutral-700" data-clipboard-target="#hs-dshct" data-clipboard-action="copy" data-clipboard-success-text="Copied">
                                    <svg class="js-clipboard-default flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                    </svg>
                                    <svg class="js-clipboard-success hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-sm dark:bg-neutral-700" role="tooltip">
                                        <span class="js-clipboard-success-text">Copy</span>
                                    </span>
                                </button>
                            </div>
                            <!-- End Input Form -->
                        </div>
                        <!-- End Subfooter -->

                        <!-- Footer -->
                        <div class="py-3 px-5 border-t border-gray-200 dark:border-neutral-800">
                            <a class="inline-flex items-center gap-x-1.5 text-xs text-gray-500 hover:underline font-medium focus:outline-none focus:underline dark:text-blue-400 dark:hover:text-blue-500" href="#">
                                <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 16v-4" />
                                <path d="M12 8h.01" />
                                </svg>
                                Read more about share
                            </a>
                        </div>
                        <!-- End Footer -->
                    </div>
                    <!-- End Share Dropdown -->
                </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>