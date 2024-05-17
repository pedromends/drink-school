<template lang="">
  <div class="pt-5 flex flex-col gap-4">
    <div class="flex flex-col">
      <p class="text-2xl text-maingreen">Configurações</p>
      <p class="text-white text-sm">Confira e atualize aqui os seus dados</p>
    </div>
    <div>
      <div class="mb-4 border-b border-maingreen dark:border-gray-700">
        <ul
          class="flex flex-wrap -mb-px text-sm font-medium text-center transition duration-300"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          <li class="me-2" role="presentation">
            <button
              class="text-maingreen inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Meu Perfil
            </button>
          </li>
          <li class="me-2" role="presentation">
            <button
              class="text-maingreen inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              id="courses-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              Meus Cursos
            </button>
          </li>
          <li class="me-2" role="presentation">
            <button
              class="text-maingreen inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              id="password-tab"
              data-tabs-target="#settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              Alterar Senha
            </button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content">
        <div
          class="hidden p-2"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div class="flex justify-center items-center">
            <div class="flex justify-center gap-24 w-full">
              <div class="flex flex-col gap-3">
                <img
                  class="rounded-md w-64 h-64 mx-auto border-2 border-maingreen"
                  src="@/assets/joaopedro.png"
                  alt=""
                />
                <button
                  class="rounded-lg bg-maingreen border border-white text-mainblue p-1 w-1/2 text-sm self-center"
                >
                  Alterar Imagem
                </button>
              </div>
              <ul
                class="flex flex-col gap-3 bg-maingreen text-mainblue p-5 rounded-md"
              >
                <li class="mr-52 py-1">
                  Nome Completo:
                  <span class="">João Pedro Mendonça de Souza</span>
                </li>
                <hr />
                <li class="mr-52 py-1">
                  E-mail Principal:
                  <span class="">joaopedromend14@gmail.com</span>
                </li>
                <hr />
                <li class="mr-52 py-1">
                  Data de Nascimento: <span class="">20/09/1999</span>
                </li>
                <hr />
                <li class="mr-52 py-1">
                  Gênero: <span class="">Masculino</span>
                </li>
                <hr />
                <li class="mr-52 py-1">
                  Telefone: <span class=""> +55 (37) 99927-2008</span>
                </li>
                <hr />
                <li class="mr-52 py-1">
                  CPF: <span class="">397.461.138.01</span>
                </li>
                <hr />
                <button
                  class="rounded-lg bg-mainblue border border-white text-maingreen p-1 w-1/6 text-sm"
                >
                  Salvar
                </button>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="hidden p-3"
          id="dashboard"
          role="tabpanel"
          aria-labelledby="courses-tab"
        >
          <div class="">
            <div class="flex flex-col justify-center gap-4">
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Esta é a relação de planos e compras realizadas em sua conta,
                  caso possua alguma dúvida, você pode entrar em contato através
                  do suporte ao aluno!
                </p>
              </div>
              <div class="self-center bg-maingreen rounded-lg">
                <table class="rounded-lg">
                  <thead class="px-4 text-mainblue">
                    <th class="text-start px-8 py-3">Curso</th>
                    <th class="text-start px-8 py-3">Acesso</th>
                    <th class="text-start px-8 py-3">Data de compra</th>
                    <th class="text-start px-8 py-3">Expira em</th>
                    <th class="text-start px-8 py-3">Observações</th>
                  </thead>
                  <tbody>
                    <tr class="text-sm">
                      <td class="text-start px-8 py-3">Curso de Cuba Libre</td>
                      <td class="text-start px-8 py-3">Liberado</td>
                      <td class="text-start px-8 py-3">
                        1° de Janeiro de 1959
                      </td>
                      <td class="text-start px-8 py-3">Jamás</td>
                      <td class="text-start px-8 py-3">Fuck los Yankees</td>
                    </tr>
                    <tr class="text-sm">
                      <td class="text-start px-8 py-3">Curso de Caipirinha</td>
                      <td class="text-start px-8 py-3">Liberado</td>
                      <td class="text-start px-8 py-3">1° de Abril de 1500</td>
                      <td class="text-start px-8 py-3">01/04/2025</td>
                      <td class="text-start px-8 py-3">
                        Liberado a partir da transação 666
                      </td>
                    </tr>
                    <tr class="text-sm">
                      <td class="text-start px-8 py-3">
                        Curso de Black Tooth Grin
                      </td>
                      <td class="text-start px-8 py-3">Liberado</td>
                      <td class="text-start px-8 py-3">
                        20° de Setembro de 1999
                      </td>
                      <td class="text-start px-8 py-3">Jamás</td>
                      <td class="text-start px-8 py-3">Fuck los Yankees</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div
          class="hidden p-3"
          id="settings"
          role="tabpanel"
          aria-labelledby="password-tab"
        >
          <div class="">
            <ul
              class="flex flex-col gap-3 bg-maingreen text-mainblue p-5 rounded-md"
            >
              <li class="mr-52 py-1 text-sm">
                Senha atual:
                <input
                  class="rounded-md pl-4 bg-maingreen border border-maingreen focus:border-mainblue"
                  placeholder="Teste"
                />
              </li>
              <hr />
              <li class="mr-52 py-1 text-sm">
                Nova Senha:
                <input
                  class="rounded-md pl-4 bg-maingreen border border-maingreen focus:border-mainblue"
                  placeholder="Teste"
                />
              </li>
              <hr />
              <li class="mr-52 py-1 text-sm">
                Confirme sua senha:
                <input
                  class="rounded-md pl-4 bg-maingreen border border-maingreen focus:border-mainblue"
                  placeholder="Teste"
                />
              </li>
              <hr />
              <button
                class="rounded-lg bg-mainblue border border-white text-maingreen p-1 w-1/6 text-sm"
              >
                Salvar
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    beforeMount() {
      console.log("teste");
      window.location.reload();
    },
  },
};
</script>
<style lang=""></style>
