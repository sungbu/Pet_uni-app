<template>
	<view class="all">
		<view class="left">
			<view class="navBox" @tap="changeTab(index)" :class="{'on':index == activeId}" v-for="(navTitle,index) in navText">
				<text>{{navTitle.header}}</text>
			</view>
		</view>
		<view class="right">
			<view class="list" :class="{'on':index == activeId}" v-for="(list,index) in navText">
				<image :src="changeUrl(index)"></image>
				<view class="listNav" v-for="nav in list.content">
					<text @tap="navToListTab(nav)">{{nav}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navText: [
					{
						"id" : 0,
						"header": '热门',
						"content": ["热门主粮","热门零食","热门保健","热门日用"]
					},
					{
						"id" : 1,
						"header": "狗狗主粮",
						"content": ["进口主粮","国产主粮"]
					},
					{
						"id" : 2,
						"header": "狗狗零食",
						"content": ["洁齿磨牙","肉制零食"]
					},
					{
						"id" : 3,
						"header": "狗狗医疗",
						"content": ["体内驱虫","皮肤护理"]
					},
					{
						"id" : 4,
						"header": "狗狗日用",
						"content": ["狗狗餐具","狗狗住所"]
					}
				],
				activeId: 0
			}
		},
		methods: {
			changeTab(index) {
				this.activeId = index;
			},
			navToListTab(navData){
				uni.navigateTo({
					url: "../../separatePages/listTab?listTab=" + navData,
				})
			},
			changeUrl(index){
				console.log(index)
				return "../../../static/img/banner/favourite" + (index + 1) + ".jpg"
			}
		}
	}
</script>

<style lang="less">
	.all{
		background: #FFFFFF;
		width: 750upx;
		// margin: 20upx;
		.left{
			margin: 20upx 0 0 20upx;
			display: inline-block;
			// border: 1px solid black;
			vertical-align: top;
			width: 23%;
			background: #f8f8f8;
			.navBox{
				padding:20upx;
				text{
					font-size: 30upx;
					letter-spacing: 3upx;
					color:#555555;
				}
			}
			.on{
				border-left:2px solid #007AFF;
				box-sizing: border-box;
				background:#FFFFFF ;
				text{
					color:#333333;
					font-weight: 600;
				}
			}
		}
		.right{
			margin: 20upx 20upx 0 0;
			display: inline-block;
			// border: 1px solid black;
			background: #FFFFFF;
			width: 70%;
			height: 100vh;
			overflow: hidden;
			.list{
				display: none;
				height: 100vh;
				padding: 30upx;
				image{
					width: 100%;
					height: 200upx;
				}
				.listNav{
					display: inline-block;
					margin:20upx;
					text{
						font-size: 25upx;
						border: 1px solid #999999;
						border-radius: 30upx;
						color: #333333;
						padding: 10upx;
					}
				}
			}
			.on{
				display: block;
			}
		}
	}
</style>
