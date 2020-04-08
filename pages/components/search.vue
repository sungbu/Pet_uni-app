<template>
	<view>
		<view class="place"></view>
		<view class="topBar">
			<view class="search">
				<input type="text" @confirm="navToListTab" placeholder="请输入关键词" v-model="searchValue">
				<view class="searchBtn" @tap="navToListTab"><i class="iconfont">&#xe63c;</i></view>
			</view>
			<view class="clock"><i class="iconfont">&#xe642;</i></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchValue: "",
			}
		},
		methods:{
			navToListTab() {
				if(this.searchValue == "" || this.searchValue == undefined){
					uni.showToast({
						title: "输入内容不能为空",
						icon: "none"
					})
				}else{
					uni.navigateTo({
						url: "/pages/separatePages/listTab?listTab=" + this.searchValue,
					})
				}
			}
		}
	}
</script>

<style lang="less" scoped>
.topBar{
	// position: fixed;
	// padding: 10upx;
	padding: 10px 0;
	width: 750upx;
	height: 80upx;
	background: #FFFFFF;
	z-index: 2;
	.search{
		width: 80%;
		height: 70upx;
		background-color: #C8C7CC;
		display: inline-block;
		border-radius: 40upx;
		text-indent: 20upx;
		margin-left: 20upx;
		border: 1px solid #333333;
		overflow: hidden;
		input{
			display: inline-block;
			vertical-align: top;
			width: 80%;
			height: 70upx;
			font-size: 25upx;
			// padding: 20upx;
			// border: 1px solid red;
			box-sizing: border-box;
			line-height: 70upx;
		}
		.searchBtn{
			height: 70upx;
			// border: 1px solid red;
			vertical-align: top;
			display: inline-block;
			line-height: 70upx;
			// margin-top: 20upx;
			// line-height: 40px;
			// border: 1px solid red;
			
		}
	}
	.clock{
		display: inline-block;
		vertical-align: top;
		margin-left: 30upx;
		// margin: 20upx;
		// border: 1px solid #007AFF;
		height: 70upx;
		line-height: 70upx;
		font-size: 20upx;
	}
}
.place{
	height: var(--status-bar-height);
}
</style>
