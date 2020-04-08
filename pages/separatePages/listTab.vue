<template>
	<view class="all">
		<view class="listBox" v-for="list in dataList">
			<view class="content">
				<image :src="ChangeUrl(list.src)" @tap="navToCommodity(list.id)" mode="widthFix"></image>
				<text>{{list.title}}</text>
				<view class="des">
					<text class="price">¥{{list.price}}</text>
					<text class="payNum">{{list.views}}人点击</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return{
				navData : "",
				dataList : []
			}
		},
		onLoad(option) {
			this.navData = option.listTab;
			this.initData();
		},
		methods:{
			initData() {
				var self = this;
				if(this.navData == "热门主粮"){
					console.log(222)
					uni.request({
						url: "http://106.13.111.39:40002/api/dogFood",
						success(e) {
							// console.log(e.data)
							self.dataList = e.data
						}
					})
				}else if(this.navData == "热门零食"){
					uni.request({
						url: "http://106.13.111.39:40002/api/dogSnacksAll",
						success(e) {
							// console.log(e.data)
							self.dataList = e.data
						}
					})
				}else if(this.navData == "热门保健"){
					uni.request({
						url: "http://106.13.111.39:40002/api/queryDogCareAll",
						success(e) {
							// console.log(e.data)
							self.dataList = e.data
						}
					})
				}else if(this.navData == "热门日用"){
					uni.request({
						url: "http://106.13.111.39:40002/api/queryDogProductsAll",
						success(e) {
							// console.log(e.data)
							self.dataList = e.data
						}
					})
				}else if(this.navData == "进口主粮"){
					uni.request({
						url: "http://106.13.111.39:40002/api/dogFood/imported",
						success(e) {
							// console.log(e.data)
							self.dataList = e.data
						}
					})
				}else if(this.navData == "国产主粮"){
					uni.request({
						url: "http://106.13.111.39:40002/api/dogFood/domestic",
						success(e) {
							// console.log(e.data)
							self.dataList = e.data
						}
					})
				}else if(this.navData == "洁齿磨牙"){
					uni.request({
						url: "http://106.13.111.39:40002/api/dogTooth",
						success(e) {
							// console.log(e.data)
							self.dataList = e.data
						}
					})
				}else if(this.navData == "肉制零食"){
					uni.request({
						url: "http://106.13.111.39:40002/api/dogSnacks",
						success(e) {
							// console.log(e.data)
							self.dataList = e.data
						}
					})
				}else if(this.navData == "体内驱虫"){
					uni.request({
						url: "http://106.13.111.39:40002/api/insectRepellent",
						success(e) {
							// console.log(e.data)
							self.dataList = e.data
						}
					})
				}else if(this.navData == "皮肤护理"){
					uni.request({
						url: "http://106.13.111.39:40002/api/dogNursing",
						success(e) {
							// console.log(e.data)
							self.dataList = e.data
						}
					})
				}else if(this.navData == "狗狗餐具"){
					uni.request({
						url: "http://106.13.111.39:40002/api/dogTableware",
						success(e) {
							// console.log(e.data)
							self.dataList = e.data
						}
					})
				}else if(this.navData == "狗狗住所"){
					uni.request({
						url: "http://106.13.111.39:40002/api/dogResidence",
						success(e) {
							// console.log(e.data)
							self.dataList = e.data
						}
					})
				}else{
					// console.log(222)
					var self = this;
					uni.request({
						method: "POST",
						url: 'http://106.13.111.39:40002/api/search/key', //仅为示例，并非真实接口地址。
						data: {
							"key" : self.navData
						},
	　　　　				dataType:'json',
						header: {
							// 'custom-header': 'hello' ,//自定义请求头信息
							'content-type':'application/x-www-form-urlencoded'
						}, 
						success(e){
							self.dataList = e.data
						}
					})
				}
			},
			ChangeUrl(url) {
				// console.log("http://106.13.111.39:40002" + url)
				return "http://106.13.111.39:40002" + url;
			},
			navToCommodity(tabId){
				uni.navigateTo({
					url: "commodity?tabId=" + tabId,
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.all{
		width: 750upx;
		padding-bottom: 20upx;
		.listBox{
			width: 50%;
			display: inline-block;
			box-sizing: border-box;
			padding: 20upx;
			vertical-align: top;
			.content{
				background: #FFFFFF;
				border-radius: 30upx;
				overflow: hidden;
				image{
					width: 100%;
				}
				text{
					color:#333333;
					display: inline-block;
					font-size: 25upx;
					margin: 0 10upx;
				}
				.des{
					height: 40upx;
					padding: 10upx 0;
					.price{
						float: left;
						color: #DD524D;
						font-size: 27upx;
					}
					.payNum{
						float: right;
						color:#999999;
					}
				}
			}
		}
	}
</style>
