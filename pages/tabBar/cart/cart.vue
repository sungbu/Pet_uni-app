<template>
	<view class="all">
		<view class="cart-wrap" v-for="cart in shopping">
			<view class="box" @tap="navToCommodity(cart[0].id)">
				<image :src="ChangeUrl(cart[0].src)"></image>
				<view class="des">
					<text>{{cart[0].title}}</text>
					<view class="weight">{{cart[0].weight}}</view>
					<view class="place"></view>
					<view class="price">¥{{cart[0].price}}</view>
					<view class="number">数量:{{cart[0].number}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return{
				changeLoginPage : false,
				userId : "",
				shoppingCar : [
					{
						id: "", 
						userId: "", 
						tabId: "", 
						number: "", 
						ctime: ""
					}
				],
				shopping : []
			}
		},
		onShow() {
			this.isChangeLoginPage();
			this.initData();
		},
		methods:{
			initData() {
				// this.shoppingCar = [];
				this.shopping = [];
				var self = this;
				uni.getStorage({
					key: 'id',
					success(e) {
						self.userId = e.data;
					}
				})
				// console.log(self.userId)
				uni.request({
					method: "POST",
					url: 'http://106.13.111.39:40002/api/get/shopping', //仅为示例，并非真实接口地址。
					data: {
						"userId": this.userId,
					},
　　　　				dataType:'json',
					header: {
						// 'custom-header': 'hello' ,//自定义请求头信息
						'content-type':'application/x-www-form-urlencoded'
					}, 
				    success: (res) => {
				        // console.log(res.data);
						this.shoppingCar = res.data;
						var flag = 0;
						res.data.forEach(function (ele,index) {
							uni.request({
								method: "POST",
								url: 'http://106.13.111.39:40002/api/get/addDomShoppingCar', //仅为示例，并非真实接口地址。
								data: {
									"tabId": ele.tabId,
								},
			　　　　				dataType:'json',
								header: {
									// 'custom-header': 'hello' ,//自定义请求头信息
									'content-type':'application/x-www-form-urlencoded'
								}, 
								success(e) {
									self.shopping.push(e.data);
									console.log(index);
									self.shopping[flag][0].number = ele.number
									console.log(self.shopping)
									flag ++
								}
							})
						})
						// this.shoppingCar = res.data;
				    }
				});
			},
			ChangeUrl(url) {
				console.log("http://106.13.111.39:40002" + url)
				return "http://106.13.111.39:40002" + url;
			},
			isChangeLoginPage() {
				var flag = ""
				uni.getStorage({
					key: "user",
					success(e) {
						flag = e.data
					}
				})
				if(flag == "" || flag == undefined){
					uni.navigateTo({
						url: "../user/login"
					})
				}
			},
			navToCommodity(tabId){
				uni.navigateTo({
					url: "../../separatePages/commodity?tabId=" + tabId,
				})
			}
		}
	}
</script>

<style lang="less">
	.all{
		background: #F1F1F1;
		height: 100vh;
		.cart-wrap{
			// border: 1px solid red;
			box-sizing: border-box;
			margin: 40upx;
			background-color: #ffffff;
			border-radius: 10upx;
			.box{
				image{
					// display: inline-block;
					height: 200upx;
					width: 200upx;
					// border: 1px solid red;
				}
				.des{
					display: inline-block;
					vertical-align: top;
					height: 200upx;
					width: 400upx;
					padding: 20upx 0 0 40upx;
					// border: 1px solid red;
					text{
						font-size: 27upx;
						font-weight: 600;
						color:#555555;
						display: block;
					}
					.weight{
						display: inline;
						font-size: 25upx;
						background: #F1F1F1;
						padding: 10upx 20upx;
						border-radius: 10upx;
					}
					.place{
						display: block;
					}
					.price{
						display: inline-block;
						font-size: 26upx;
						font-weight: bold;
						color:#DD524D;
						margin-right:100upx;
					}
					.number{
						display: inline-block;
						font-size: 26upx;
					}
				}
			}
		}
	}
</style>
