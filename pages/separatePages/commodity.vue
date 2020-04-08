<template>
	<view class="all">
		<!-- #ifdef H5 || APP-PLUS -->
		<view class="returnBefore" @tap="returnBtn"><i class="iconfont">&#xe658;</i></view>
		<!-- #endif -->
		<view class="banner">
			<image :src="ChangeUrl(commodityList[0].src)" mode="widthFix"></image>
		</view>
		<view class="des">
			<view class="price">¥{{commodityList[0].price}}</view>
			<view class="title">{{commodityList[0].title}}</view>
			<view class="specifications">
				<text>规格:</text>
				<view class="place"></view>
				<view class="weight">{{commodityList[0].weight}}</view>
			</view>
		</view>
		<view class="flooter">
			<view class="addCar">
				<view class="cls">
					<view class="rem" @tap="remNumber">-</view>
					<view class="show">{{number}}</view>
					<view class="add" @tap="addNumber">+</view>
				</view>
				<text @tap="addShoppingCar">加入购物车</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				commodityList : [
					{
						brand: "",
						title: "",
						weight: "",
						src: "",
						price: "",
						id : ""
					},
				],
				tabId: "",
				userId: "",
				number: 1,
			}
		},
		onLoad(option) {
			this.tabId = option.tabId
			// console.log(option.tabId)
		},
		onShow() {
			this.initData(this.tabId);
		},
		methods:{
			initData(tabId) {
				var self = this;
				uni.request({
					method: "POST",
					url: 'http://106.13.111.39:40002/api/get/addDomShoppingCar', //仅为示例，并非真实接口地址。
					data: {
						"tabId": tabId,
					},
　　　　				dataType:'json',
					header: {
						// 'custom-header': 'hello' ,//自定义请求头信息
						'content-type':'application/x-www-form-urlencoded'
					}, 
					success(e) {
						console.log(e.data)
						self.commodityList = e.data;
					}
				})
			},
			ChangeUrl(url) {
				// console.log("http://106.13.111.39:40002" + url)
				return "http://106.13.111.39:40002" + url;
			},
			returnBtn() {
				uni.navigateBack();
			},
			addShoppingCar() {
				var self = this;
				uni.getStorage({
					key: 'id',
					success(e) {
						self.userId = e.data;
					}
				})
				// console.log(this.tabId,this.userId)
				if(self.userId != ""){
					uni.request({
						method: "POST",
						url: 'http://106.13.111.39:40002/api/post/shopping', //仅为示例，并非真实接口地址。
						data: {
							tabId: self.tabId,
							userId: self.userId,
							number: self.number
						},
		　　　　				dataType:'json',
						header: {
							// 'custom-header': 'hello' ,//自定义请求头信息
							'content-type':'application/x-www-form-urlencoded'
						},
						success(e) {
						}
					})
					uni.showToast({
						icon: "success",
						title: "已添加"
					})
				}else{
					uni.showToast({
						icon:"none",
						title:"请先登录"
					})
					uni.navigateTo({
						url: "../tabBar/user/login"
					})
				}
				
			},
			addNumber() {
				if(this.number < 6){
					this.number ++
				}else{
					uni.showToast({
						title: "数量不能超过6个",
						icon: "none"
					})
				}
			},
			remNumber() {
				if(this.number > 1){
					this.number --
				}else{
					uni.showToast({
						title: "数量不能少于1个",
						icon: "none"
					})
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.all{
		position: relative;
		.returnBefore{
			position: absolute;
			top: 20upx;
			/* #ifdef APP-PLUS */
			top: var(--status-bar-height);
			/* #endif */
			left: 20upx;
			z-index: 1;
			background: rgba(0,0,0,0.5);
			width: 70upx;
			height: 70upx;
			text-align: center;
			line-height: 70upx;
			font-size: 40upx;
			color: #f4f4f4;
			font-weight: bold;
			border-radius: 50%;
			cursor: pointer;
			i{
				font-size: 50upx;
			}
		}
		.banner{
			image{
				width: 750upx;
			}
		}
		.des{
			padding: 30upx;
			box-sizing: border-box;
			.price{
				color:#DD524D;
				font-size: 60upx;
				
			}
			.title{
				color: #333333;
				font-size: 30upx;
				font-weight: 400;
				margin-top: 10upx;
			}
			.specifications{
				margin-top: 20upx;
				text{
					color:#555555;
					font-size: 27upx;
					margin-left: 30upx;
				}
				.place{
					display: block;
				}
				.weight{
					display:inline-block;
					background:#C8C7CC;
					color: #f4f4f4;
					font-size: 27upx;
					padding: 10upx 20upx;
					border-radius: 30upx;
					margin-left: 30upx;
					margin-top: 20upx;
				}
			}
		}
		.flooter{
			position: fixed;
			bottom: 0;
			height: 100upx;
			width: 750upx;
			background-color: #FFFFFF;
			border-top: 1px solid #999999;
			.addCar{
				// position: relative;
					// line-height: 50upx;
					margin-top: 10upx;
					margin-right: 20upx;
				text{
					float: right;
					background: #DD524D;
					border-radius: 40upx;
					padding: 20upx;
					color: #f4f4f4;
					font-size: 30upx;
				}
				.cls{
					float: left;
					margin-left: 20upx;
					margin-top: 10upx;
					view{
						display: inline-block;
						border:1px solid #808080;
						padding:1upx;
						text-align: center;
						font-size: 30upx;
						font-weight: bold;
						
					}
					.rem{
						border-bottom-left-radius: 10upx;
						border-top-left-radius: 10upx;
						width:30upx;
					}
					.show{
						width: 40upx;
						font-weight: 500;
					}
					.add{
						border-top-right-radius: 10upx;
						border-bottom-right-radius: 10upx;
						width: 30upx;
					}
				}
			}
		}
	}
</style>
