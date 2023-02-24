<template>
<div id="card">
  <img src="https://sun6-20.userapi.com/s/v1/if1/3r1rpRnfaJFqZGhN48JFi9r7ml6eRds2U4sfftdNt4book1LjMvLn4sWl1K-E5GzLAmVrfkr.jpg?size=882x882&quality=96&crop=31,31,882,882&ava=1"/>
  <h2>Название компании</h2>
  <p class="id-company">id компании: </p>
  <p class="main-info">Тип компании: </p>
  <p class="main-info">Телефон: </p>
  <p class="main-info">Сайт компании: </p>
  <p class="main-info">Электронная почта: </p>
  <p class="description">Описание компании</p>
  <p class="description-info">Описание компании</p>
  <p class="delegate">Представители компании</p>
  <p class="delegate-info">ФИО - должность</p>
  <p class="delegate-info">ФИО - должность</p>
  <p class="delegate-info">ФИО - должность</p>
  <p class="address">Адрес компании</p>
  <p class="address-info">Адрес: </p>
  <p class="count-books">Количество загруженных книг -</p>
</div>
</template>

<script>
export default {
 name: 'ProfileMain',
}
</script>

<style lang="scss">

body {
  margin: 0 auto;
  padding: 0;
  background: #f9e7c9;
}

.left {
  left: 25px;
}

.right {
  right: 25px;
}

.center {
  text-align: center;
}

.bottom {
  position: absolute;
  bottom: 25px;
}

#gradient {
  background: #999955;
  background-image: linear-gradient(#DAB046 20%, #D73B25 20%, #D73B25 40%, #C71B25 40%, #C71B25 60%, #961A39 60%, #961A39 80%, #601035 80%);
  margin: 0 auto;
  margin-top: 100px;
  width: 100%;
  height: 150px;
}

#gradient:after {
  content: "";
  position: absolute;
  background: #E9E2D0;
  left: 50%;
  margin-top: -67.5px;
  margin-left: -270px;
  padding-left: 20px;
  border-radius: 5px;
  width: 520px;
  height: 275px;
  z-index: -1;
}

#card {
  position: absolute;
  width: 900px;
  height: 1200px;
  padding: 25px;
  padding-top: 0;
  padding-bottom: 0;
  left: 36%;
  right: 36%;
  margin-left: -250px;
  background: #E9E2D0;
  box-shadow: -20px 0 35px -25px black, 20px 0 35px -25px black;
  z-index: 5;
}

#card img {
  width: 300px;
  height: 300px;
  float: left;
  margin-right: 20px;
  margin-left: 5%;
  margin-top: 11%;
}

#card h2 {
  font-family: Playfair Display;
  color: black;
  padding: 0;
  font-weight: bold;
  margin-left: 50%;
  margin-top: 100px;
  font-size: 32px;
}

.id-company {
  font-family: Playfair Display;
  color: grey;
  font-size: 20px;
  padding: 0;
  margin-left: 50%;
}
.main-info{
  font-family: Playfair Display;
  color: black;
  font-size: 32px;
  padding: 0;
  margin-left: 50%;
}
.description {
  font-family: Playfair Display;
  color: black;
  font-size: 32px;
  padding: 0;
  margin-top: 10%;
  margin-left: 5%;
}
.description-info {
  font-family: Playfair Display;
  color: grey;
  font-size: 20px;
  padding: 0;
  margin-left: 5%;
}
.delegate {
  font-family: Playfair Display;
  color: black;
  font-size: 32px;
  padding: 0;
  margin-top: 35%;
  margin-left: 5%;
}
.delegate-info {
  font-family: Playfair Display;
  color: black;
  font-size: 20px;
  padding: 0;
  margin-left: 10%;
}
.address {
  font-family: Playfair Display;
  color: black;
  font-size: 32px;
  padding: 0;
  margin-top: 2%;
  margin-left: 5%;
}
.address-info {
  font-family: Playfair Display;
  color: black;
  font-size: 20px;
  padding: 0;
  margin-left: 10%;
}
.count-books {
  font-family: Playfair Display;
  color: black;
  font-size: 32px;
  padding: 0;
  margin-top: 2%;
  margin-left: 5%;
  font-weight: bold;
}
#card span {
  font-family: Playfair Display;
}

</style>