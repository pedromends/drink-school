<template lang="">
    <section class="pr-2">
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="effect hover:bg-maingreen/80 hover:text-white h-full font-medium text-center flex items-center gap-6 px-6 py-1 transition duration-200"
            type="button">
            <img class="rounded-full w-6 h-6 mx-auto border-2 border-maingreen" src='@/assets/joaopedro.png' alt=""/>
            <p class="text-sm text-maingreen">João</p>
        </button>
            
        <!-- Dropdown menu -->
        <div id="dropdown" class="z-10 hidden bg-mainblue divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
            <ul class="py-2 text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li class="w-full effect2 flex items-center gap-3 px-3 hover:bg-gray-700 transition duration-200">
                    <img class="w-4" src="@/assets/icons/profile.svg" alt="">
                    <a href="#" class="block px-4 text-white text-xs py-2">Meu Perfil</a>
                </li>
                <li class="w-full effect2 flex items-center gap-3 px-3 hover:bg-gray-700 transition duration-200">
                    <img class="w-4" src="@/assets/icons/settings.svg" alt="">
                    <a href="#" class="block px-4 text-white text-xs py-2">Configurações</a>
                </li>
                <li class="w-full effect2 flex items-center gap-3 px-3 hover:bg-gray-700 transition duration-200">
                    <img class="w-4" src="@/assets/icons/support.svg" alt="">
                    <a href="#" class="block px-4 text-white text-xs py-2">Suporte</a>
                </li>
                <li class="w-full effect2 flex items-center gap-3 px-3 hover:bg-gray-700 transition duration-200">
                    <img class="w-4" src="@/assets/icons/log-out.svg" alt="">
                    <a href="#" class="block px-4 text-white text-xs py-2">Sair</a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: 'NavDropDown',
}
</script>

<style scoped>
.effect:hover p {
    color:white;
}

.effect:hover img {
    border-color: white;
}

.effect2:hover a{
 color: #00dc82;
}
</style>