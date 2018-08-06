<template>
    <div>
        <form @submit.prevent="saveData">
            <div :class="{'is-danger': errors.has('name')}">
                <input name="name" v-validate="'required|min:3|max:10'" type="text" placeholder="Nome" v-model="userData.name">
                <p v-if="errors.has('name')">
                    {{errors.first('name')}}
                </p>
            </div>
            <hr>
            <div :class="errors.has('email') ? 'is-danger' : 'is-success'">
                <input v-validate="'required|email'" name="email" type="email" placeholder="E-mail" v-model="userData.email">
                <p v-if="errors.has('email')">
                    {{errors.first('email')}}
                </p>
            </div>
            
            <hr>
            <input type="number" placeholder="Idade" v-model="userData.age">
            {{ userData.age }}
            <hr>
            <input type="radio" name="sex" value="M" v-model="userData.sex">Masculino | 
            <input type="radio" name="sex" value="F" v-model="userData.sex">Feminino
            <p v-if="userData.sex">Sexo selecionado: {{ userData.sex }}</p>
            <hr>
            <select v-model="userData.state">
                <option value="">Selecione o Estado</option>
                <option value="SP">São Paulo</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="MG">Minas Gerais</option>
            </select>
            <div v-if="userData.state">{{ userData.state }}</div>
            <hr>
            <label for="agree">Concordo com os termos de uso</label>
            <input type="checkbox" id="agree" v-model="terms">
            <hr>
            <textarea cols="30" rows="10" v-model="description"></textarea>
            <!-- respeitar espaços/ quebra de linha etc... -->            
            <!-- <div style="white-space:pre;">
                {{description}}
            </div> -->
            <!-- <div style="white-space:pre;" v-text="description" v-html="description">
                {{description}}
            </div> -->

            <div>
                <pre v-html="description">

                </pre>
            </div>

            <hr>
            <button type="submit">Enviar Agora</button>
        </form>

        <div v-show="isSubmited">
            {{userData}}
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userData:{
                name: '',
                email: '',
                age: '',
                sex: 'M',
                state: 'MG'
            },
            terms: false,
            description: '',
            isSubmited: false
        }
    },
    methods: {
        saveData() {           
            this.$validator.validateAll().then((result) => {
                if (result) {
                    this.isSubmited =true;
                   
                    return;
                }
                //alert('Correct them errors!');
            });    
        }

    }
}
</script>


<style scoped>

.is-danger{border: 1px solid rgb(179,11,11);}
.is-danger p{color: rgb(179,11,11);}


.is-success input{border: 1px solid rgb(0, 241, 0);}

</style>
