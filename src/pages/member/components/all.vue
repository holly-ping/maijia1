<template>
  <div class="container " style="min-height: 597px;">
    <div class="block-list address-list section section-first js-no-webview-block" v-if='lists&&lists.length'  >
      <a class="block-item js-address-item address-item " 
      v-for='list in lists' 
      :key='list.id'
      :class="{'address-item-default':list.isDefault}"  
      @click='toEdit(list)'>
        <div class="address-title">{{list.name}}</div>
        <div class="address-tel">{{list.tel}}</div>
        <p>{{list.provinceName}}&nbsp;{{list.cityName}}市&nbsp;{{list.districtName}}&nbsp;{{list.address}}</p>
        <a class='address-edit'>修改</a>
      </a>
    </div>
    <div v-if='lists&&!lists.length'>请添加新地址</div>
    <div class="block stick-bottom-row center">
      <router-link class="btn btn-blue js-no-webview-block js-add-address-btn" :to='{name:"form",query:{type:"add"}}'>
        新增地址
      </router-link>
    </div>
  </div>
</template>
<style>

</style>
<script>
// import Address from 'js/addressService.js';
export default {
  // data(){
  //   return {
  //     lists:null,
  //   }
  // },
  computed:{
    lists(){
      return this.$store.state.lists
    }
  },
  created(){
    // Address.list().then(res=>{
    //   this.lists=res.data.lists
    // })
    if(!this.lists){
      this.$store.dispatch('getLists')
    }
    
  },
  methods:{
    toEdit(list){
      this.$router.push({
        name:'form',
        query:{
          type:'edit',
          instance:list,
        }
      })
    }
  }
}
</script>


