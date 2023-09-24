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
  {name:'Yonma',  price:219, img:"https://scontent.fbkk4-4.fna.fbcdn.net/v/t39.30808-1/300499986_464925402210287_4974814192228614755_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=754033&_nc_eui2=AeFwOhhorsKRdWyUI_kcSPCP1U8fL0lMUVnVTx8vSUxRWWpFD2E0t23ss2ddJ1j8fL9s2SotBhF7ffbU7jprAD0h&_nc_ohc=NQFghNqDedQAX9_OXtz&_nc_ht=scontent.fbkk4-4.fna&oh=00_AfAN6c071Fol30XgU5up4tF-Ydl7-PLl02rAp2iRPAyV-g&oe=6515B932", quantity: 0 ,
    text_box:'  ร้านกาแฟที่มาแรงที่สุดในช่วนี้ไม่ว่าจะแพลตฟอร์มไหนก็แซงหน้าทุกร้านที่ผ่านมา นั้นคือ i-love -coffe นั้นเอง ไม่ว่าจะเป็นเพราะการบริการหรือว่าคุณภาพในการชงกาแฟ และแน่นอนที่ขาดไปไม่ได้คือการตกแต่งร้านที่ทันสมัยและคุมโทนอบอุ่น ละมุนตาโดยออกแบบดพื่อคำนึงถึงความสบายใจและสบายตาของลูกค้าที่ไม่ว่าจะมาพักผ่อนหย่อนใจโดยการนั้งจิบกาแฟ หรือมาทำงาน '
    }])
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
  background-image: linear-gradient( 135deg, #FFA6B7 10%, #1E2AD2 100%); /* เพิ่ม margin:auto เพื่อจัดให้กล้องอยู่ตรงกลางแนวนอน */
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
