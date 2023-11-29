# 正負の判定
a = int(inut("数値を入力してください"))
if a > 0 :
	print(a,"は正の数")
elif a < 0 :
	print(a,"は負の数")
else :
	print(a,"は正でも負でもない")

# 正負偶奇の判定
if a > 0 :
	if a % 2 == 0 :
		print(a,"は正の偶数")
	else :
		print(a,"は正の奇数")
elif a < 0 :
	if a % 2 == 0 :
		print(a,"は負の偶数")
	else :
		print(a,"は負の奇数")
else :
	print(a,"は正でも負でもない偶数")


# 正負偶奇の判定
if a % 2 == 0 :
	b = "偶数"
else :
	b = "奇数"
if a > 0 :
	print(a,"は正の",b)
elif a < 0 :
	print(a,"は負の",b)
else :
	print(a,"は正でも負でもない",b)
