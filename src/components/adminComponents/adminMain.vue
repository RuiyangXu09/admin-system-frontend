<template>
    <div>
        <!--传入data.list 传入数据库中查询道德数据-->
        <adminTable :list="data.list" :editClick="editClick"/>
    </div>
    <adminEdit :popShow="popShow" v-if="popShow" :message="adminInfo.message" :confirmClick="confirmClick"/>
</template>

<script setup>
import adminTable from './adminTable.vue';
import { onMounted, reactive, ref } from 'vue';
import { getAdmin, updateAdmin } from '../../api/index';
import adminEdit from './adminEdit.vue'
import { ElMessage } from 'element-plus';
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
//显示数据
onMounted(() =>{
    getAdminData()
})

/**
 * edit admin info logic
 */
//admin info修改接口调用
const updateAdminInfoData = async(query) =>{
    const {admin, password, id} = query
    const res = await updateAdmin({admin, password, id});
    if (res?.message) {
        ElMessage({
            message: res.message,
            type: 'success'
        })
    }
}
//需要编辑的数据
const adminInfo = reactive({
    message: {}
})
//定义控制编辑弹窗的展示变量
const popShow = ref(false)
//定义控制编辑弹窗展示的方法
const isShowPop = (show) =>{
    popShow.value = show;
}

//编辑的按钮
const editClick = (val) =>{
    isShowPop(true);
    adminInfo.message = val
}

//取消按钮和确认按钮方法，接收一个参数val，用来区分点击不同的按钮状态
const confirmClick = (val) =>{
    if (val === 'cancel') {
        isShowPop(false);
    }else if (val.admin !== adminInfo.message.admin || val.password !== adminInfo.message.password) {
        //更改administer的admin和password
        data.list.map((item) =>{
            if (item.id === val.id) {
                item.admin = val.admin;
                item.password = val.password;
            }
        })

        //关闭弹窗
        isShowPop(false);
        //修改接口调用
        updateAdminInfoData({admin: val.admin, password: val.password, id: val.id})
    }else{
        ElMessage({
        showClose: true,
        message: 'No Edit',
        type: 'warning'
        })
    }
}
</script>

<style lang="less" scoped>

</style>