# convert_oc_to_swift
chrome插件，可以点击菜单把剪贴板的代码，通过gpt转换为swift

# 使用方法
* 使用chrome浏览器，在地址栏输入：chrome://extensions/
* 点击“加载已解压的扩展程序”，在文件浏览中选择当前库的目录
* chrome可能需要打开“开发者模式”
* 打开gpt页面，右键点击菜单“转换剪贴板的OC代码”

# shell命令
* shell/convert_oc_to_swift.sh 需要一个.m文件的地址做参数
* 脚本文件把.m中的类方法和实例方法复制到剪贴板
* 然后自动打开chrome，配合chrome插件使用
