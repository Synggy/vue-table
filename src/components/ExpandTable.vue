<template>
  <div class="expand-container">
    <div class="table-header">
      <div style="background-color:transparent;padding:7px 13px" v-if="expandKey"></div>
      <div class="table-item" v-for="item in columns" :key="item.key">{{item.title}}</div>
    </div>
    <div class="table-body">
      <div class="progress">
        <ScaleLoader class="progress-spinner" :loading="loading" :color="loadingColor"></ScaleLoader>
      </div>
      <NoData :message="message" v-if="!data.length"></NoData>
      <FitScroll>
        <div v-for="(da,index) in data" :key="da.text" class="body-item">
          <div class="body-item-top">
            <div v-if="expandKey" style="padding:5px 10px;cursor: pointer;" @click="showOrHide(da[[expandKey]])">
              <span v-if="currentKeys.findIndex(x=>x===da[expandKey])!=-1"><Icon type="ios-arrow-down"></Icon></span>
              <span v-else><Icon type="ios-arrow-forward"></Icon></span>
            </div>
            <div v-for="item in columns" :key="item.key" class="item">
              <slot :name="item.slot" :data="{...da,index}">{{da[item.key]}}</slot>
            </div>
          </div>
          <div v-if="currentKeys.findIndex(x=>x===da[expandKey])!=-1" style="display: flex;min-height: 30px;">
            <div style="width:100%;">
              <slot name="expendedContent" :data="{...da,index}"></slot>
            </div>
          </div>
        </div>
      </FitScroll>
    </div>
  </div>
</template>

<script>
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
import NoData from './NoData'

export default {
  name: "ExpandTable",
  components: {
    ScaleLoader,
    NoData
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingColor: {
      type: String,
      default: '#45d1ea'
    },
    message: {
      type: String,
      default: '查询不到数据'
    },
    expandKey:{
      type: String,
      default: ''
    }
  },
  computed: {
  },
  data: () => ({
    currentKeys:[]
  }),
  methods: {
    showOrHide:function(key){
      let index=this.currentKeys.findIndex(x=>x==key);
      if(index===-1){this.currentKeys.push(key)}
      else{
        this.currentKeys.splice(index,1);
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.expand-container {
  height: 100%;
  .table-header {
    height: 35px;
    display: flex;
    background-color: rgba(60, 97, 128, 0.3);
    .table-item {
        width: 100%;
        text-align: center;
        line-height: 35px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
  }
  .table-body {
    height: 90%;
    position: relative;
    .body-item-top {
      display: flex;
      height: 30px;
      .item {
        width: 100%;
        text-align: center;
        line-height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .body-item:nth-child(2n){
      background-color: rgba(158, 158, 158, 0.1);
    }
  }
}
.progress {
    position: absolute;
    text-align: center;
    width: 100%;
    height: 100%;
    &-spinner{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>