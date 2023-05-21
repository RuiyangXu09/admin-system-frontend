<template>
    <div class="table">
        <el-table :data="list" border stripe style="width: 1390px; height: 100%;">
            <!--first colum-->
            <el-table-column prop="rallyID" label="Rally ID" width="120">

            </el-table-column>

            <el-table-column prop="image" label="Cover Image" width="125">
                <template #default="scope">
                    <img :src="scope.row.image" style="width: 100px; height: 100px;">
                </template>
            </el-table-column>

            <el-table-column prop="mainTitle" label="Main Title">

            </el-table-column>

            <el-table-column prop="time" label="Time">

            </el-table-column>

            <el-table-column prop="status" label="Status" width="100">

            </el-table-column>

            <el-table-column label="Operation">
                <template #default="scope">
                    <!--preview button-->
                    <el-button :icon="ZoomIn" circle @click="previewClick(scope.row)" />
                    <!--open button scop.row.id传递局部对应的id值-->
                    <el-popconfirm title="Do you want to open this rally?" @confirm="openHandle(scope.row.id)">
                        <template #reference>
                            <el-button :icon="Check" type="success" circle />
                        </template>
                    </el-popconfirm>
                    <!--close button scop.row.id传递局部对应的id值-->
                    <el-popconfirm title="Do you want to close this rally?" @confirm="closeHandle(scope.row.id)">
                        <template #reference>
                            <el-button :icon="Close" type="warning" circle />
                        </template>
                    </el-popconfirm>
                    <!--edit button-->
                    <el-button type="primary" :icon="Edit" circle @click="editClick(scope.row)" />
                    <!--delete button scope.row.id传递局部对应的id值-->
                    <el-popconfirm title="Are you sure to delete this rally?" @confirm="deleteHandle(scope.row.id)">
                        <template #reference>
                            <el-button type="danger" :icon="Delete" circle></el-button>
                        </template>
                    </el-popconfirm>
                    <!-- upload button 传入对应row click触发事件 -->
                    <el-button :icon="Upload" circle @click="uploadFile(scope.row)"></el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue';
import { Edit, Delete, ZoomIn, Check, Upload, Close } from '@element-plus/icons-vue'
const { list, previewClick, deleteHandle, closeHandle, openHandle, editClick, uploadHandle } = defineProps(['list', 'previewClick', 'deleteHandle', 'closeHandle', 'openHandle', 'editClick', 'uploadHandle']);

//定义从rallyMain组件中传递过来的uploadFile的函数，接收一个参数row
const uploadFile = (row) => {
    //创建一个新的input元素
    const input = document.createElement('input');
    //设置input元素的类型为file，以便选择文件
    input.type = 'file';
    //当用户选择文件时，执行以下事件处理程序
    input.onchange = () => {
        //获取用户选择的第一个文件
        const file = input.files[0];
        //调用uploadHandle，传递包含row.id和file的对象
        uploadHandle({ id: row.id, file });
    };
    //触发input元素的点击事件，打开文件选择对话框
    input.click();
};
</script>

<style lang="less" scoped>

</style>