<template>
    <div id="signup-title" class="mr-10 ml-10 mb-6 flex flex-row-2 space-x-2 w-auto justify-between">
        <div class="w-219 h-39 top-10 left-458 text-xl justify-start font-bold font-medium text-gray-900 dark:text-white">
            Editar Usuário
        </div>
        <div id="btn-back" class="w-35 h-19 top-114 left-1297 justify-end">
            <button>
                <router-link to="/home"
                    class="w-35 h-19 text-sm font-medium text-green-500 hover:underline dark:text-green-400">
                    Voltar
                    <!--Add Arrow-Right-Icon-->
                </router-link>
            </button>
        </div>
    </div>
    <div id="signup-form"
        class="w-[429] h-[335] space-y-4 p-6 mr-10 ml-10 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
        <form class="grid grid-cols-3 grid-rows-2 ">
            <div id="user-name" class="relative z-0 w-[279] h-[70] justify-start group">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">
                    Nome:
                </label>
                <input type="name" name="name" id="name" v-model="name"
                    placeholder="Digite o nome" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-6  
                    focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600
                    dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required  />
                <div class="error" v-if="errors.fullName">
                    {{ errors.fullName }}
                </div>
            </div>
            <div id="user-email" class="relative z-0 w-[279] h-[70] justify-between group">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    E-mail:
                </label>
                <input type="email" name="email" id="email" v-model="email"
                    placeholder="Digite o e-mail" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                    focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600
                    dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                <div class="error" v-if="errors.email">
                    {{ errors.email }}
                </div>
            </div>
            <div id="user-phone-number" class="relative z-0 w-[279] h-[70] justify-end group">
                <label for="tel" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Telefone:
                </label>
                <input type="tel" name="phone-number" id="phone-number" v-model="tel"
                placeholder="(xx) 9xxxx-xxxx" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                    focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600
                    dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required  />
                <div class="error" v-if="errors.phoneNumber">
                    {{ errors.phoneNumber }}
                </div>
            </div>
            <div id="user-role" class="relative z-0 w-[279] h-[70] justify-start group">
                <label for="role" class="block mb-4 w-[279] text-sm font-medium text-gray-900 dark:text-white">
                    Função:
                    <select id="role" v-model="role" 
                        class="my-2 block w-1/2 space-x py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500
                            focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                            dark:focus:ring-green-500 dark:focus:border-green-500">
                        <option value="administrator">Administrador</option>
                        <option value="student">Estudante</option>
                    </select>
                </label>
                <div class="error" v-if="errors.role">
                    {{ errors.role }}
                </div>
            </div>
            <div id="user-password" class="relative z-0 w-[279] h-[70] justify-sbetween group">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Senha:
                </label>
                <input type="password" v-model="password" 
                    name="password" id="password" placeholder="Digite a senha" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 
                    dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <div id="confirm-password" class="relative z-0 w-[279] h-[70] justify-end group">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Confirmar Senha:
                </label>
                <input type="password" name="confirm-password" id="confirm-password" placeholder="Digite a senha"
                    v-model="confirmPassword" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 
                    dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <!--Implementar validação de senhas iguais-->
        </form>        
    </div>
    
    <div id="buttons-edit" class="flex items-center justify-end w-[279] h-[70] space-x-2 w-auto mr-10 my-6">
        <button id="btn-cancel" class="w-188 h-49 text-red-500 bg-white hover:bg-red-800 focus:ring-4 focus:outline-none
        focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border-1 border-red-500 shadow-lg shadow-red-500/50
        dark:bg-white-600 dark:hover:bg-red-700 dark:focus:ring-red-800 dark:text-red-600">
        <router-link to="/login">
            Cancelar
        </router-link>
    </button>
    <button @submit="onEdit()" action="#" id="btn-edit" type="submit"
     class="w-188 h-49 text-white bg-green-600 hover:bg-blue-800 focus:ring-4 focus:outline-none
        focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
        dark:bg-emerald-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Salvar
    </button>
    </div>

</template>

<script>
import router from '@/router';

export default {
    name: 'Edit',
    data() {
        return {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            errors: [],
        }
    },
    methods: {
        onEditUser() {
            /* 
                1. Check Role: 
                1.1. If Administrator: can edit all users (HardCoded then Axios);
                1.2. If Student: can edit only itself (HardCoded then Axios);
                2. If validations are valid (No Errors), use Axios to send data to backend (Swagger);
                3. If success: redirect to login;
                4. If error: catch and throw in errors array and display it on screen;
                5. Check AuthGuard;
                6. Get Token;
             */
            let validations = new Validations(this.id);
            this.errors = validations.checkValidations();
            if (this.errors.length) {
                return false;
            } else {
                this.$router.push({ name: 'home' });
            }
            /*
                data: keys: { id: id, role: role }
                load -> "user.info" menos as senhas (confirmar ao pressionar o botão ou não chamar essa parte de editar senhas)
                Function EditUser -> get user.id and permissions to edit with axios PUT method
            */
        }
    }
}
</script>