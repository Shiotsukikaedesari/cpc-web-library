## Linux-基础

### 学习地址

原理性
[https://www.bilibili.com/video/BV1X64y1T7DZ](https://www.bilibili.com/video/BV1X64y1T7DZ)

实用性
[https://www.bilibili.com/video/BV1dW411M7xL](https://www.bilibili.com/video/BV1dW411M7xL)


### 介绍
* Linux是一款操作系统，免费，开源，安全，高效，稳定，处理高并发强。
* 主要发行版本：CentOS、Redhat、Ubuntu、Suse、红旗Linux

### VM与Linux系统（CentOS）安装
* Virtual Machine, VM12：[https://www.vmware.com/](https://www.vmware.com/)
* Linux(CentOS)：[https://www.linux.org/pages/download/](https://www.linux.org/pages/download/)

### VMtools
* 可以进行虚拟机和主机的复制粘贴共享
* 可以进行虚拟机和主机的文件共享

### 虚拟机网络连接说明
* 桥连接：与主机的IP处于相同网段，能与其他系统通信，容易造成IP冲突。
* NAT连接：网络地址转换，主机另起一个内部IP网段，虚拟机使用此网段，且能访问外网。
* 主机模式：独立IP，不能访问外网。

### Linux目录结构
* 含有最上层的根目录'/'，文件系统层级为树结构。
* Linux的一切皆文件
```
/--+
   |
   boot--+ // Linux启动的核心文件与连接文件镜像文件
   |
   proc--+ // 虚拟目录，系统内存映射
   | 
   srv--+ // 存放服务启动之后所需要提取的数据
   | 
   sys--+ // 文件系统
   | 
   tmp--+ // 存放零时文件
   | 
   sbin--+ // super user，存放系统管理员使用的系统管理程序
   |
   bin--+ // Binary，存放最经常用的命令
   |
   home--+ // 存放普通用户的主目录
   |
   root--+ // 系统管理员目录
   |
   lib--+ // 开机所需要的最基本的动态链接共享库
   |
   lost+found--+ // 系统非法关机所存放的文件
   |
   etc--+ // 系统管理所需要的配置文件和子目录
   |
   usr--+ // 用户的应用程序安装目录，相当于window的program file
   |    |
   |    local--+ // 给主机安装额外软件的安装目录，通过编译源码方式安装的程序
   dev--+ // 设备管理器
   | 
   media--+ // 自动识别设备后的挂载目录
   | 
   mnt--+ // 共享文件的挂载目录
   | 
   opt--+ // 给主机额外安装软件的目录
   | 
   var--+ // 存放不断扩充与修改的文件
   | 
   selinux--+ // SELinux是一种安全子系统，控制程序访问特定文件
```