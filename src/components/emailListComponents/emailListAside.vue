<template>
    <el-menu class="el-menu-vertical-demo" active-text-color="#FFFFFF" background-color="#FF9933" text-color="#000000" unique-opened="true">
        <div class="akarana_icon">
            <img src="../../assets/akarana.png">
            <span>Akarana Administer System</span>
        </div>
        <!--管理员管理菜单-->
        <el-sub-menu index="1">
            <template #title>
                <el-icon><Tools /></el-icon>
                <span>Administer</span>
            </template>
            <el-menu-item index="1-1" @click="adminInfo">Administer Setting</el-menu-item>
        </el-sub-menu>

        <!--rally管理菜单-->
        <el-sub-menu index="2">
            <template #title>
                <el-icon><Flag /></el-icon>
                <span>Rally</span>
            </template>
            <el-menu-item index="2-1" @click="rally">All Rallies</el-menu-item>
        </el-sub-menu>

        <!--email list管理菜单-->
        <el-sub-menu index="3">
            <template #title>
                <el-icon><Message /></el-icon>
                <span>Email List</span>
            </template>
            <el-menu-item index="3-1" @click="allEmailList">All Email List</el-menu-item>
        </el-sub-menu>

        <!--google drive forms folder-->
        <el-menu-item index="4" @click="goToForms">
            <template #title>
                <el-icon><Document /></el-icon>
                <span>Forms</span>
            </template>
        </el-menu-item>

        <el-menu-item index="5" @click="goToPhotoGallery">
            <template #title>
                <el-icon><PictureRounded /></el-icon>
                <span>Photo Gallery</span>
            </template>
        </el-menu-item>
  </el-menu>
</template>

<script setup>
import router from "../../router/index"

/**
 * click 事件 跳转至 admin info page
 */
 const adminInfo = () =>{
    router.push('/admin')
}

/**
 * click to photo page
 */
const photo = () =>{
    router.push('/photo')
}

/**
 * click to rally page
 */
 const rally = () =>{
    router.push('/rally')
}

/**
 * click to rally page
 */
 const allEmailList = () =>{
    router.push('/AllEmailList')
}

/**
 * click to google drive forms folder
 */
 const goToForms = () =>{
    window.open("https://drive.google.com/drive/folders/1PDUhwLWgVRKwISJ0e5AIMvDlIOZfyuee?usp=sharing");
}

/**
 * click to google photo
 */
 const goToPhotoGallery = () =>{
    window.open("https://photos.app.goo.gl/c6zGfunJyCXDSULH7");
}
</script>

<style lang="less" scoped>
.el-radio-button_inner {
    padding: 0;
}

.el-menu:not(.el-menu--collapse) {
    width: 270px;
    min-height: 400px;
    border: none;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.akarana_icon {
    display: flex;
    align-items: center;
    font-weight: 320;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 113%;
    height: 60px;
    background-color: whitesmoke;
    white-space: nowrap;
    padding-left: 10px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    img{
        width: 45px;
        height: 40px;
        margin-right: 10px;
    }
}
</style>