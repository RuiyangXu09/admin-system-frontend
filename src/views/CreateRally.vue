<template>
    <div class="register">
        <div class="backGroundImage"></div>
        <div class="register_container">
            <h1 class="h1">Akarana Club Rally Register</h1>
            <el-form :model="createRally" :rules="rules" ref="ref_form">
                <!--rally 信息输入-->
                <el-form-item prop="mainTitle">
                  <el-input v-model="createRally.mainTitle" placeholder="Main Title" clearable>
                        <template #prepend>
                            <el-icon><List /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item prop="subTitle">
                    <el-input v-model="createRally.subTitle" placeholder="Sub Title" clearable>
                        <template #prepend>
                            <el-icon><List /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item prop="time">
                    <el-input v-model="createRally.time" placeholder="Rally Time" clearable>
                        <template #prepend>
                            <el-icon><Calendar /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item prop="address">
                    <el-input v-model="createRally.address" placeholder="Rally Address" clearable>
                        <template #prepend>
                            <el-icon><Place /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item prop="content">
                    <el-input v-model="createRally.content" placeholder="Content" type="textarea" clearable />
                </el-form-item>

                <!-- upload cover image  -->
                <!-- <el-upload
                        class="upload-demo"
                        drag
                        action="http://127.0.0.1:3000/api/v1/admin/create"
                        multiple
                    >
                        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                        <div class="el-upload__text">
                        Drop file here or <em>click to upload</em>
                        </div>
                        <template #tip>
                        <div class="el-upload__tip">
                            jpg/png cover image with a size less than 500kb
                        </div>
                        </template>
                    </el-upload> -->
                <!--home button-->
                <el-button class="register_submit" @click="goHome">Cancel</el-button>
                <!--register button-->
                <el-button type="primary" class="register_submit" @click="Rally">Create</el-button>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import router from '../router/index';
import { reactive, ref } from "vue";
import { getRally } from '../api/index';
/**
 * 初始的ref
 */
const ref_form = ref(null);

/**
 * rally表单的数据声明
 */
const createRally = reactive({
    mainTitle:'',
    subTitle:'',
    content:'',
    time:'',
    address:'',
})

/**
 * 表单的数据检验，定义rules，检查输入框是否为空
 */
const rules = {
    mainTitle:[{required: 'true', trigger: 'blur', message: 'Please input main title'}],
    time:[{required: 'true', trigger: 'blur', message: 'Please input precise time'}],
    address:[{required: 'true', trigger: 'blur', message: 'Please input correct address'}],
    content:[{required: 'true', trigger: 'blur', message: 'Please input details of the rally'}]
}

/**
 * create rally 的方法
 */
const Rally = () =>{
    ref_form.value.validate((val) =>{
        if (val) {
            getRallyData();
        }
    })
}

/**
 * create rally api 的调用
 */
const getRallyData = async() =>{
    //create rally api
    const res = await getRally({mainTitle: createRally.mainTitle, subTitle: createRally.subTitle, content: createRally.content, time: createRally.time, address: createRally.address})

    if (res?.message) {
        ElMessage({
        message: 'Create Rally Success!',
        type: 'success',
    })
    //打印提示信息后跳转至rally相关的page
    router.push('/rally');
    }
}

//click to home button
const goHome = () =>{
    router.push('/rally');
}
</script>

<style lang="less" scoped>
@-webkit-keyframes fadenum{
  0% {
    opacity: 0;
  }

  100% {
    opacity: 100;
  }
}
//class login样式
  .register {
    height: 100%;
    .backGroundImage{
      height: 100%;
      background-image: url("../assets/caravan.jpg");
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: 50% 50%;
      background-color: darkgray;
    }

    //icon样式
    .el_icon{
      height: 30px !important;
    }
  
    //登录框样式
    .register_container{
      animation: fadenum 1s ease;
      position: absolute;
      z-index: 1;
      width: 400px;
      top:50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 1s;
      min-height: 200px;
      text-align: center;
      background-color: whitesmoke;
      border-radius: 10px;
      padding: 20px;
    }

    //登录框中h1样式
    h1{
      font-size: 20px;
      transition: all 1s;
      font-weight: bold;
      margin-bottom: 36px;
    }

    .el_form{
      border-radius: 20px;
    }

    .el_card{
      .register_submit{
        width: 100%;
        height: 50px;
        border-radius: 20px;
      }

      :deep(.el-input-group_prepend){
        padding: 0 10px;
      }
    }
  }
</style>