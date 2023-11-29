# 10回繰り返す
n = int(input("2進数に変換したい数字を入力してね"))
while n > 0 :
    print(n%2,end="")
    n = n // 2