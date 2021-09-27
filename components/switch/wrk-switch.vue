<template>
	<div class="wrk-switch" :class="{'is-checked':value}" @click="handleClick">
		<span class="wrk-switch_core" ref='core'>
			<span class="wrk-switch_button"></span>
		</span>
		<input type="checkbox" class="wrk-switch_input" :name="name" ref="input" :checked="value">
	</div>
</template>

<script>
	export default {
		name: 'wrkSwitch',
		props: {
			value: {
				type: Boolean,
				default: false
			},
			activeColor: {
				type: String,
				default: ''
			},
			inactiveColor: {
				type: String,
				default: ''
			},
			name: {
				type: String,
				default: ''
			}
		},
		mounted() {
			// 如果设置了开关自定义激活||不激活颜色
			if (this.activeColor || this.inactiveColor) {
				// 判断开关是激活还是不激活，激活-颜色==this.activeColor，不激活-颜色==this.inactiveColor
				var color = !this.value ? this.activeColor : this.inactiveColor
				// 更改颜色
				this.$refs.core.style.border = color
				this.$refs.core.style.backgroundColor = color
			}

			// 控制checkbox的值,input值同步value值（改成了:checked="value"）
			// this.$refs.input.checked = this.value
		},
		watch: {
			'value'(e) {
				// 修改开关颜色
				if (this.activeColor || this.inactiveColor) {
					var color = !e ? this.activeColor : this.inactiveColor
					this.$refs.core.style.borderColor = color
					this.$refs.core.style.backgroundColor = color
				}
			}
		},
		methods: {
			handleClick() {
				// 而子组件也可以通过$emit(‘input’,false)，去改变父组件中v-model 和 子组件中 value 的值 。
				this.$emit('input', !this.value)

				// 控制checkbox的值,input值同步value值（改成了:checked="value"）
				// this.$refs.input.checked = this.value
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrk-switch {
		display: inline-block;
		align-items: center;
		position: relative;
		font-size: 14px;
		line-height: 20px;
		vertical-align: middle;

		.wrk-switch_core {
			width: 40px;
			height: 20px;
			background: #dcdfe6;
			margin: 0;
			display: inline-block;
			position: relative;
			border: 1px solid #dcdfe6;
			outline: none;
			border-radius: 10px;
			box-sizing: border-box;
			cursor: pointer;
			transition: border-color .3s, background-color .3s;
			vertical-align: middle;

			.wrk-switch_button {
				display: inline-block;
				position: absolute;
				top: 1px;
				left: 1px;
				border-radius: 100%;
				transition: all .3s;
				width: 16px;
				height: 16px;
				background-color: #fff;
			}
		}

		.wrk-switch_input {
			position: absolute;
			width: 0;
			height: 0;
			opacity: 0;
			margin: 0;
		}
	}

	.is-checked {
		.wrk-switch_core {
			border-color: #409eff;
			background-color: #409eff;

			.wrk-switch_button {
				transform: translateX(20px);
			}
		}
	}
</style>
