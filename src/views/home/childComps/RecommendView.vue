<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommed-item">
      <a :href="item.link">
        <img :src="item.image" alt="item.title">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'RecommendView',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
  justify-content: space-around;
}

.recommend .recommend-item{
  flex: 1;
}

.recommed-item img{
  width: 90%;
  height: 90%;
  margin-bottom: 10px;
}
</style>