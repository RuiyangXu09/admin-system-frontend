<template>
  <div class="email-list">
    {{ data.list }}
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import { searchAllEmailList } from '../../api/index';
import { Search } from '@element-plus/icons-vue'

const data = reactive({
  list: '',
});

const getAllEmailListData = async(query) =>{
  const res = await searchAllEmailList(query);

  // 直接获取 "results" 对应的字符串
  data.list = res?.data?.list;
}

onMounted(() => {
  getAllEmailListData();
});
</script>

<style lang="less" scoped>
.email-list {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>