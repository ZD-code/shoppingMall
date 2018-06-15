<template>
    <div>
        <van-nav-bar
            title="用户注册"
            left-text="返回"
            left-arrow
            :fixed="isFixed"
            :zIndex="zIndex"
            @click-left="goBack"
        />

        <div class="register-panel">
            <van-field
                v-model="userName"
                label="用户名"
                icon="clear"
                placeholder="请输入用户名"
                required
                @click-icon="userName = ''"
                :error-message="userNameErrorMsg"
            ></van-field>

            <van-field
                v-model="password"
                type="password"
                icon="clear"
                label="密码"
                placeholder="请输入密码"
                required
                @click-icon="password = ''"
                :error-message="passwordErrorMsg"
            ></van-field>
            <!-- <van-field
              v-model="telphone"
              center
              label='短信验证码'
              placeholder="请输入短信验证码"
              icon='clear'
              required
              @click-icon="telphone=''"
             >
             <van-button slot="button" size="small" type="primary">发送验证码</van-button>
            </van-field> -->
            
            

            

            <div class="register-button">
                <van-button type="primary" size="normal" @click="registerAction" :loading="openLoading">马上注册</van-button>
            </div>

            
        </div>
        <van-password-input 
              :value="value"
              info="密码为6位数字"
              @focus="showKeyboard = true"
            ></van-password-input>

            <van-number-keyboard
              :show="showKeyboard"
              @input="onInput"
              @delete="onDelete"
              @blur="showKeyboard = false"
            ></van-number-keyboard>
        
          <van-cell-group>
            <van-cell title="about" value="in" icon="location" is-link :clickable="isClickable" url="https://www.baidu.com"></van-cell>
            <van-cell value="custom" icon="shop" is-link>
              <template slot="title">
                <span class="van-cell-text">演员葛</span>  
                <van-tag type="danger">数字</van-tag>
              </template>
            </van-cell>
          </van-cell-group>
    </div>
</template>

<script>
import axios from "axios";
import url from "@/serviceAPI.config.js";
import { Toast } from "vant";
export default {
  data() {
    return {
      userName: "",
      password: "",
      openLoading: false,
      userNameErrorMsg: "",
      passwordErrorMsg: "",
      telphone: "",
      isFixed: true,
      zIndex: 9,
      showKeyboard: false,
      value: "",
      isClickable:false
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
      if (this.value.length === 6) {
        Toast.success("输入完成");
      }
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    onBlur() {
      this.showKeyboard = false;
    },
    checkForm() {
      let isOk = true;
      if (this.userName.length < 5) {
        this.userNameErrorMsg = "用户名不能少于5位";
        isOk = false;
      } else {
        this.userNameErrorMsg = "";
      }

      if (this.password.length < 6) {
        this.passwordErrorMsg = "密码不能少于6位";
      } else {
        this.passwordErrorMsg = "";
      }
      return isOk;
    },
    registerAction() {
      // if (this.checkForm()) {
      //   this.axiosRegisterUser();
      // }
      this.checkForm() && this.axiosRegisterUser();
    },
    axiosRegisterUser() {
      axios({
        url: url.registerUser,
        method: "post",
        data: {
          userName: this.userName,
          password: this.password
        }
      })
        .then(response => {
          console.log(response);
          //如果返回code为200，代表注册成功，我们给用户作Toast提示
          if (response.data.code == 200) {
            Toast.success(response.data.message);
            this.$router.push("/");
          } else {
            console.log(response.data.message);
            Toast.fail(response.data.message);
            this.openLoading = false;
          }
          console.log(response.data.code);
        })
        .catch(error => {
          Toast.fail("注册失败");
          this.openLoading = false;
        });
    }
  }
};
</script>

<style scoped>
.register-panel {
  width: 96%;
  border-radius: 5px;
  margin: 50px auto 20px;
}
.register-button {
  text-align: center;
  padding-top: 10px;
}
</style>