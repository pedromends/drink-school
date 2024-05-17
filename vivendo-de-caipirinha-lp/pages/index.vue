<template lang="">
  <main>
    <section
      class="bg-main bg-[position:75%_0%] bg-cover bg-no-repeat scale-100"
    >
      <div class="flex flex-col gap-48">
        <div class="flex justify-start">
          <div
            class="flex flex-col lg:px-24 justify-between mt-24 lg:mt-6 lg:gap-6 lg:py-20"
          >
            <img
              src="@/assets/icons/logo.webp"
              alt=""
              class="h-10 px-24 lg:self-start"
            />
            <div
              class="bg-gradient-to-b from-main to-black gap-7 lg:gap-2 flex flex-col justify-center lg:justify-start bottom-0 pt-48 lg:pt-2"
            >
              <h1
                class="bottom-0 font-thin text-6xl text-white text-center lg:text-start lg:text-8xl lg:w-1/2 lg:mt-4 font-roc tracking-tight lg:leading-[80px]"
              >
                TORNE-SE UM
                <span class="text-mainyellow"
                  >ESPECIALISTA EM CAIPIRINHAS!</span
                >
              </h1>
              <div
                class="bg-gradient-to-b from-transparent to-black to-15% flex flex-col justify-center gap-10 px-8 pt-10 lg:to-transparent lg:pl-0"
              >
                <p
                  class="text-white font-thin font-newspirit self-center text-center w-4/5 lg:self-start text-2xl lg:w-[35%] lg:text-start"
                >
                  Descubra <span class="underline">todos os segredos</span> para
                  se <span class="underline">tornar um mestre e viver</span> da
                  venda de caipirinhas
                </p>
                <a
                  href="https://pay.kiwify.com.br/Xuau3lv"
                  class="flex justify-center w-full lg:justify-start"
                >
                  <button
                    class="bg-mainyellow py-4 rounded-lg border px-20 border-mainyellow text-2xl hover:bg-black hover:text-white transition duration-200 lg:w-2/6 font-roc"
                  >
                    COMPRAR AGORA
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-black flex flex-col gap-10">
      <div class="bg-black flex flex-col pt-12 lg:pt-20">
        <a
          href="#cards-1"
          class="self-center rounded-lg border-2 border-mainyellow p-4 font-extrabold hover:bg-gray-400 transition duration-200"
        >
          <img src="@/assets/icons/arrow-down.svg" alt="" />
        </a>
        <div class="bg-black flex flex-col gap-10 py-10 justify-center">
          <p
            class="text-white mx-auto text-6xl w-4/5 text-center lg:text-7xl tracking-tighter font-roc"
          >
            <span class="text-mainyellow"> PARA QUEM </span>É ESSE CURSO ?
          </p>
          <div id="cards-1" class="flex flex-col gap-10 py-10 px-5 lg:px-24">
            <div class="flex flex-col lg:flex-row gap-10 lg:px-14">
              <div
                class="bg-white text-black flex flex-col lg:flex-row border-t-8 border-mainyellow rounded-lg py-10 lg:px-5"
              >
                <img
                  src="/assets/icons/chef-hat.webp"
                  class="w-20 mx-auto"
                  alt=""
                />
                <p
                  class="px-14 lg:text-start lg:text-xl lg:px-4 text-2xl text-center mx-auto font-newspirit"
                >
                  Para aprender a preparar caipirinhas de qualidade e
                  oferecê-las em eventos, festas e quiosques de praia.
                </p>
              </div>
              <div
                class="bg-white text-black flex flex-col lg:flex-row border-t-8 border-mainyellow rounded-lg py-10 lg:px-5"
              >
                <img
                  src="/assets/icons/coins.webp"
                  class="w-20 mx-auto"
                  alt=""
                />
                <p
                  class="px-12 lg:text-start lg:text-xl lg:px-4 text-2xl text-center mx-auto font-newspirit"
                >
                  Para quem quer utilizar a coquetelaria como uma fonte de renda
                  extra durante os meses mais quentes do ano.
                </p>
              </div>
              <div
                class="bg-white text-black flex flex-col lg:flex-row border-t-8 border-mainyellow rounded-lg py-10 lg:px-5"
              >
                <img
                  src="/assets/icons/rocket.webp"
                  class="w-20 mx-auto"
                  alt=""
                />
                <p
                  class="px-12 lg:text-start lg:text-xl lg:px-4 text-2xl text-center mx-auto font-newspirit"
                >
                  Para você que se sente motivado a empreender e buscar novas
                  oportunidades de negócio na mixologia.
                </p>
              </div>
            </div>
            <div class="flex flex-col lg:flex-row gap-8 lg:px-72">
              <div
                class="bg-white text-black flex flex-col lg:flex-row border-t-8 border-mainyellow rounded-lg py-10 lg:px-5"
              >
                <img
                  src="/assets/icons/confetti.webp"
                  class="w-20 mx-auto"
                  alt=""
                />
                <p
                  class="px-16 text-center mx-auto text-2xl lg:text-start lg:text-xl lg:px-4 font-newspirit"
                >
                  Para aprender a preparar coquetéis incríveis e surpreender
                  seus amigos em todas as ocasiões.
                </p>
              </div>
              <div
                class="bg-white text-black flex flex-col lg:flex-row border-t-8 border-mainyellow rounded-lg py-10 lg:px-5"
              >
                <img src="/assets/icons/mug.webp" class="w-20 mx-auto" alt="" />
                <p
                  class="px-14 text-center mx-auto text-2xl lg:text-start lg:text-xl lg:px-4 font-newspirit"
                >
                  Para quem quer utilizar a mixologia como uma forma de
                  expressão criativa e proporcionar experiências únicas.
                </p>
              </div>
            </div>
          </div>
          <a
            href="#cards-2"
            class="mx-auto mt-16 rounded-lg border-2 border-mainyellow p-4 hover:bg-gray-400 transition duration-200"
          >
            <img src="@/assets/icons/arrow-down.svg" alt="" />
          </a>
        </div>
      </div>
    </section>

    <section id="cards-2" class="bg-black flex flex-col gap-24 lg:gap-24 pb-24">
      <p
        class="text-white mx-auto text-6xl text-center lg:w-2/5 w-4/5 lg:text-7xl font-roc"
      >
        CONFIRA O
        <span class="text-mainyellow">QUE VAI ROLAR</span>
        DENTRO DO CURSO
      </p>
      <div class="flex justify-center items-center">
        <div
          class="relative flex justify-center lg:justify-end items-center gap-3 px-12 lg:w-248 lg:h-96"
        >
          <iframe
            class="w-full aspect-video"
            src="https://www.youtube.com/embed/DWmbnGtin2U"
            title="É Possível viver de caipirinha?"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <a
        href="https://pay.kiwify.com.br/Xuau3lv"
        type="button"
        class="bg-mainyellow px-16 lg:w-1/5 mx-auto text-center py-4 rounded-lg font-roc text-3xl lg:text-2xl hover:bg-black hover:text-white transition duration-200 border-2 border-mainyellow lg:px-12"
      >
        QUERO SER ALUNO
      </a>

      <CarouselChapter />
      <div class="flex flex-col gap-5 pt-24">
        <div class="flex flex-col lg:flex-row">
          <div class="flex flex-col gap-5">
            <div
              class="flex flex-col-reverse lg:flex-row justify-center gap-10 items-center"
            >
              <div class="flex flex-col gap-5 w-full text-2xl">
                <div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
                  <div class="flex flex-col justify-center lg:order-2">
                    <p
                      class="lg:hidden inline text-white self-center mx-auto text-6xl text-center lg:text-start font-roc lg:self-start lg:mx-0 lg:ml-20 lg:w-4/6"
                    >
                      QUEM É
                      <span class="text-mainyellow">BERNARD BARTENDER ?</span>
                    </p>
                    <div class="flex">
                      <img
                        src="/assets/icons/bernard.png"
                        alt="Bartender"
                        class="h-132"
                      />
                    </div>
                  </div>
                  <div
                    class="flex flex-col gap-10 justify-start lg:gap-5 lg:px-12 lg:ml-24 lg:order-1"
                  >
                    <p
                      class="hidden lg:inline text-white self-center mx-auto text-6xl text-center lg:text-start font-roc lg:self-start lg:mx-0 lg:ml-8 lg:w-4/6"
                    >
                      QUEM É
                      <span class="text-mainyellow">BERNARD BARTENDER ?</span>
                    </p>
                    <p
                      class="text-white font-newspirit text-center px-8 lg:text-start"
                    >
                      Com 25 anos de experiência na coquetelaria, Bernard
                      Ramires compartilha sua paixão e conhecimento para
                      impactar vidas através dos drinks. É reconhecido como um
                      dos melhores bartenders, construiu uma carreira de sucesso
                      e acumulou diversos prêmios ao longo do caminho.
                    </p>
                    <div
                      class="flex flex-col lg:flex-row lg:justify-center gap-4 lg:text-base lg:px-16"
                    >
                      <div
                        class="flex items-center justify-center tracking-tighter gap-1 lg:justify-start"
                      >
                        <img src="/assets/icons/student.svg" alt="" />
                        <p class="text-white text-center">+500 ALUNOS</p>
                      </div>
                      <div
                        class="flex items-center justify-center tracking-tighter gap-1 lg:justify-start"
                      >
                        <img src="/assets/icons/medal.webp" alt="" />
                        <p class="text-white text-center">
                          +20 ANOS DE EXPERIÊNCIA
                        </p>
                      </div>
                    </div>
                    <p
                      class="text-white font-newspirit text-center px-8 lg:text-start"
                    >
                      Sua jornada na mixologia é marcada por uma busca
                      incessante pela excelência e pela arte de criar
                      experiências únicas em cada copo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="bg-black flex flex-col gap-14 py-16 pb-32">
      <p class="text-white mx-auto text-center text-7xl font-roc">
        NOSSOS CLIENTES <span class="text-mainyellow">APROVAM</span>
      </p>
      <CarouselMain />
    </section> -->
    <section
      class="bg-mainyellow relative flex flex-col justify-center rounded-3xl px-5 py-10 gap-5"
    >
      <img
        src="/assets/icons/logo-2.webp"
        class="w-48 absolute -top-24 self-center"
        alt="Bartender"
      />
      <div class="flex flex-col gap-6 mt-36 lg:px-72">
        <p class="mx-auto text-center text-5xl font-roc">
          PROMOÇÃO POR TEMPO LIMITADO
        </p>
        <!-- <p class="mx-auto text-center text-5xl mb-2 font-bold">16:20:01:59</p> -->
        <div
          class="bg-black rounded-3xl flex flex-col py-10 px-4 lg:px-10 gap-8 lg:w-3/5 self-center mt-10 pb-10"
        >
          <img src="@/assets/icons/logo.webp" class="w-48 mx-auto" alt="" />
          <p
            class="text-white font-newspirit text-center px-6 lg:w-96 lg:self-center text-2xl"
          >
            Oferta exclusiva apenas para esta turma de lançamento,
            <span class="text-mainyellow">TUDO POR:</span>
          </p>
          <div class="flex justify-center flex-col gap-7">
            <div class="flex flex-col gap-3 font-roc text-2xl">
              <p class="text-white mx-auto">DE <s>R$497,00</s></p>
              <p class="bg-white mx-auto px-3">Por apenas 12x de R$</p>
            </div>
            <p
              class="text-white mx-auto text-9xl font-roc font-bold lg:text-[11rem]"
            >
              9,74
            </p>
            <p class="text-white mx-auto font-roc text-2xl">
              ou R$97,00 À VISTA
            </p>
          </div>
          <a
            href="https://pay.kiwify.com.br/Xuau3lv"
            type="button"
            class="bg-mainyellow rounded-xl text-center py-4 px-10 lg:px-4 lg:w-4/5 self-center border-2 border-mainyellow hover:bg-black hover:text-white transition duration-200 font-roc tracking-wider text-3xl"
          >
            QUERO FAZER PARTE
          </a>

          <div class="flex justify-center text-white lg:gap-2 lg:px-14">
            <div class="flex items-center gap-1 lg:gap-4">
              <img src="@/assets/icons/shield.webp" alt="icon" class="w-6" />
              <p class="text-xs">Checkout <b>Seguro</b></p>
            </div>
            <div class="flex items-center gap-1 lg:gap-4">
              <img src="@/assets/icons/trophie.webp" alt="icon" class="w-6" />
              <p class="text-xs">Satisfação <b>Garantida</b></p>
            </div>
            <div class="flex items-center gap-1 lg:gap-4">
              <img src="@/assets/icons/lock.webp" alt="icon" class="w-6" />
              <p class="text-xs">Privacidade <b>Protegida</b></p>
            </div>
          </div>
        </div>
        <div
          class="rounded-xl border-2 border-t-4 border-black px-10 lg:px-7 pt-14 pb-10 self-center lg:w-7/12 lg:py-7"
        >
          <div
            class="flex flex-col lg:flex-row justify-center gap-24 lg:gap-10 items-center"
          >
            <img
              src="/assets/icons/7.webp"
              class="w-2/3 self-center lg:w-32"
              alt="Bartender"
            />
            <div class="flex flex-col gap-8 lg:gap-2 lg:w-3/5">
              <p
                class="text-center text-3xl lg:text-start lg:text-xl font-bold"
              >
                DIAS DE GARANTIA
              </p>
              <p
                class="font-newspirit text-center text-2xl lg:text-xl lg:text-start"
              >
                Você terá acesso a uma garantia de 7 dias. Se por algum motivo
                você não estiver satisfeito com o material do curso, basta
                enviar uma mensagem no WhatsApp e você receberá seu dinheiro do
                volta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-bege px-5">
      <p class="py-24 pb-10 text-center text-7xl font-roc tracking-tight">
        PERGUNTAS FREQUENTES
      </p>
      <div
        id="accordion-open"
        data-accordion="open"
        class="bg-white border-2 border-black rounded-2xl flex flex-col gap-3 p-5 font-newspirit lg:w-2/5 mx-auto"
      >
        <h2 id="accordion-open-heading-1">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black rounded-t-xl focus:ring-4 focus:ring-gray-200 gap-3"
            data-accordion-target="#accordion-open-body-1"
            aria-expanded="false"
            aria-controls="accordion-open-body-1"
          >
            <span class="flex items-center"
              >Qual é o conteúdo do curso "Viver de Caipirinha"?</span
            >
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-1"
          class="hidden"
          aria-labelledby="accordion-open-heading-1"
        >
          <div class="p-5 dark:border-gray-700 dark:bg-gray-900">
            <p class="text-black">
              O curso "Viver de Caipirinha" aborda desde técnicas de preparo de
              drinks até aspectos práticos e teóricos da profissão de bartender.
              Inclui módulos sobre história dos coquetéis, mixologia, gestão de
              estoque, atendimento ao cliente, entre outros.
            </p>
          </div>
        </div>
        <h2 id="accordion-open-heading-2">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black focus:ring-4 focus:ring-gray-200 gap-3"
            data-accordion-target="#accordion-open-body-2"
            aria-expanded="false"
            aria-controls="accordion-open-body-2"
          >
            <span class="flex items-center"
              >Como faço para me inscrever no curso?</span
            >
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-2"
          class="hidden"
          aria-labelledby="accordion-open-heading-2"
        >
          <div class="p-5 dark:border-gray-700">
            <p class="text-black">
              Basta clicar no botão "Comprar" em nosso site oficial. Você será
              redirecionado para preencher um formulário simples com suas
              informações pessoais e de pagamento. Após a conclusão do processo
              de inscrição, você receberá um e-mail de confirmação com detalhes
              sobre o acesso ao curso e as próximas etapas.
            </p>
          </div>
        </div>
        <h2 id="accordion-open-heading-3">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black focus:ring-4 focus:ring-gray-200 gap-3"
            data-accordion-target="#accordion-open-body-3"
            aria-expanded="false"
            aria-controls="accordion-open-body-3"
          >
            <span class="flex items-center"
              >Quais são as formas de pagamento aceitas para o curso?</span
            >
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-3"
          class="hidden"
          aria-labelledby="accordion-open-heading-3"
        >
          <div class="p-5 dark:border-gray-700 dark:bg-gray-900">
            <p class="text-black">
              Aceitamos pagamentos por cartão de crédito, boleto bancário e
              transferência bancária. As opções de pagamento serão apresentadas
              durante o processo de inscrição.
            </p>
          </div>
        </div>
        <h2 id="accordion-open-heading-4">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black focus:ring-4 focus:ring-gray-200 gap-3"
            data-accordion-target="#accordion-open-body-4"
            aria-expanded="false"
            aria-controls="accordion-open-body-4"
          >
            <span class="flex items-center"
              >Como posso obter suporte técnico durante o curso?</span
            >
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-4"
          class="hidden"
          aria-labelledby="accordion-open-heading-4"
        >
          <div class="p-5 dark:border-gray-700 dark:bg-gray-900">
            <p class="text-black">
              Estamos disponíveis para fornecer suporte técnico por meio de
              nosso canal de comunicação direta no site do curso. Você também
              pode entrar em contato conosco por e-mail ou mensagem direta no
              Instagram.
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center py-24 lg:px-[29rem] gap-4">
        <p class="text-center text-bold text-5xl font-roc">ALGUMA DÚVIDA ?</p>
        <p class="font-newspirit text-center text-2xl w-4/5 mx-auto">
          Entre em contato com a gente pelo WhatsApp
        </p>
        <a
          href="https://chat.whatsapp.com/BhrowxZ0VlTEyMz2gRrKIt"
          class="text-center px-18 py-3 bg-mainyellow rounded-xl border-2 border-mainyellow hover:bg-black hover:text-white transition duration-200 font-roc text-3xl lg:tracking-wide button lg:w-4/5 lg:self-center"
        >
          TENHO DÚVIDAS
        </a>
      </div>
    </section>
    <footer
      class="bg-black text-mainyellow font-roc text-center lg:text-xl py-10 px-8"
    >
      <p>2024 Escola de Bar - Todos os direitos reservados</p>
    </footer>
  </main>
</template>
<script setup></script>
<style lang=""></style>
