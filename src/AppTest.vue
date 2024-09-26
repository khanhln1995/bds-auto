<template>
  <h1 class="text-5xl font-bold text-center text-green-600 mt-5">
    DEMO APP LUỒNG BATDONGSAN.COM.VN
  </h1>
  <div class="container p-10 flex flex-col gap-8">
    <p class="text-3xl font-bold text-start">Đăng ký</p>
    <a-form
      name="register-form"
      layout="horizontal"
      @finish="requestOTP"
      :model="formRegisterState"
      class="flex items-center gap-4"
    >
      <a-form-item label="Số điện thoại">
        <a-input
          placeholder="Nhập Số điện thoại"
          v-model:value.trim="formRegisterState.phone"
          class=""
          autocomplete="off"
        />
      </a-form-item>
      <a-form-item label="Mật khẩu">
        <a-input
          placeholder="Nhập Mật khẩu"
          v-model:value.trim="formRegisterState.password"
          class="w-50"
          autocomplete="off"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">Lấy OTP</a-button>
      </a-form-item>
    </a-form>
    <a-form
      v-if="commonState.isSendOTP"
      name="send-otp-form"
      layout="vertical"
      @finish="sendOTP"
      :model="formSendOTPState"
      class="flex items-end gap-2"
    >
      <a-form-item>
        <template #label>
          Vui lòng nhập OTP đã được gửi về số điện thoại :
          <span class="text-red-500 ml-2">{{ formRegisterState.phone }}</span>
        </template>
        <a-input
          placeholder="OTP"
          v-model:value.trim="formSendOTPState.otpValue"
          class="w-50"
          autocomplete="off"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="default" html-type="submit">Đăng ký</a-button>
      </a-form-item>
    </a-form>
  </div>
  <div class="container p-10">
    <p class="text-3xl font-bold text-start">Đăng nhập & Đăng bài</p>
    <a-form
      name="login-form"
      layout="horizontal"
      :model="formLoginAndPostState"
      @finish="loginAndPost"
    >
      <h1 class="text-xl font-bold text-start my-3">Thông tin người dùng</h1>
      <a-form-item label=" Số điện thoại">
        <a-input
          placeholder="Nhập số điện thoại"
          v-model:value.trim="formLoginAndPostState.user.phone1"
          class="w-50"
          autocomplete="off"
        />
      </a-form-item>
      <a-form-item label="Mật khẩu">
        <a-input
          placeholder="Nhập Mật khẩu"
          v-model:value.trim="formLoginAndPostState.user.password"
          class="w-50"
          autocomplete="off"
        />
      </a-form-item>
      <a-form-item label="Họ">
        <a-input
          placeholder="Nhập Họ"
          v-model:value.trim="formLoginAndPostState.user.firstName"
          class="w-50"
          autocomplete="off"
        />
      </a-form-item>
      <a-form-item label="Tên">
        <a-input
          placeholder="Nhập Tên"
          v-model:value.trim="formLoginAndPostState.user.lastName"
          class="w-50"
          autocomplete="off"
        />
      </a-form-item>
      <h1 class="text-xl font-bold text-start my-3">Thông tin bài đăng</h1>
      <a-form-item label="Tiêu đề">
        <a-input
          placeholder="Nhập Tiêu đề"
          v-model:value.trim="formLoginAndPostState.tieude"
          class="w-50"
          autocomplete="off"
        />
      </a-form-item>
      <a-form-item label="Nội dung">
        <a-textarea
          placeholder="Nhập Nội dung"
          v-model:value.trim="formLoginAndPostState.noidung"
          class="w-50"
          autocomplete="off"
        />
      </a-form-item>
      <p class="textmd font-bold text-start my-3">Địa chỉ :</p>
      <div class="grid grid-cols-3 gap-2">
        <a-form-item label="Tỉnh">
          <a-input
            placeholder="Tỉnh"
            v-model:value.trim="formLoginAndPostState.address.tinh"
            class="w-50"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item label="Huyện">
          <a-input
            placeholder="Huyện"
            v-model:value.trim="formLoginAndPostState.address.huyen"
            class="w-50"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item label="Xã">
          <a-input
            placeholder="Xã"
            v-model:value.trim="formLoginAndPostState.address.xa"
            class="w-50"
            autocomplete="off"
          />
        </a-form-item>
      </div>
      <div class="flex items-center gap-4">
        <a-form-item label="Diện tích">
          <a-input
            placeholder="Nhập Diện tích"
            v-model:value.trim="formLoginAndPostState.dientich"
            class="w-50"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item label="Giá">
          <a-input
            placeholder="Nhập giá"
            v-model:value.trim="formLoginAndPostState.gia"
            class="w-50"
            autocomplete="off"
          />
        </a-form-item>
      </div>
      <a-form-item>
        <a-button type="primary" html-type="submit" class="w-50"
          >Đăng nhập và đăng bài</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup lang="ts">
import { message } from "ant-design-vue";
import { reactive, onMounted } from "vue";

const commonState = reactive({
  loading: false,
  error: null,
  isSendOTP: false,
});

const formRegisterState = reactive({
  phone: "",
  password: "",
});
const formSendOTPState = reactive({
  otpValue: "",
});
const formLoginAndPostState = reactive({
  user: {
    phone1: "",
    password: "",
    firstName: "",
    lastName: "",
  },
  address: {
    tinh: "",
    huyen: "",
    xa: "",
  },
  tieude: "",
  noidung: "",
  dientich: "",
  gia: "",
});

const requestOTP = () => {
  let dataRegister = {
    phone1: formRegisterState.phone,
    password: formRegisterState.password,
  };
  // logic gui yeu cau nhan OTP va lay OTP
  commonState.isSendOTP = true;
  // logic gui OTP
};

const sendOTP = () => {
  // logic gui OTP
  console.log(formSendOTPState.otpValue);
};

const loginAndPost = () => {
  // logic gui bai
  console.log(formLoginAndPostState);
};

onMounted(() => {
  setTimeout(() => {
    message.success("Hello World!");
  }, 3000);
});
</script>

<style></style>
