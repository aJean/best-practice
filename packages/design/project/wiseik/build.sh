#!/bin/bash
set -e

# add path
export PATH=/home/fis/npm/bin:$PATH

cd client
npm --registry http://cp01-fis-build-02.epc.baidu.com:8995 install
cd ..

# 产出
yog2 release prod -cd output --fis3

# 进入output目录
cd output

# 删除产出的test目录
rm -rf test

# 定义一些变量
MOD_NAME="wiseik"
TAR="$MOD_NAME.tar.gz"
STATIC="static-$MOD_NAME.tar.gz"

# 将output目录进行打包
tar zcf $TAR ./*
mv $TAR ../

# 打包static目录
mkdir -p image/mobile/n
mv ./static ./image/mobile/n
tar zcf $STATIC ./image
mv $STATIC ../

cd ..
rm -rf output

mkdir output

mv $TAR output/
mv $STATIC output/

echo "build end"
