<template>
<div class="row mb-2">
        <div class="col-md-6" v-for="(n,i) in travelList" :key="n">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <h3 class="mb-0">{{n.name}}</h3>
              <strong><div class="mb-1 text-body-secondary">ค่าเข้า {{n.price}} บาท</div></strong>
              <p class="card-text mb-auto">{{n.text_box}}</p>
              
              <div style="margin-bottom: 30px;">
                <RouterLink :to="{name: `shop_${i+1}`}" class="icon-link gap-1 icon-link-hover stretched-link">
                  กดดูรายละเอียดเพิ่มเติม
                  <svg class="bi"> <use xlink:href="#chevron-right"/></svg>
                </RouterLink>
            </div>     
            </div>
            <div class="col-auto d-none d-lg-block">
              <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false" 
              style="margin: 15px;" >
                <image :xlink:href="n.img" x="0" y="10" width="200" height="200" />
              </svg>
            </div>
          </div>
        </div>

      
    </div>

</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';



//variable drinking
const travelList=ref([
   {name: 'WTF Coffee Camp',  price:199, img:"https://scontent.fbkk4-2.fna.fbcdn.net/v/t39.30808-6/322884365_634904391740693_4185424965890588074_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeFiZ4FtppUReF4nkdvzXgXJf5kvqfdMROF_mS-p90xE4UB-yzb0CSs6cc8LKKyfES92rauiaIJzr5-yGUe_EATo&_nc_ohc=EeRRAd16yZIAX-PWevL&_nc_zt=23&_nc_ht=scontent.fbkk4-2.fna&oh=00_AfAjOT3NsPR4TIBabOC_yVNOuDFAC0-CaPxUTCsJMBfGEQ&oe=65147A9A", quantity: 0 ,
    text_box:' ร้านคาเฟ่ที่มาแรงที่สุดในช่วนี้ไม่ว่าจะแพลตฟอร์มไหนก็แซงหน้าทุกร้านที่ผ่านมา ไม่ว่าจะเป็นเพราะการบริการหรือว่าคุณภาพในการชงกาแฟ และแน่นอนที่ขาดไปไม่ได้คือการตกแต่งร้านที่ทันสมัยและคุมโทนอบอุ่น ละมุนตาโดยออกแบบดพื่อคำนึงถึงความสบายใจและสบายตาของลูกค้าที่ไม่ว่าจะมาพักผ่อนหย่อนใจโดยการนั้งจิบกาแฟ หรือมาทำงาน  ก็พร้อมต้อนรับและบริการด้วยหัวใจ'
    }, 

  {name:'Yonma',  price:219, img:"https://scontent.fbkk4-4.fna.fbcdn.net/v/t39.30808-1/300499986_464925402210287_4974814192228614755_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=754033&_nc_eui2=AeFwOhhorsKRdWyUI_kcSPCP1U8fL0lMUVnVTx8vSUxRWWpFD2E0t23ss2ddJ1j8fL9s2SotBhF7ffbU7jprAD0h&_nc_ohc=NQFghNqDedQAX9_OXtz&_nc_ht=scontent.fbkk4-4.fna&oh=00_AfAN6c071Fol30XgU5up4tF-Ydl7-PLl02rAp2iRPAyV-g&oe=6515B932", quantity: 0 ,
    text_box:'  ร้านกาแฟที่มาแรงที่สุดในช่วนี้ไม่ว่าจะแพลตฟอร์มไหนก็แซงหน้าทุกร้านที่ผ่านมา นั้นคือ i-love -coffe นั้นเอง ไม่ว่าจะเป็นเพราะการบริการหรือว่าคุณภาพในการชงกาแฟ และแน่นอนที่ขาดไปไม่ได้คือการตกแต่งร้านที่ทันสมัยและคุมโทนอบอุ่น ละมุนตาโดยออกแบบดพื่อคำนึงถึงความสบายใจและสบายตาของลูกค้าที่ไม่ว่าจะมาพักผ่อนหย่อนใจโดยการนั้งจิบกาแฟ หรือมาทำงาน '
    },
  
  {name:'PIZZA PHU PING ',      price:149, img:"https://scontent.fbkk3-3.fna.fbcdn.net/v/t39.30808-1/279237363_384930236981634_4493984021961394939_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=754033&_nc_eui2=AeGionZ0HbBxPlleYosduaMHz7TXIPFEZv_PtNcg8URm__GxmzGYNsF7_AnAwWjYcCu7_s7r6c7qY5mVCiqSAM-9&_nc_ohc=6QC5UoOXl4wAX87suRt&_nc_ht=scontent.fbkk3-3.fna&oh=00_AfDLichat1DqXi0NiezhyX6q-QHi-jtTOukNK2CrKe59ww&oe=6515D103", quantity: 0 ,
    text_box:'  ร้านพิซซ่าที่พร้อมให้ความอิ่มอร่อยกับคุณไม่อั้น ไม่ว่าจะที่ไหนเพราะเรามีบริการส่งถึงบ้าน หรือคุณจะมานั้งทานที่ร้านก็ได้ร้านก็มีพื้นที่เพียงพอที่จะต้อนรับลูกค้าคนพิเศษแบบคุณ '
    },

  {name:'Cat Brothers Cafe',     price:169, img:"https://scontent.fbkk3-2.fna.fbcdn.net/v/t39.30808-6/208650936_1893154220864701_2114485125737848224_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeFITXNBfXrMxj2j0bpQON1UO0Z8nVHpTYw7RnydUelNjHgfdQmrIAIbwzX1xh1k5SgO8pYZp2zWtk7iRgmVZ66c&_nc_ohc=KBkMaufmLikAX9hsSxB&_nc_zt=23&_nc_ht=scontent.fbkk3-2.fna&oh=00_AfC-iSKlTdx3qvyRr3k_pXNiNmkZminjdFHp_vH0wgI39A&oe=6514EB12", quantity: 0 ,
    text_box:' คาเฟ่แมวที่พร้อมฮีลใจของคุณไม่ว่าจะผ่านอะไรมา ก็จะมีน้องแมวเหมียวมากหน้าหลายตามารอพร้อมบริการคุณอย่างเต็มความสามารถเพียงให้ขนมและอาหารที่เจ้านายชอบ!!'
    },

    {name:'Box Box Dog Cafe ',     price:299, img:"https://scontent.fbkk3-3.fna.fbcdn.net/v/t39.30808-6/326455096_503747178550404_6148717715410575457_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeFUY4RKPwA947rwJwBEF92kYzQdwwD2v4JjNB3DAPa_gms09JN5e2X_yOI3duG7twTwPIsM0ZNIhsS_vqdVIcli&_nc_ohc=hbuPUb55KUkAX_iS2Qf&_nc_zt=23&_nc_ht=scontent.fbkk3-3.fna&oh=00_AfA54glGiurX303uIsko2ZK3VE35bYBbTzWRCDbV3HPfHQ&oe=6513EAA8", quantity: 0 ,
    text_box:' คาเฟ่น้องมะหมาสุดน่ารักไม่ว่าจะสายพันธุ์เล็ก-ใหญ่ที่พร้อมคลอเคียเพื่อลดและขจัดความเหนื่อยล้าจากการทำงานที่มีระบบทุนนิยมเป็นตัวชี้วัดในความสำเร็จ มาหาเราสิ เรามีน้องหมาที่น่ารักพร้อมให้บริการคุณไม่ว่าจะเป็นน้องหมาสายพันธุ์ไหน!!'
    },
])

</script>