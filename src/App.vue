<template>
	<div id="app">
		<!-- button -->
		<div>
			<wrk-button>按钮</wrk-button>
			<wrk-button type="primary">primary按钮</wrk-button>
			<wrk-button type="success">success按钮</wrk-button>
			<wrk-button type="info">info按钮</wrk-button>
			<wrk-button type="warning">warning按钮</wrk-button>
			<wrk-button type="danger">danger按钮</wrk-button>
		</div>
		<div>
			<wrk-button plain>按钮-朴素</wrk-button>
			<wrk-button plain type="primary">primary按钮-朴素</wrk-button>
			<wrk-button plain type="success">success按钮-朴素</wrk-button>
			<wrk-button plain type="info">info按钮-朴素</wrk-button>
			<wrk-button plain type="warning">warning按钮-朴素</wrk-button>
			<wrk-button plain type="danger">danger按钮-朴素</wrk-button>
		</div>
		<div>
			<wrk-button round>按钮-圆角</wrk-button>
			<wrk-button round type="primary">primary按钮-圆角</wrk-button>
			<wrk-button round type="success">success按钮-圆角</wrk-button>
			<wrk-button round type="info">info按钮-圆角</wrk-button>
			<wrk-button round type="warning">warning按钮-圆角</wrk-button>
			<wrk-button round type="danger">danger按钮-圆角</wrk-button>
		</div>
		<div>
			<wrk-button circle>按钮-圆</wrk-button>
			<wrk-button circle type="primary">primary按钮-圆</wrk-button>
			<wrk-button circle type="success">success按钮-圆</wrk-button>
			<wrk-button circle type="info">info按钮-圆</wrk-button>
			<wrk-button circle type="warning">warning按钮-圆</wrk-button>
			<wrk-button circle type="danger">danger按钮-圆</wrk-button>
		</div>
		<div class="row">
			<wrk-button icon="baobiaoguanli"></wrk-button>
			<wrk-button type="primary" icon="hetongguanli">有文字</wrk-button>
			<wrk-button type="primary" @click="getInfo">有点击事件</wrk-button>
			<wrk-button type="primary" disabled>disabled!</wrk-button>
		</div>
		<!-- dialog -->
		<div>
			<wrk-button @click="visible=true">打开dialog</wrk-button>
			<wrk-dialog title="温馨提示" width="80%" top="200px" :visible.sync="visible">
				<!--使用v-slot指定插槽进行编辑 -->
				<template v-slot:title>
					<h3 style="color:red">我是标题</h3>
				</template>
				<ul>
					<li>1</li>
					<li>2</li>
					<li>3</li>
				</ul>
				<template v-slot:footer>
					<wrk-button @click="visible=false">取消</wrk-button>
					<wrk-button type="primary">确定</wrk-button>
				</template>
			</wrk-dialog>
		</div>
		<!-- input -->
		<div>
			<wrk-input type="text" placeholder="未禁用"></wrk-input>
			<wrk-input type="text" placeholder="禁用" disabled></wrk-input>
			<wrk-input type="text" v-model="username"></wrk-input>
		</div>
		<!-- switch -->
		<div>
			<wrk-switch v-model="active" name='开关' active-color="#13ce66" inactive-color="#ff4949"></wrk-switch>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				visible: false,
				username: '123',
				active: false
			}
		},
		methods: {
			getInfo(e) {
				console.log('获取信息', e)
			}
		}
	}
</script>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
