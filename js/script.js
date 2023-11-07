const {createApp} = Vue;

createApp({
    data(){
        return {
            emails: [],
            result: ''
        }
    },
    methods: {
        getEmails(){
            for (let i = 0; i <= 9; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp)=>{
                    this.result = resp.data.response;
                    this.emails.push(this.result)
                    console.log(this.emails);    
                })
                console.log(this.result);
                }
            }
    },
    mounted(){
          
    },
    created(){
        this.getEmails()
    }
}).mount('#app')