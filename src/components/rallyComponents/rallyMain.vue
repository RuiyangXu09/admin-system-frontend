<template>
    <div>
        <rallyTable :list="data.list" :previewClick="previewClick" :deleteHandle="deleteHandle" :closeHandle="closeHandle" :editClick="editClick" :openHandle="openHandle" :updateHandle="updateHandle"/>
    </div>
    <rallyPreview :popShow="popShow" v-if="popShow" :message="rallyItemState.message" :cancelClick="cancelClick" />
    <rallyEdit :editShow="editShow" v-if="editShow" :item="editItemState.item" :cancelClick="cancelClick" :confirmClick="confirmClick"/>
</template>
  
<script setup>
import rallyTable from './rallyTable.vue';
import rallyPreview from './rallyPreview.vue';
import rallyEdit from './rallyEdit.vue';
import { onMounted, reactive, ref } from 'vue';
import { listRally, deleteRally, closeRally, openRally, updateRally, uploadBulletin } from '../../api/index';
import { ElMessage } from 'element-plus';
import emitter from "../../utils/eventBus";

/**
 * 初始化的rally数据，从mysql数据库
 */
const data = reactive({
    list: [],
    status: 'Upcoming'
})

/**
 * list all rally info rally列表status切换逻辑，获取列表中的status，默认为open
 */
const listRallyData = async(query) =>{
    const status = query?.status || data.status;
    const id = query?.id;
    const res = await listRally({id, status});

    //筛选并获取符合status的数据存入list
    data.list = res?.data.list.filter((item) => (item.status === status))
}
//显示数据
onMounted(() =>{
    listRallyData();
    //监听rally中status的切换
     emitter.on('status', (val) =>{
        data.status = val;
        listRallyData({status: val});
     })
})

/**
 * preview的逻辑
 */
//查看rally info的数据
const rallyItemState = reactive({
    //因为在rallyPreview组件中，有一个传递变量命名为message
    message: {}
})
//控制弹窗的展示变量
const popShow = ref(false);
//控制弹出弹窗展示的方法
const isShowPop = (show) =>{
    popShow.value = show
}

//查看详情的按钮
const previewClick = (val) =>{
    isShowPop(true);
    rallyItemState.message = val;
}

//取消按钮
const cancelClick = (val) =>{
    //如果cancel button中传递了cancel的绝对等值，则关闭该对话框
    if (val === 'cancel') {
        isShowPop(false);
    }
}

/**
 * 编辑rally的逻辑
 */
//编辑rally的api调用
const updateRallyData = async(query) =>{
    const {mainTitle, subTitle, time, address, content, bulletin, album, mapUrl, rallyID, id} = query;
    const res = await updateRally({mainTitle, subTitle, time, address, content, bulletin, album, mapUrl, rallyID, id});
    if (res?.message) {
        ElMessage({
        message: res.message,
        type: 'success'
        })
    }
}
//编辑的数据
const editItemState = reactive({
    item:{}
})
//控制编辑弹窗的展示变量
const editShow = ref(false);
//控制编辑弹窗的展示方法
const isEditPop = (show) =>{
    editShow.value = show
}
//编辑的按钮
const editClick = (val) =>{
    //打开弹窗
    isEditPop(true)
    editItemState.item = val;
}
//取消和确认按钮的逻辑
const confirmClick = (val) =>{
    if (val === 'cancel') {
        //如果点击cancel，关闭弹窗
        isEditPop(false);
    }else if (val.mainTitle !== editItemState.item.mainTitle || val.subTitle !== editItemState.item.subTitle || val.time !== editItemState.item.time || val.address !== editItemState.item.address || val.content !== editItemState.item.content || val.bulletin !== editItemState.item.bulletin || val.album !== editItemState.item.album || val.mapUrl !== editItemState.mapUrl || val.rallyID !== editItemState.rallyID) {
        data.list.map((item) =>{
            //修改对应的表格中的数据
            if (item.id === val.id) {
                item.mainTitle = val.mainTitle
                item.subTitle = val.subTitle
                item.time = val.time
                item.address = val.address
                item.content = val.content
                item.bulletin = val.bulletin
                item.album = val.album
                item.mapUrl = val.mapUrl
                item.rallyID = val.rallyID
            }
        })
        //关闭弹窗
        isEditPop(false);
        //修改接口的调用
        updateRallyData({mainTitle: val.mainTitle, subTitle: val.subTitle, time: val.time, address: val.address, content: val.content, bulletin: val.bulletin, album: val.album, mapUrl: val.mapUrl, rallyID: val.rallyID, id: val.id})
    }else{
        ElMessage({
        showClose: true,
        message: 'No Edit',
        type: 'warning'
        })
    }
}

/**
 * delete rally api
 */
const deleteRallyData = async(query) =>{
    const res = await deleteRally({id: query});
    if (res?.message) {
        ElMessage({
            message: res.message,
            type: 'success'
        })
    }
}
const deleteHandle = (val) =>{
    if (val) {
        data.list = data.list.filter((item) =>{
            return item.id !== val
        })
        deleteRallyData(val);
    }
}

/**
 * set rally close api
 */
const closeRallyData = async(query) =>{
    const res = await closeRally({id: query});
    if (res?.message) {
        ElMessage({
            message: res.message,
            type: 'success'
        })
    }
}

const closeHandle = (val) =>{
    if (val) {
        data.list = data.list.filter((item) =>{
            return item.id !== val
        })
        closeRallyData(val);
    }
}

/**
 * set rally open api
 */
 const openRallyData = async(query) =>{
    const res = await openRally({id: query});
    if (res?.message) {
        ElMessage({
            message: res.message,
            type: 'success'
        })
    }
}

const openHandle = (val) =>{
    if (val) {
        data.list = data.list.filter((item) =>{
            return item.id !== val
        })
        openRallyData(val);
    }
}

/**
 * upload report api 接收一个参数 formData
 */
const updateCoverImageData = async (formData) => {
    //调用api 等待uploadBulletin完成，并将结果赋值给res
    const res = await uploadBulletin(formData);
    //如果接收到后端传递的message，提示upload success
    if (res?.message) {
        ElMessage({
        message: res.message,
        type: 'success',
        });
    }
};

//定义uploadHandle的异步函数，接收val
const updateHandle = async (val) => {
    //如果val中包含rallyTable组件中包含id和file
    if (val.id && val.file) {
        //创建FormData
        const formData = new FormData();
        //将rallyTable组件中传递过来的file和id加入formData对象
        formData.append('file', val.file);
        formData.append('id', val.id);
        //调用uploadReportData函数
        await updateCoverImageData(formData);
  }
};
</script>

<style lang="less" scoped>

</style>