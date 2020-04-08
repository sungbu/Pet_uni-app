<template>
	<view class="all">
		<view class="header">
			<view class="h1">手机号注册</view>
			<text>亲，欢迎注册账号</text>
		</view>
		<view class="content">
			<input type="text" class="userName" placeholder="用户名" v-model="userName">
			<input type="text" class="email" placeholder="邮箱" v-model="email">
			<input type="number" class="phone" placeholder="请输入手机号" v-model="phone">
			<input type="password" class="pad" placeholder="请输入密码" v-model="psd">
		</view>
		<view class="btn" @tap="PressBtn">注册</view>
	</view>
</template>

<script>
	export default{
		data() {
			return{
				userName: "",
				email: "",
				phone: "",
				psd: ""
			}
		},
		methods:{
			isPhoneNumber(tel) {
				var reg =/^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
				return reg.test(tel);
			},
			isEmail(email) {
				var reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
				return reg.test(email);
			},
			PressBtn() {
				console.log(this.userName,this.email,this.phone,this.psd)
				if(this.userName != ""&&this.email != ""&&this.phone != ""&&this.psd != ""){
					if(!this.$options.methods.isPhoneNumber(this.phone)){
						uni.showToast({
							title: '手机号码格式不正确',
							icon: "none"
						});
					}else if(!this.$options.methods.isEmail(this.email)){
						uni.showToast({
							title: '邮箱格式不正确',
							icon: "none"
						});
					}else{
						uni.request({
							method: "POST",
							url: 'http://106.13.111.39:40002/api/post/signUp', //仅为示例，并非真实接口地址。
							data: {
								user: this.userName,
								phone: this.phone,
								email : this.email,
								psw: this.psd
							},
		　　　　				dataType:'json',
							header: {
								// 'custom-header': 'hello' ,//自定义请求头信息
								'content-type':'application/x-www-form-urlencoded'
							},
							success: (res) => {
								var data = res.data;
								if(data.code == 1){
									uni.showToast({
										title:"注册成功",
										icon: "success"
									})
								}else{
									uni.showToast({
										title: "服务器开了点小差",
										icon: "none"
									})
								}
							}
						});
					}
				}else{
					uni.showToast({
						icon:"none",
						title:"输入内容不能为空"
					})
				}
			}
		}
		
	}
</script>

<style lang="less" scoped>
	.all{
		box-sizing: border-box;
		padding: 160upx 40upx;
		.header{
			.h1{
				font-size: 50upx;
				display: block;
				font-weight: 400;
				letter-spacing: 8upx;
				color:#333333;
				margin-bottom: 10upx;
			}
			text{
				color: #555555;
				font-size: 30upx;
				letter-spacing: 3upx;
			}
		}
		.content{
			input{
				padding: 40upx 0;
				border-bottom: 0.5upx solid #999999;
				color: #808080;
				text-indent: 1em;
			}
			.userName{
				display: inline-block;
				width: 40%;
			}
			.email{
				display: inline-block;
				width: 50%;
				margin-left: 40upx;
			}
		}
		.btn{
			text-align: center;
			margin: 160upx 0;
			padding: 20upx;
			box-sizing: border-box;
			background-color:#007AFF;
			border-radius: 40upx;
			color: #f4f4f4;
			font-weight: 800;
			letter-spacing: 10upx;
		}
	}
</style>
