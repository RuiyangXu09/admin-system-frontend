<template>
    <el-menu class="el-menu-vertical-demo" active-text-color="#FFFFFF" background-color="#FF9933" text-color="#000000" unique-opened="true">
        <div class="akarana_icon">
            <img src="../assets/ICON.png">
            <span>Akarana Administer System</span>
        </div>

        <!--用户管理菜单-->
        <el-sub-menu index="1">
            <template #title>
                <el-icon><User /></el-icon>
                <span>Club Members</span>
            </template>
                <el-menu-item index="1-1" @click="register">Register New</el-menu-item>
        </el-sub-menu>

        <!--管理员管理菜单-->
        <el-sub-menu index="2">
            <template #title>
                <el-icon><Tools /></el-icon>
                <span>Administer</span>
            </template>
                <el-menu-item index="2-1" @click="adminInfo">Administer Setting</el-menu-item>
                <el-menu-item index="2-2" @click="photo">Photo Gallery</el-menu-item>
        </el-sub-menu>

        <!--rally管理菜单-->
        <el-sub-menu index="3">
            <template #title>
                <el-icon><Flag /></el-icon>
                <span>Rally</span>
            </template>
            <el-menu-item index="3-1" @click="rally">Rally Setting</el-menu-item>
        </el-sub-menu>

        <!--email list menu-->
        <el-sub-menu index="4">
            <template #title>
                <el-icon><Message /></el-icon>
                <span>Email List</span>
            </template>
            <el-menu-item index="4-1" @click="emailList">Email Contact List</el-menu-item>
        </el-sub-menu>

        <el-menu-item index="5" @click="goToForms">
            <template #title>
                <el-icon><Document /></el-icon>
                <span>Forms</span>
            </template>
        </el-menu-item>
  </el-menu>
</template>

<script setup>
import router from "../router"
/**
 * click 事件 跳转至 register page
 */
const register = () =>{
    router.push('/register');
}

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
 * click to email list page
 */
 const emailList = () =>{
    router.push('/emailList')
}

/**
 * click to google drive forms folder
 */
const goToForms = () =>{
    window.open("https://drive.google.com/drive/folders/1PDUhwLWgVRKwISJ0e5AIMvDlIOZfyuee?usp=sharing");
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