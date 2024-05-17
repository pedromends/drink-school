<template lang="">
  <section class="relative flex items-center">
    <div class="lg:flex justify-between w-full gap-10 absolute hidden">
      <button
        class="bg-maingreen/70 hover:bg-maingreen border-2 border-mainyellow rounded-xl p-3 transition duration-200 hover:bg-gray-400 z-30"
        @click="scrollLeft()"
      >
        <img src="/assets/icons/left-arrow.webp" alt="" />
      </button>
      <button
        class="bg-maingreen/70 hover:bg-maingreen border-2 border-mainyellow rounded-xl p-3 transition duration-200 hover:bg-gray-400 z-30"
        @click="scrollRight()"
      >
        <img src="/assets/icons/right-arrow.webp" alt="" />
      </button>
    </div>
    <div class="flex items-center justify-center lg:px-16 w-full">
      <div
        id="carousel-2"
        class="flex flex-col lg:flex-row gap-5 overflow-scroll overflow-x-hidden overflow-y-hidden px-6 lg:px-12 py-2"
      >
        <div
          class="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,1)),url('assets/images/vivendo-caipirinha.png')] bg-cover bg-center bg-no-repeat text-white flex flex-col border-t-8 border-mainyellow rounded-lg pt-52 pb-10 px-3 gap-3 shrink-0 max-w-96 justify-center lg:justify-end"
        >
          <p class="text-6xl font-roc text-white w-4/5">
            VIVENDO DE CAIPIRINHA
          </p>
          <p class="text-2xl font-roc text-thin w-3/5">
            Apresentação do conteúdo do curso, módulos e estrutura.
          </p>
          <p class="text-base text-start font-newspirit">
            AULA 01
          </p>
        </div>

        <div
          class="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,1)),url('assets/images/historia-caipirinha.png')] bg-cover bg-center bg-no-repeat text-white flex flex-col border-t-8 border-mainyellow rounded-lg pt-52 pb-10 px-3 gap-3 shrink-0 max-w-96 lg:justify-end"
        >
        <p class="text-6xl font-roc text-white w-4/5">
            HISTÓRIA DA CAIPIRINHA
          </p>
          <p class="text-2xl font-roc text-thin w-3/5">
            Conheça as origens da caipirinha, onde surgiu e em que contexto.
          </p>
          <p class="text-base text-start font-newspirit">
            AULA 02
          </p>
        </div>

        <div
          class="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,1)),url('assets/images/importancia-cachaca.png')] bg-cover bg-center bg-no-repeat text-white flex flex-col border-t-8 border-mainyellow rounded-lg pt-52 pb-10 px-3 gap-3 shrink-0 max-w-96 lg:justify-end"
        >
          <p class="text-6xl font-roc text-white">
            A IMPORTÂNCIA DA CACHAÇA
          </p>
          <p class="text-2xl font-roc text-thin w-3/5">
            A história do destilado brasileiro que é a base da caipirinha.
          </p>
          <p class="text-base text-start font-newspirit">
            AULA 03
          </p>
        </div>

        <div
          class="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,1)),url('assets/images/utensilios.png')] bg-cover bg-center bg-no-repeat text-white flex flex-col border-t-8 border-mainyellow rounded-lg pt-52 pb-10 px-3 gap-3 shrink-0 max-w-96 lg:justify-end"
        >
          <p class="text-6xl font-roc text-white w-4/5">
            UTENSÍLIOS E MÉTODOS
          </p>
          <p class="text-2xl font-roc text-thin w-3/5">
            Ferramentas necessárias e métodos para a confecção da melhor caipirinha do mundo.
          </p>
          <p class="text-base text-start font-newspirit">
            AULA 04
          </p>
        </div>

        <div
          class="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,1)),url('assets/images/metodologia.png')] bg-cover bg-center bg-no-repeat text-white flex flex-col border-t-8 border-mainyellow rounded-lg pt-52 pb-10 px-3 gap-3 shrink-0 max-w-96 lg:justify-end"
        >
          <p class="text-6xl font-roc text-white w-4/5">
            METODOLOGIA DE PREPARO
          </p>
          <p class="text-2xl font-roc text-thin w-3/5">
            Como a verdadeira caipirinha é feita, o que é a IBA e qual a importância dela no cenário da coquetelaria mundial.
          </p>
          <p class="text-base text-start font-newspirit">
            AULA 05
          </p>
        </div>

        <div
          class="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,1)),url('assets/images/variacoes.png')] bg-cover bg-center bg-no-repeat text-white flex flex-col border-t-8 border-mainyellow rounded-lg pt-52 pb-10 px-3 gap-3 shrink-0 max-w-96 lg:justify-end"
        >
          <p class="text-6xl font-roc text-white">
            VARIAÇÕES DE CAIPIRINHA
          </p>
          <p class="text-2xl font-roc text-thin w-3/5">
            Tipos de bebidas e o que muda em cada destilado. Tipos e nomes dos cocktails que são as variações da caipirinha.
          </p>
          <p class="text-base text-start font-newspirit">
            AULA 06
          </p>
        </div>

        <div
          class="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,1)),url('assets/images/tecnicas-preparo.png')] bg-cover bg-center bg-no-repeat text-white flex flex-col border-t-8 border-mainyellow rounded-lg pt-52 pb-10 px-3 gap-3 shrink-0 max-w-96 lg:justify-end"
        >
          <p class="text-6xl font-roc text-white w-4/5">
            TÉCNICAS DE PREPARO
          </p>
          <p class="text-2xl font-roc text-thin w-3/5">
            Metodologia de preparo. Como execuitar e o que muda de uma método para outro.
          </p>
          <p class="text-base text-start font-newspirit">
            AULA 07
          </p>
        </div>

        <div
          class="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,1)),url('assets/images/xarope-caipirinha.png')] bg-cover bg-center bg-no-repeat text-white flex flex-col border-t-8 border-mainyellow rounded-lg pt-52 pb-10 px-3 gap-3 shrink-0 max-w-96 lg:justify-end"
        >
          <p class="text-6xl font-roc text-white w-4/5">
              XAROPE PARA CAIPÍRINHA
          </p>
          <p class="text-2xl font-roc text-thin w-3/5">
            Aprenda a preparar e utilizar o xarope simples de açúcar, a base principal de vários cocktails.
          </p>
          <p class="text-base text-start font-newspirit">
            AULA 08
          </p>
        </div>

        <div
          class="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,1)),url('assets/images/tudo-precificacao.png')] bg-cover bg-center bg-no-repeat text-white flex flex-col border-t-8 border-mainyellow rounded-lg pt-52 pb-10 px-3 gap-3 shrink-0 max-w-96 lg:justify-end"
        >
          <p class="text-6xl font-roc text-white w-4/5">
            TUDO SOBRE PRECIFICAÇÃO
          </p>
          <p class="text-2xl font-roc text-thin w-3/5">
            Como precioficar de forma correta, maximizar seus lucros e diminuir suas perdas.
          </p>
          <p class="text-base text-start font-newspirit">
            AULA 09
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CarouselOne",
  data() {
    return {
      scrollPerClick: 450,
      scrollAmount: 0,
    };
  },
  methods: {
    scrollLeft() {
      let sliders = document.getElementById("carousel-2");
      sliders.scrollTo({
        top: 0,
        left: (this.scrollAmount -= this.scrollPerClick),
        behavior: "smooth",
      });

      if (this.scrollAmount < 0) {
        this.scrollAmount = 0;
      }
    },
    scrollRight() {
      let sliders = document.getElementById("carousel-2");
      if (this.scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
        sliders.scrollTo({
          top: 0,
          left: (this.scrollAmount += this.scrollPerClick),
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<style lang=""></style>
