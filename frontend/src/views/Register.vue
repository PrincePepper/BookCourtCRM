
<template>
  <div class="container">    
    <form id="contact" action="" method="post" @submit.prevent="submitHandler">
      <h3 class="name">BookCourt</h3>      
      <h4></h4>
      <fieldset>        
        <input placeholder="Название компании" type="text" tabindex="1" required autofocus>
      </fieldset>      
      <fieldset>
        <input placeholder="Электроная почта" type="email" tabindex="2" required>      </fieldset>
      <fieldset>        
        <input placeholder="Телефон" type="tel" tabindex="3" required>
      </fieldset>      
      <fieldset>
        <input placeholder="Сайт http://" type="url" tabindex="4" required>      
      </fieldset>
      <fieldset>        
        <textarea placeholder="Информация о компании" type="text" tabindex="5" required></textarea>
      </fieldset>      
      <fieldset>
        <textarea placeholder="Представители компании(ФИО-должность)" type="pred" tabindex="6" required></textarea>      </fieldset>
      <fieldset>        
        <textarea placeholder="Адрес компании" type="address" tabindex="7" required></textarea>
      </fieldset>     
      <fieldset>
        <textarea placeholder="Пароль" type="password" tabindex="8" required></textarea>      
      </fieldset>
      <fieldset>        
        <input ref="file" v-on:change="handleFileUpload()"  type="file">
      </fieldset>      
      <fieldset>
        <button name="submit" type="submit" id="contact-submit">Зарегистрироваться</button>
      </fieldset>
    </form>
  </div>
</template>

<script >
import {ref} from "vue" 
  
export default {  
    name: 'RegisterMain',
    methods: {
      submitHandler() {
        this.$router.push('/login')
      }
    },
    setup() {    
        const file = ref(null)
        const handleFileUpload = async() => {
            console.log("selected file",file.value.files)
        }    
        return {
            handleFileUpload,
            file
        }}
}

</script>

<style>
.name{
  font-family: 'Playfair Display';
  font-size: 32px;
  text-align: center;
  color: #3B3034;
}
*, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;    
    box-sizing: border-box;
}
body {
    font-family: 'Nunito', sans-serif;    
    color: rgba(254, 214, 152, 0.47);
}
form {    
    max-width: 300px;
    margin: 10px auto;    
    padding: 10px 10px;
    background: #f4f7f8;    
    border-radius: 8px;
}
h1 {    
    margin: 0 0 30px 0;
    text-align: center;
}
input[type="text"],
input[type="password"],input[type="email"],
input[type="pred"],input[type="email"],
input[type="adress"],input[type="info"],
input[type="tel"],input[type="url"],
input[type="file"],textarea,
select {
    background: rgba(254, 214, 152, 0.47);
    border: none;    
    font-size: 16px;
    height: auto;
    margin: 0;    
    outline: 0;
    padding: 15px;   
    width: 100%;
    background-color: #e8eeef;    
    color: rgba(68, 67, 67, 0.47);;
    box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;    
    margin-bottom: 10px;
}
select {
    padding: 6px;    
    height: 32px;
    border-radius: 2px;}

button {    
    padding: 19px 39px 18px 39px;
    color: #FFF;    
    background: #B7647C;
    font-size: 18px;    
    text-align: center;
    font-style: normal;    
    border-radius: 5px;
    width: 100%;    
    border-width: 1px 1px 3px;
    box-shadow: 0 -1px 0 rgba(255,255,255,0.1) inset;    
    margin-bottom: 10px;
}
fieldset {    
    margin-bottom: 10px;
    border: none;
}
legend {
    font-size: 1.4em;    
    margin-bottom: 10px;
}
label {    
    display: block;
    margin-bottom: 8px;
}
label.light {
    font-weight: 300;    
    display: inline;
}
@media screen and (min-width: 480px) {
    form {
        max-width: 480px;    
    }
}
</style>