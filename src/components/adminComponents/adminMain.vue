<template>
    <div>
        <!--传入data.list 传入数据库中查询道德数据-->
        <adminTable :list="data.list"/>
    </div>
</template>

<script setup>
import adminTable from './adminTable.vue';
import { onMounted, reactive } from 'vue';
import { getAdmin } from '../../api/index';

/**
 * 初始化数据
 */
const data = reactive({
    list: []
})
/**
 * admin 列表的获取
 */
const getAdminData = async(query) =>{
    const id =query?.id
    const res = await getAdmin({id})

    data.list = res?.data.list;
}

onMounted(() =>{
    getAdminData()
})
</script>

<style lang="less" scoped>

</style>