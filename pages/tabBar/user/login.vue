<template>
	<view class="all">
		<view class="title">
			<text class="h1">亲,欢迎登录</text>
			<text class="h5">没有账户?</text>
			<text class="h5 flag" @tap="navToSignUp">立即注册</text>
		</view>
		<view class="form">
			<input class="phone" type="number" placeholder="请输入手机号" v-model="phone">
			<input class="psw" type="password" placeholder="请输入密码" v-model="psw">
			<view class="btn" @click="send">确认</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return{
				alert:["手机号不能为空","密码不能为空","手机号格式错误","服务器错误，稍后重试！","密码错误","正在登录"],
				phone: "",
				psw: ""
			}
		},
		onBackPress() {
			this.isRturn();
			return true
		},
		methods:{
			isPhoneNumber(tel) {
				var reg =/^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
				return reg.test(tel);
			},
			isRturn() {
				uni.switchTab({
					url: "user",
				});
			},
			navToSignUp() {
				uni.navigateTo({
					url:"signUp"
				})
			},
			loginUser(phone,psw,alert) {
				// console.log(phone,psw)
				uni.request({
					method: "POST",
				    url: 'http://106.13.111.39:40002/api/login', //仅为示例，并非真实接口地址。
				    data: {
						"phone": phone,
						"psw": psw
				    },
　　　　				dataType:'json',
				    header: {
				        // 'custom-header': 'hello' ,//自定义请求头信息
						'content-type':'application/x-www-form-urlencoded'
				    },
				    success: (res) => {
				        var data = res.data;
						if(data.code == 1){
							// console.log(data)
							uni.setStorage({
								key: 'user',
								data: data.user
							})
							uni.setStorage({
								key: 'id',
								data: data.id
							})
							uni.showToast({
								icon: "loading",
								title: alert[5],
								duration: 500
							})
							uni.switchTab({
								url: "user"
							})
						}else if(data.code == 2){
							uni.showToast({
								title: alert[4],
								icon: "none",
								duration: 1000
							})
						}else{
							uni.showToast({
								title: alert[3],
								icon: "none",
								duration: 1000
							})
						}
				    }
				});
			},
			send() {
				if(this.phone == "" || this.phone == undefined){
					uni.showToast({
						title: this.alert[0],
						icon: "none",
						duration: 1000
					})
				}else if(this.psw == "" || this.psw == undefined){
					uni.showToast({
						title: this.alert[1],
						icon: "none",
						duration: 1000
					})
				}else if(!this.$options.methods.isPhoneNumber(this.phone)){
					uni.showToast({
						title: this.alert[2],
						icon: "none",
						duration: 1000
					})
				}else{
					// console.log(this.phone,this.psw)
					this.$options.methods.loginUser(this.phone,this.psw,this.alert);
				}
			},
		}
	}
</script>

<style lang="less">
	.all{
		box-sizing: border-box;
		padding: 160upx 40upx;
		.title{
			margin-bottom: 100upx;
			.h1{
				font-size: 50upx;
				display: block;
				font-weight: 400;
				letter-spacing: 8upx;
				color:#333333;
				margin-bottom: 10upx;
			}
			.h5{
				color: #555555;
				font-size: 30upx;
				letter-spacing: 3upx;
			}
			.flag{
				color:#007AFF;
			}
		}
		.form{
			input{
				padding: 40upx 0;
				border-bottom: 0.5upx solid #999999;
				color: #808080;
				text-indent: 1em;
			}
			.phone{
				
			}
			.psw{
				
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
	}
</style>
