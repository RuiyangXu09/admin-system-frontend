<template>
  <div>
    <div class="select-wrapper">
      <!--下拉选择框-->
      <el-select v-model="data.memberType" placeholder="Member Type">
        <el-option
          v-for="item in memberTypeOptions"
          :key="item.data"
          :label="item.label"
          :value="item.value"
        />
      </el-select>

      <el-select v-model="data.active" placeholder="Status">
        <el-option
          v-for="item in active"
          :key="item.data"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <!-- search button -->
      <el-button type="primary" @click="searchByEmailList" :icon="Search">Search</el-button>
    </div>

    <div>
      <!-- 描述框，获取数据信息 -->
      <el-descriptions title="Email List">
        <el-descriptions-item>
          {{ displayEmailList }}
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import { searchEmailList, searchAllEmailList } from '../../api/index';
import { Search } from '@element-plus/icons-vue'
//创建一个ref以存储要显示的email list字符串
const displayEmailList = ref(null);

//定义响应式数据对象，包含Email list、member type和active
const data = reactive({
  list: [],
  memberType: '',
  active: '',
});

//定义memberTypeOptions选项数组
const memberTypeOptions = reactive([
  { value: 'R', label: 'Regular' },
  { value: 'LM', label: 'Life Member' },
  { value: 'AM', label: 'Associate Member' },
  { value: 'P', label: 'Prospective' },
]);

//定义active选项数组
const active = reactive([
  { value: 'A', label: 'Active ' },
  { value: 'I', label: 'Inactive' },
]);

//searchByEmailList 函数，用于获取下拉框选定的memberType和active值，并将它们作为参数传递给getEmailListData函数
const searchByEmailList = () => {
  const query = {
    memberType: data.memberType,
    active: data.active,
  };
  getEmailListData(query);
};

//getEmailListData 函数，根据查询参数从api获取Email list
const getEmailListData = async (query) => {
  const res = await searchEmailList(query);

  //将获取到的email list存储在 data.list 中
  data.list = res?.data.list;

  //将第一个结果中的email list字符串存储在displayEmailList中，如果没有结果，则设置为null
  displayEmailList.value = data.list[0]?.results || "";
};

//调用 getEmailListData 函数，显示数据
onMounted(() => {
  getEmailListData();
});
</script>

<style lang="less" scoped>
.select-wrapper {
  margin-bottom: 16px;
}
.el-form {
  display: flex;
}

.main {
  background-color: whitesmoke;
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: x-large;

  .input-with-select {
    width: 400px;
    margin-bottom: 40px;
  }
}

:deep(.el-table__header-wrapper) {
  position: fixed;
  z-index: 20;
}

:deep(.el-table__inner-wrapper) {
  overflow: hidden;
}

:deep(.el-table__body-wrapper) {
  margin-top: 40px;
}

:deep(.el-input__inner) {
  width: 300px;
  margin-right: 10px;
}

:deep(.warning-row) {
  --el-table-tr-bg-color: var(--el-color-warning-light-9) !important;
  height: 140px !important;
}

.table {
  height: 80vh;
  width: 85vw;
  overflow: hidden;
  overflow-y: scroll;
}

.table::-webkit-scrollbar {
  display: none
}
</style>