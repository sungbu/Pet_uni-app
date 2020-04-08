<template>
	<view class="all">
		<search></search>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular" :indicator-color="indicatorColor" :indicator-active-color="indicatorActiveColor">
						<swiper-item>
							<view class="swiper-item">
								<image src="../../../static/img/banner/banner1.jpg"></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image src="../../../static/img/banner/banner1.jpg"></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="tabWrap">
			<view class="header">
				
			</view>
			<view class="content"></view>
		</view>
		<!-- 占位 -->
		<!-- <view class="place"></view> -->
		<view class="content">
			<view class="hot-wrap hotDogFoods">
				<view class="hot">
					<text>主粮</text>
				</view>
				<view class="box">
					<view class="bag">
						<image @tap="changeTab(hotDogFood[0].id)" mode="aspectFill" :key="hotDogFood[0].id" :src="ChangeUrl(hotDogFood[0].src)"></image>
					</view>
					<view class="small">
						<image mode="aspectFill" v-for="hot in hotDogFood.slice(1,5)" :src="ChangeUrl(hot.src)" @tap="changeTab(hot.id)"></image>
					</view>
				</view>
			</view>
			<view class="hot-wrap hotDogSnacks">
				<view class="hot">
					<text>零食</text>
				</view>
				<view class="box">
					<view class="bag">
						<image @tap="changeTab(hotSnack[0].id)" mode="aspectFill" :key="hotSnack[0].id" :src="ChangeUrl(hotSnack[0].src)"></image>
					</view>
					<view class="small">
						<image  mode="aspectFill" v-for="hot in hotSnack.slice(1,5)" :src="ChangeUrl(hot.src)" @tap="changeTab(hot.id)"></image>
					</view>
				</view>
			</view>
			<view class="hot-wrap hotDogCare">
				<view class="hot">
					<text>健康</text>
				</view>
				<view class="box">
					<view class="bag">
						<image @tap="changeTab(hotCare[0].id)" mode="aspectFill" :key="hotCare[0].id" :src="ChangeUrl(hotCare[0].src)"></image>
					</view>
					<view class="small">
						<image  mode="aspectFill" v-for="hot in hotCare.slice(1,5)" :src="ChangeUrl(hot.src)" @tap="changeTab(hot.id)"></image>
					</view>
				</view>
			</view>
			<view class="hot-wrap HotDogProducts">
				<view class="hot">
					<text>日用</text>
				</view>
				<view class="box">
					<view class="bag">
						<image @tap="changeTab(hotProducts[0].id)" mode="aspectFill" :key="hotProducts[0].id" :src="ChangeUrl(hotProducts[0].src)"></image>
					</view>
					<view class="small">
						<image  mode="aspectFill" v-for="hot in hotProducts.slice(1,5)" :src="ChangeUrl(hot.src)" @tap="changeTab(hot.id)"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import search from '../../components/search.vue';
	export default {
		data() {
			return {
						indicatorDots: true,
						autoplay: true,
						interval: 2000,
						duration: 500,
						circular: true,
						indicatorColor: "#ccc",
						indicatorActiveColor: "#20a53a",
						hotDogFood: [
							{
								id: "",
								title: "",
								brand: "",
								classification: "",
								src: "",
								price: "",
								weight: "",
								lowerShelf: "",
								buyNum: "",
								views: "",
								ctime: "",
								utime: ""
							}
						],
						hotCare: [
							{
								id: "",
								title: "",
								brand: "",
								classification: "",
								src: "",
								price: "",
								weight: "",
								lowerShelf: "",
								buyNum: "",
								views: "",
								ctime: "",
								utime: ""
							}
						],
						hotSnack: [
							{
								id: "",
								title: "",
								brand: "",
								classification: "",
								src: "",
								price: "",
								weight: "",
								lowerShelf: "",
								buyNum: "",
								views: "",
								ctime: "",
								utime: ""
							}
						],
						hotProducts: [
							{
								id: "",
								title: "",
								brand: "",
								classification: "",
								src: "",
								price: "",
								weight: "",
								lowerShelf: "",
								buyNum: "",
								views: "",
								ctime: "",
								utime: ""
							}
						],
			        }
		},
		onLoad() {
			this.initData();
		},
		components: {
			search
		},
		methods: {
			initData() {
				uni.request({
					url: "http://106.13.111.39:40002/api/dogFood", 
				    success: (res) => {
				        console.log(res.data);
				        this.hotDogFood = res.data;
				    }
				});
				uni.request({ 
					url: "http://106.13.111.39:40002/api/dogSnacksAll",
				    success: (res) => {
				        console.log(res.data);
				        this.hotSnack = res.data;
				    }
				});
				uni.request({
					url: "http://106.13.111.39:40002/api/queryDogCareAll", 
				    success: (res) => {
				        console.log(res.data);
				        this.hotCare = res.data;
				    }
				});
				uni.request({ 
					url: "http://106.13.111.39:40002/api/queryDogProductsAll",				
				    success: (res) => {
				        console.log(res.data);
				        this.hotProducts = res.data;
				    }
				});
			},
			ChangeUrl(url) {
				console.log("http://106.13.111.39:40002" + url)
				return "http://106.13.111.39:40002" + url;
			},
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			},
			changeTab(tabId){
				// console.log(tabId)
				uni.navigateTo({
					url: "/pages/separatePages/commodity?tabId=" + tabId
				})
			}
		}
	}
</script>

<style lang="less">
	.all{
		.uni-padding-wrap{
			width: 750upx;
			height: 320upx;
			.swiper-item{
				width: 95%;
				height: 320upx;
				margin: 11.7upx auto;
				image{
					width: 100%;
					height: 100%;
					border-radius: 10upx;
				}
			}
		}
		.content{
			box-sizing: border-box;
			width: 750upx;
			padding: 10upx;
			.hot-wrap{
				padding: 0 0 20upx 0;
				.hot{
					border-bottom: 1px solid #333333;
					padding-bottom: 5upx;
					text{
						color: #333333;
						font-size: 30upx;
						font-weight: 700;
					}
				}
				.bag{
					display: inline-block;
					width: 45%;
					height: 50px;
					// border: 1px solid red;
					image{
						width: 100%;
						height: 400upx;
						box-shadow: 0upx 5upx 10upx rgba(0, 0, 0, 0.2);
					}
				}
				.small{
					display: inline-block;
					width: 50%;
					height: 50px;
					// border: 1px solid black;
					image{
						width: 50%;
						height: 200upx;
						box-shadow: 0upx 8upx 25upx rgba(0, 0, 0, 0.2);
					}
				}
			}
		}
	}
	.place {
		background-color: #ffffff;
		height: 400upx
	}
</style>
