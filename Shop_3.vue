<template>
  <div class="container_text-center" >
    <div class="row">
      <div class="col" v-for=" (i,index) in travelList" :key="index" >
        <div class="card">
          <img :src="i.img" class="card-img-top" >
          <div class="card-body">
            <h5 class="card-title" style="color: aliceblue;">{{ i.name }}</h5>
            <p class="card-price" style="color: aliceblue;">ราคาโต๊ะล่ะ {{ i.price }} บาท</p>
            <p class="namecostomer" style="color: aliceblue;" >ชื่อผู้จอง <br>
              <input type="text" v-model="costomer[index]">
            </p>
            <p class="card-text" style="color: aliceblue;">จำนวนโต๊ะ <br>
              <input type="number" class="input_value" v-model="teble[index]">
            </p>  
            <p class="card-text" style="color: aliceblue;">เวลา<br>
              <input type="time" class="input_value" v-model="time[index]">
            </p> 
            <p class="card-text" style="color: aliceblue;">วันที่<br>
              <input type="date" class="input_value" v-model="date[index]">
            </p> 
            <p class="card-text" style="color: aliceblue;">เบอร์โทร <br>
              <input type="number" class="input_value" v-model="telphon[index]">
            </p> 
            <div class="buttom">
              <a class="btn-primary" @click="booking_control(i.name,i.price,teble[index],telphon[index],costomer[index],time[index],date[index])">จองเลย</a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr>
  <table class="table table-dark teble-striped" v-if="bookinglist.length > 0">
  <thead>
    <tr>
      <th scope="col" >ลำดับ</th>
      <th scope="col">รายชื่อร้านที่จอง</th>
      <th scope="col">ราคา</th>
      <th scope="col">ชื่อผู้จอง</th>
      <th scope="col">จำนวนโต๊ะ</th>
      <th scope="col">เวลา</th>
      <th scope="col">วันที่</th>
      <th scope="col">เบอร์โทร</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="(i,index) in bookinglist" :key="index">
      <th scope="row">{{ index+1 }}</th>
      <td>{{ i.name }}</td>
      <td>{{ i.price }}</td>
      <td>{{ costomer[index] }}</td>
      <td>{{ teble[index] }} </td>
      <td>{{ time[index] }}</td>
      <td>{{ date[index] }}</td>
      <td>{{ telphon[index] }}</td>
    </tr>
  </tbody>
</table>

</template>

<script setup>

import { ref } from 'vue';

const travelList=ref([
  {name:'PIZZA PHU PING ',      price:149, img:"https://scontent.fbkk3-3.fna.fbcdn.net/v/t39.30808-1/279237363_384930236981634_4493984021961394939_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=754033&_nc_eui2=AeGionZ0HbBxPlleYosduaMHz7TXIPFEZv_PtNcg8URm__GxmzGYNsF7_AnAwWjYcCu7_s7r6c7qY5mVCiqSAM-9&_nc_ohc=6QC5UoOXl4wAX87suRt&_nc_ht=scontent.fbkk3-3.fna&oh=00_AfDLichat1DqXi0NiezhyX6q-QHi-jtTOukNK2CrKe59ww&oe=6515D103", quantity: 0 ,
    text_box:'  ร้านพิซซ่าที่พร้อมให้ความอิ่มอร่อยกับคุณไม่อั้น ไม่ว่าจะที่ไหนเพราะเรามีบริการส่งถึงบ้าน หรือคุณจะมานั้งทานที่ร้านก็ได้ร้านก็มีพื้นที่เพียงพอที่จะต้อนรับลูกค้าคนพิเศษแบบคุณ '
    },])
    const bookinglist=ref([
  
  ]);
//จำนวนโต๊ะ
const teble=ref([]);
  const telphon=ref([]);
  const costomer=ref([]);
  const time=ref([]);
  const date=ref([]);
  //function
  function booking_control(name,price , tableQuantity){
  //name--> +.bookinglist[]
    const totalPrice = price * tableQuantity;
    const box = {
      name: name,
      price: totalPrice,
      tableQuantity: tableQuantity,
      
    };
    bookinglist.value.push(box);
  
  }
  

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Lora:ital,wght@1,500&family=Noto+Serif+Display:wght@200&family=Noto+Serif:ital,wght@0,300;1,400&family=Playfair+Display:ital,wght@1,500&display=swap');

*{
  padding: 10px;
  font-family: 'Dancing Script', cursive;
  
}

.card-img-top{
  height: 15rem;
  width: 10rem;
  cursor: pointer;
  
}

.input_value{
  width: 13rem;
  
}

.card{
  box-shadow: 0 30px 50px rgba(0,0,0,.5);
  border-radius: 25px;
  height: 50rem;
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-image: linear-gradient( 135deg, #97ABFF 10%, #123597 100%);/* เพิ่ม margin:auto เพื่อจัดให้กล้องอยู่ตรงกลางแนวนอน */
}
.buttom{
  width: 100px;
}
.btn-primary {
  width: 100%; /* ปรับความกว้างให้เต็มกล่อง */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  color: black;
  padding: 5px;
  text-align: center;
}


</style>
