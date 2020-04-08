<template>
	<view class="all">
		<view class="user" @tap="navigateTo">
			<image :src="userImage" mode="aspectFill"></image>
			<text>{{user}}</text>
		</view>
		<view class="remveBtn" v-if="deleteBtn" @tap="deleteUser">注销</view>
	</view>
</template>

<script>
	export default {
		data() {
			return{
				userImage : "../../../static/img/user.jpg",
				user: "未登录",
				deleteBtn: false
			}
		},
		onShow() {
			this.userIsLoaged();
		},
		onLoad() {
			// uni.removeStorage({
			// 	key: this.user
			// })
		},
		methods:{
			navigateTo() {
				if(!this.deleteBtn){
					uni.navigateTo({
						url: "login"
					})
				}
			},
			userIsLoaged() {
				var self = this
				uni.getStorage({
					key: 'user',
					success(e) {
						// console.log(this.user)
						self.user = e.data
					}
				})
				this.deleteBtnChange();
			},
			deleteBtnChange() {
				if(this.user == "未登录" || this.user == ""|| this.user == undefined){
					this.deleteBtn = false;
				}else{
					this.deleteBtn = true;
				}
			},
			deleteUser() {
				var self = this;
				uni.showModal({
				    title: '警告',
				    content: '确认注销此用户？',
				    success: function (res) {
				        if (res.confirm) {
				            uni.removeStorage({
				            	key: "user"
				            })
							uni.removeStorage({
								key: "id"
							})
							console.log(self.user)
							self.user = "未登录";
							self.deleteBtn = false;
				        } else if (res.cancel) {
							
				        }
				    }
				});
			}
		}
	}
</script>

<style lang="less">
	.all{
		box-sizing:border-box;
		padding: 30upx;
		padding-top: 100upx;
		// width: 750upx;
		height: 100vh;
		// background-color:#C8C7CC;
		.user{
			// box-sizing:border-box;
			width: 100%;
			// border: 1px solid red;
			image{
				width: 100upx;
				height: 100upx;
				border-radius: 50%;
			}
			text{
				display: inline-block;
				height: 100upx;
				vertical-align: top;
				line-height: 100upx;
				margin-left: 30upx;
				font-size: 40upx;
				font-weight: bold;
			}
			
		}
		.remveBtn{
			// width:690upx;
			box-sizing: border-box;
			margin-top: 150upx;
			text-align: center;
			background: #007AFF;
			padding: 20upx;
			border-radius:40upx;
			color: #f4f4f4;
			font-weight: bold;
			letter-spacing: 20upx;
		}
	}
</style>
