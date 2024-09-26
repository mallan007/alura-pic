<template>
    <div id="login-page"
        class="flex flex-col justify-flex-start items-center border-none md:flex-row md:max-w-1/2 max-h-full mx-0 my-0">

        <div id="login-img"
            class="flex max-h-full w-1/2 bg-green-600 border-none
             col-start-1 col-end-4 row-start-1 row-end-4 md:h-screen md:w-screen md:rounded-none md:rounded-s-lg
             w-full md:max-w-screen rounded-t-lg h-fullborder-none mx-0 my-0"
             >
            <img class="top-148 left-26 w-652 h-625" 
            src="../assets/library-loginpage.png" alt="Biblioteca"
            >
        </div>

        <div id="login-form"
            class="flex flex-col max-h-full w-1/2 bg-white border-none justify-left max-w-sm p-4
             col-start-4 col-end-7 row-start-4 row-end-7  md:h-screen md:w-screen md:rounded-none md:rounded-s-lg
             w-full md:max-w-screen rounded-t-lg h-fullborder-none"
             >
            <div id="login-form-title"
             class="mb-4 text-left text-dark-900 dark:text-white">
                <p class="text-3xl font-medium text-dark-900 dark:text-white">
                    Bem vindo!
                </p>
                <p class="text-base font-small text-dark-900 dark:text-white">
                    Faça login para reservar e emprestar livros de uma forma simples e fácil
                </p>
                <br>
            </div>

            <div id="login-form-fields"
             class="bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 
            dark:bg-gray-800 dark:border-gray-700">
                <form @submit.prevent="onLogin()" class="space-y-6" action="#">

                    <div>
                        <label for="email" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">
                            Usuário
                        </label>
                        <input type="email" name="email" id="email" placeholder="Digite seu e-mail" class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600
                dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required v-model="email" />
                        <div class="error" v-if="errors.email">
                            {{ errors.email }}
                        </div>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">
                            Senha</label>
                        <input type="password" name="password" id="password" placeholder="Digite sua senha"
                            v-model="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 
                dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        <div class="error" v-if="errors.password">
                            {{ errors.password }}
                        </div>
                    </div>
                    <button type="submit" class="w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4
            focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 text-center
            dark:bg-green-600 dark:hover:bg-green-800 dark:focus:ring-green-800">
                        Fazer Login
                    </button>
                    <div class="text-sm font-medium text-decoration-underline text-gray-500 dark:text-gray-300">
                        <a href="#" class="text-dark-700 hover:underline dark:text-dark-500">
                            Não consegue acessar? Fale com um atendente
                        </a>
                        <!--Criar uma rota para o atendente: Botão de atendimento online (ícone e link)-->
                        <br>
                        <br>
                        <a href="#" class="text-dark-700 hover:underline dark:text-dark-500">
                            <router-link to="/signup">
                                Criar nova conta
                            </router-link>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LogIn',
    data() {
        return {
            email: '',
            password: '',
            errors: [],
        }
    },
    methods: {
        onLogin() {
            let validations = new SignUpValidations(this.email, this.password);
            this.errors = validations.checkValidations();
            if (this.errors.length) {
                return false;
            } else {
                this.$router.push({ name: 'signup' });
            }
        }
    }
}
</script>